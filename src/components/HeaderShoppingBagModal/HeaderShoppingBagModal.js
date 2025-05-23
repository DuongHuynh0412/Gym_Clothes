import {LockClosedIcon, TrashIcon} from "@radix-ui/react-icons";
import {Dialog,} from "radix-ui";
import {useEffect, useState} from "react";
import './HeaderShoppingBagModal.css'
import {Box, Button, Flex, Grid, Text, Separator} from "@radix-ui/themes";
import {HeartIcon} from "@radix-ui/react-icons";
import {convertImageUrl, GetLocalStorage} from "../../commons/method.common";

const HeaderShoppingBagModal = () => {
    const [selectedData, setSelectedData] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        if (openModal) {
            console.log('get new')
            const selectedProductList = GetLocalStorage('shopping-cart')
            console.log('selectedProductList', selectedProductList)
            if (selectedProductList) {
                const bagList = JSON.parse(selectedProductList);
                setSelectedData(bagList || [])
            }
        }
    }, [openModal]);

    function removeProduct(productColorCode, productSize) {
        console.log('productColorCode', productColorCode)
        console.log('productSize', productSize)
        const selectedProductList = GetLocalStorage('shopping-cart')
        if (selectedProductList) {
            const bagList = JSON.parse(selectedProductList);
            if (bagList) {
                const newBagList = bagList.filter(item => item.product.Product_Color_Code !== productColorCode && item.productSize?.Product_Size_Code !== productSize);
                setSelectedData(newBagList)
            }
        }
    }

    function updateSubtotal() {
        // const items = document.querySelectorAll('.cart-item');
        // let subtotal = 0;
        //
        // items.forEach(item => {
        //     const priceText = item.querySelector('.price').textContent.replace('$', '');
        //     const price = parseFloat(priceText);
        //     const quantity = parseInt(item.querySelector('select').value);
        //     subtotal += price * quantity;
        // });
        //
        // document.getElementById('subtotal').textContent = `$${subtotal}`;
    }

    console.log('selectedData', selectedData)
    return (
        <Dialog.Root onOpenChange={setOpenModal}>
            <Dialog.Trigger asChild onClick={() => {
                setOpenModal(true)
            }}>
                <button className="TriggerButton">Your Bag</button>
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Overlay
                    className={"DialogOverlay"}
                    onClick={() => setOpenModal(false)}
                />
                <Dialog.Content className={"DialogContent"}>
                    <Dialog.Title className={'p-4'}>
                        <Text size={"2"} weight={'medium'}>
                            Your Bag
                        </Text>
                    </Dialog.Title>
                    <Flex direction={'column'} className={'gap-8 p-4 overflow-y-auto'}>
                        {
                            selectedData.map((item, index) => {
                                const productImage = item.product?.Product_Color_Images;
                                return (
                                    <>
                                        <Grid columns={"10"} className={'bag-item'}>
                                            <Grid gridColumnStart={'1'} gridColumnEnd={'4'}>
                                                <img
                                                    src={convertImageUrl(productImage?.[0]?.url)}
                                                    alt="" className={'w-full'}/>
                                            </Grid>
                                            <Grid gridColumnStart={'4'} gridColumnEnd={'11'}>
                                                <Flex direction={'column'} justify={'between'}
                                                      className={'bag-item-info'}>
                                                    <Flex direction={'column'}>
                                                        <Text size={'1'}>Vital Sculpt Seamless Short</Text>
                                                        <Text size={'1'} color={'gray'}>Electric Blue/Marl | S</Text>
                                                        <Text size={'1'} weight={'bold'}>$46</Text>
                                                    </Flex>
                                                    <Flex justify={'between'}>
                                                        <Flex className={'love-and-trash'}>
                                                            <HeartIcon className={'cursor-pointer heart-icon'}/>
                                                            <TrashIcon
                                                                className={'cursor-pointer trash-icon'}
                                                                onClick={()=>{removeProduct(item.product?.Product_Color_Code, item.productSize?.Product_Size_Code)}}
                                                            />
                                                        </Flex>
                                                        <Box>
                                                            <Box className="quantity">
                                                                <label className={'mr-1 product-number-label'}>
                                                                    <Text size={'1'} weight={'light'}>Qty:</Text>
                                                                </label>
                                                                <select className={'cursor-pointer product-number'}
                                                                        onChange={updateSubtotal}>
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
                                        {
                                            index < selectedData.length - 1 ?
                                                (
                                                    <Separator orientation="horizontal" size={'4'}/>
                                                )
                                                :
                                                ""

                                        }
                                    </>
                                )
                            })
                        }
                    </Flex>
                    <Box className={'w-full fixed bottom-0 purchase-button-div'}>
                        <Button color="gray" className={'purchase-button'}>
                            <Text size={"4"} weight={'bold'}>CHECKOUT SECURELY</Text>
                        </Button>
                    </Box>
                    <Dialog.Close asChild>
                        <button className="CloseButton" onClick={() => setOpenModal(false)}>✕</button>
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    )
};
export default HeaderShoppingBagModal;