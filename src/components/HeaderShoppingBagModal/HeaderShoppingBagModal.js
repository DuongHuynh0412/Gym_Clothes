import {LockClosedIcon, TrashIcon} from "@radix-ui/react-icons";
import {Dialog} from "radix-ui";
import React, {useEffect, useState} from "react";
import "./HeaderShoppingBagModal.css";
import {Box, Button, Flex, Grid, Text, Separator} from "@radix-ui/themes";
import {HeartIcon} from "@radix-ui/react-icons";
import {convertImageUrl, GetLocalStorage, SetLocalStorage} from "../../commons/method.common";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping, faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {
    GetFavoriteItems,
    GetShoppingBag,
    UpdateFavoriteList,
    UpdateShoppingBag
} from "../../services/user/User.Service";
import {HttpStatusCode} from "axios";
import LoveItem from "../commons/LoveItem/LoveItem";

const HeaderShoppingBagModal = () => {
    const [selectedData, setSelectedData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [openAuthorizeModal, setOpenAuthorizeModal] = useState(false);
    const navigate = useNavigate();

    const getShoppingBag = (open) => {
        GetShoppingBag().then(result => {
            setSelectedData(result.data);
            setOpenModal(open)
        }).catch((err) => {
            if (err.status === HttpStatusCode.Unauthorized) {
                setOpenAuthorizeModal(open);
            }
        });
    };

    useEffect(() => {
        getShoppingBag(openModal)
    }, []);

    function removeProduct(productColorCode, productSize) {
        const newSelectedData = selectedData.filter((item) => item.productColorDetails?.Product_Color_Code !== productColorCode || item.productSizeDetails?.Product_Size_Code !== productSize);
        UpdateShoppingBag(newSelectedData).then(result => {
            if (result === null) {
                throw new Error('updateFail')
            }
            setSelectedData(newSelectedData);
        }).catch((e) => {
            return;
        })
    }

    function updateSubtotal(productColorCode, productSize, amount) {
        const newSelectedData = selectedData.map((item) => {
            if (item.System_User_Shopping_Bag?.Product_Color_Code === productColorCode && item.System_User_Shopping_Bag?.Product_Size_Code === productSize) {
                item.System_User_Shopping_Bag.Product_Selected_Amount = amount
            }
            return item;
        });
        const newShoppingBag = newSelectedData.map(item => item.System_User_Shopping_Bag);
        UpdateShoppingBag(newShoppingBag).then(result => {
            if (result === null) {
                throw new Error('updateFail')
            }
            setSelectedData(newSelectedData);
        }).catch((e) => {
            return;
        })
    }

    const handleDialogClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const handleOpenChange = (open) => {
        if (open) {
            getShoppingBag(open);
        }
    };

    return (
        <Dialog.Root open={openModal} onOpenChange={handleOpenChange}>
            <Dialog.Trigger asChild>
                <FontAwesomeIcon icon={faShoppingCart} className="cursor-pointer"/>
            </Dialog.Trigger>
            <Dialog.Root
                open={openAuthorizeModal}
                onOpenChange={setOpenAuthorizeModal}
            >
                <Dialog.Portal>
                    <Dialog.Overlay className="DialogOverlay"/>
                    <Dialog.Content
                        className={'loveDialog'}
                        onClick={handleDialogClick}
                    >
                        <Dialog.Description className="DialogDescription">
                            <img src="/not-login-image.avif" alt="not-login-image"/>
                            <div className={'wishlist-content'}>
                                <div className={'mt-6 description-detail'}>
                                    <p className={'text-center'}>
                                        Ever wish you could save all your fave fits & accessories in one place to come
                                        back to later? Almost like a ✨ wishlist ✨.
                                    </p>
                                </div>
                                <Grid columns="2" className={'wishlist'}>
                                    <Button className={'register-button'} onClick={() => {
                                        window.location = '/register'
                                    }}>
                                        CREATE ACCOUNT
                                    </Button>
                                    <Button className={'login-button'} onClick={() => {
                                        window.location = '/login'
                                    }}>
                                        LOG IN
                                    </Button>
                                </Grid>
                            </div>
                        </Dialog.Description>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
            <Dialog.Portal>
                <Dialog.Overlay className="DialogOverlay" onClick={() => setOpenModal(false)}/>
                <Dialog.Content className="DialogContent">
                    <Dialog.Title className="p-4 bg-white sticky top-0">
                        <Text size="2" weight="medium">
                            Your Bag
                        </Text>
                    </Dialog.Title>
                    <Flex direction="column">
                        <Flex direction="column" className="gap-8 p-4">
                            {
                                selectedData.map((item, index) => {
                                        const productDetail = item.product;
                                        const sizeDetail = item.productSizeDetails;
                                        const colorDetail = item.productColorDetails;
                                        return (
                                            <>
                                                <Grid columns="10" className="bag-item">
                                                    <Grid gridColumnStart="1" gridColumnEnd="4">
                                                        <img
                                                            src={convertImageUrl(colorDetail?.Product_Color_Images?.[0]?.url)}
                                                            alt=""
                                                            className="w-full"
                                                        />
                                                    </Grid>
                                                    <Grid gridColumnStart="4" gridColumnEnd="11">
                                                        <Flex
                                                            direction="column"
                                                            justify="between"
                                                            className="bag-item-info"
                                                        >
                                                            <Flex direction="column">
                                                                <Text size="1">{productDetail?.Product_Name}</Text>
                                                                <Flex>
                                                                    <Text color="gray">
                                                                        {colorDetail?.Product_Color_Name}
                                                                    </Text>
                                                                    <Separator
                                                                        orientation="vertical"
                                                                        className="mx-2"
                                                                    />
                                                                    <Text color="gray">
                                                                        {sizeDetail?.Product_Size_Name}
                                                                    </Text>
                                                                </Flex>
                                                                <Text size="1" weight="bold" className="price">
                                                                    ${colorDetail?.Product_Color_Price || 46}
                                                                </Text>
                                                            </Flex>
                                                            <Flex justify="between">
                                                                <Flex className="love-and-trash items-center">
                                                                    <LoveItem
                                                                        colorCode={colorDetail?.Product_Color_Code}
                                                                        className={''}
                                                                    />
                                                                    <TrashIcon
                                                                        className="cursor-pointer trash-icon"
                                                                        onClick={() =>
                                                                            removeProduct(
                                                                                productDetail?.Product_Code,
                                                                                sizeDetail?.Product_Size_Code
                                                                            )
                                                                        }
                                                                    />
                                                                </Flex>
                                                                <Box>
                                                                    <Box className="quantity">
                                                                        <label className="mr-1 product-number-label">
                                                                            <Text size="1" weight="light">
                                                                                Qty:
                                                                            </Text>
                                                                        </label>
                                                                        <select
                                                                            className="cursor-pointer product-number"
                                                                            onChange={(e) => {
                                                                                updateSubtotal(colorDetail?.Product_Color_Code, sizeDetail?.Product_Size_Code, e.target.value)
                                                                            }}
                                                                            defaultValue={item.Product_Selected_Amount || 1}
                                                                        >
                                                                            <option value="1">1</option>
                                                                            <option value="2">2</option>
                                                                            <option value="3">3</option>
                                                                            <option value="4">4</option>
                                                                            <option value="5">5</option>
                                                                            <option value="6">6</option>
                                                                            <option value="7">7</option>
                                                                            <option value="8">8</option>
                                                                            <option value="9">9</option>
                                                                            <option value="10">10</option>
                                                                        </select>
                                                                    </Box>
                                                                </Box>
                                                            </Flex>
                                                        </Flex>
                                                    </Grid>
                                                </Grid>
                                                {index < selectedData.length - 1 ? (
                                                    <Separator orientation="horizontal" size="4"/>
                                                ) : (
                                                    ""
                                                )}
                                            </>
                                        )
                                    }
                                )}
                        </Flex>
                        <Separator orientation="horizontal" size="4"/>
                        <Flex direction="column" className="p-4" gapY="3">
                            <Flex justify="between" className="subtotal-div">
                                <Text size="4">Subtotal</Text>
                                <Text size="4" weight="bold" id="subtotal">
                                    ${(selectedData.reduce((sum, item) => sum + (item.productColorDetails?.Product_Color_Price) * (item?.System_User_Shopping_Bag?.Product_Selected_Amount || 1), 0)).toFixed(2)}
                                </Text>
                            </Flex>
                            <Flex justify="between" className="shipping-div">
                                <Text size="4">Shipping</Text>
                                <Text size="4">Free</Text>
                            </Flex>
                            <Flex justify="between" className="total-div">
                                <Text size="4" weight="bold">Total</Text>
                                <Text size="4" weight="bold">
                                    ${(selectedData.reduce((sum, item) => sum + (item.productColorDetails?.Product_Color_Price) * (item?.System_User_Shopping_Bag?.Product_Selected_Amount || 1), 0)).toFixed(2)}
                                </Text>
                            </Flex>
                        </Flex>
                        <Separator orientation="horizontal" size="4"/>
                        <Box className="w-full sticky bottom-0 purchase-button-div">
                            <Button
                                color="gray"
                                className="purchase-button"
                                onClick={() => {
                                    navigate("/checkouts");
                                    setOpenModal(false);
                                }}
                            >
                                <Text size="4" weight="bold">CHECKOUT SECURELY</Text>
                            </Button>
                        </Box>
                    </Flex>
                    <Dialog.Close asChild>
                        <button className="CloseButton" onClick={() => setOpenModal(false)}>
                            ✕
                        </button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default HeaderShoppingBagModal;