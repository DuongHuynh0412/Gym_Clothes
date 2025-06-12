import {LockClosedIcon, TrashIcon} from "@radix-ui/react-icons";
import {Dialog} from "radix-ui";
import React, {useEffect, useState} from "react";
import "./HeaderLoveModal.css";
import {Box, Button, Flex, Grid, Separator} from "@radix-ui/themes";
import {Text} from "@radix-ui/themes";
import {convertImageUrl, GetLocalStorage, SetLocalStorage} from "../../commons/method.common";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";
import {GetFavoriteItems, UpdateFavoriteList} from "../../services/user/User.Service";
import {faHeart as heartSolid} from "@fortawesome/free-solid-svg-icons";
import {faHeart as heartRegular} from "@fortawesome/free-regular-svg-icons";
import {HttpStatusCode} from "axios";

const HeaderLoveModal = () => {
        const [favoriteData, setFavoriteData] = useState([]);
        const [openModal, setOpenModal] = useState(false);
        const [openAuthorizeModal, setOpenAuthorizeModal] = useState(false);
        const navigate = useNavigate();

        const getFavoriteList = (open) => {
            GetFavoriteItems().then(result => {
                setFavoriteData(result.data);
                SetLocalStorage({
                    key: "favorite-list",
                    data: result.data.map(item => item.productColorDetails?.Product_Color_Code)
                });
                setOpenModal(open)
            }).catch((err) => {
                if (err.status === HttpStatusCode.Unauthorized) {
                    setOpenAuthorizeModal(open);
                }
            });
        };

        useEffect(() => {
            getFavoriteList(false);
        }, []);

        const handleOpenChange = (open) => {
            if (open) {
                getFavoriteList(open);
            }
        };

        const handleDialogClick = (e) => {
            e.preventDefault();
            e.stopPropagation();
        };

        function removeProduct(productColorCode) {
            const wishListItems = GetLocalStorage("favorite-list");
            if (wishListItems) {
                const wishList = JSON.parse(wishListItems);
                if (wishList) {
                    const newBagList = wishList.filter((item) => item !== productColorCode);
                    const newFavoriteData = favoriteData.filter((item) => item.productColorDetails?.Product_Color_Code !== productColorCode);
                    UpdateFavoriteList(newBagList).then(result => {
                        if (result === null) {
                            throw new Error('updateFail')
                        }
                        setFavoriteData(newFavoriteData);
                        SetLocalStorage({key: "favorite-list", data: newBagList});
                    }).catch((e) => {
                        return;
                    })
                }
            }
        }

        return (
            <Dialog.Root open={openModal} onOpenChange={handleOpenChange}>
                <Dialog.Trigger asChild>
                    <FontAwesomeIcon icon={heartSolid} className="cursor-pointer"/>
                </Dialog.Trigger>
                <Dialog.Root
                    open={openAuthorizeModal}
                    onOpenChange={setOpenAuthorizeModal}
                >
                    <Dialog.Portal>
                        <Dialog.Overlay className="DialogOverlay"/>
                        <Dialog.Content
                            className={'loveDialog'}
                            onClick={handleDialogClick} // Use the new handler function
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
                    <Dialog.Overlay
                        className="DialogOverlay"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setOpenModal(false);
                        }}
                    />
                    <Dialog.Content className="header-love-modal">
                        <Dialog.Title className="p-4 bg-white sticky top-0 flex items-center gap-2">
                            <FontAwesomeIcon icon={heartSolid} className="cursor-pointer"/>
                            <Text as="p" size="3" weight="medium">
                                Save to wishlist
                            </Text>
                        </Dialog.Title>
                        <Separator orientation="horizontal" size="4"/>
                        <Flex direction="column">
                            <Flex direction="column" className="gap-8 p-4">
                                {favoriteData.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <Grid
                                            columns="10"
                                            className="bag-item cursor-pointer"
                                            onClick={() => {
                                                navigate(`/products/${item.productColorDetails?.Product_Color_Code}`)
                                                setOpenModal(false);
                                            }}
                                        >
                                            <Grid gridColumnStart="1" gridColumnEnd="4">
                                                <img
                                                    src={convertImageUrl(item.productColorDetails?.Product_Color_Images?.[0]?.url)}
                                                    alt=""
                                                    className="cursor-pointer w-full"
                                                />
                                            </Grid>
                                            <Grid gridColumnStart="4" gridColumnEnd="11">
                                                <Flex
                                                    direction="column"
                                                    justify="between"
                                                    className="bag-item-info"
                                                >
                                                    <Flex direction="column">
                                                        <Text size={"3"}
                                                              weight={'bold'}>{item?.product?.Product_Name}</Text>
                                                        <Text size={'4'}
                                                              weight={'medium'}>{item?.productColorDetails?.Product_Color_Name}</Text>
                                                    </Flex>
                                                    <Flex justify="between">
                                                        <Flex className="love-and-trash">
                                                            <TrashIcon
                                                                className="cursor-pointer trash-icon"
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    e.stopPropagation();
                                                                    removeProduct(item.System_User_Favorites)
                                                                }}
                                                            />
                                                        </Flex>
                                                    </Flex>
                                                </Flex>
                                            </Grid>
                                        </Grid>
                                        {index < favoriteData.length - 1 ? (
                                            <Separator orientation="horizontal" size="4"/>
                                        ) : null}
                                    </React.Fragment>
                                ))}
                            </Flex>
                            <Separator orientation="horizontal" size="4"/>
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
    }
;

export default HeaderLoveModal;