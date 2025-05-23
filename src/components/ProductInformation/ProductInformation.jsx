import {Box, Button, Flex, Grid, Text} from "@radix-ui/themes";
import {HeartIcon, StarFilledIcon, UploadIcon} from "@radix-ui/react-icons";
import './ProductInformation.css'
import {useContext, useState} from "react";
import {ProductContext} from "../../providers/ProductProvider";
import {convertImageUrl, GetLocalStorage, SetLocalStorage, SetProductToLocalStorage} from "../../commons/method.common";
import {useNavigate} from "react-router-dom";

const ProductInformation = () => {
    const [selectedSize, setSelectedSize] = useState(undefined);
    const navigate = useNavigate();
    const productContext = useContext(ProductContext)
    const data = productContext.productData;
    const productColors = data?.ProductData?.ProductColorList;
    const productInventory = data?.ProductInventoryData;

    const handleMouseUp = (targetValue, item) => {
        if (!targetValue.className?.includes("focused-item") && !targetValue.className?.includes("selected-color")) {
            targetValue.className += "focused-item"
        }
        const colorName = document.getElementById('focused-color');
        colorName.textContent = item?.Product_Color_Name;
    }
    const handleMouseLeave = (targetValue) => {
        if (targetValue.className?.includes("focused-item")) {
            targetValue.className = targetValue.className.replace("focused-item", "")
        }
        const colorName = document.getElementById('focused-color');
        colorName.textContent = data?.Product_Color_Name;
    }

    const handleAddProductToBag = () => {
        let shoppingCart = GetLocalStorage('shopping-cart')
        const selectedSizeObject = productInventory.find(item => item.Product_Size_Code === selectedSize);
        if (!shoppingCart) {
            SetLocalStorage({
                key: 'shopping-cart',
                data: [{productSize: selectedSizeObject, product: data, productAmount: 1}]
            })
        } else {
            const productInShoppingCart = JSON.parse(shoppingCart);
            const existedIndex = productInShoppingCart.findIndex(item => {
                return item.product.Product_Color_Code === data.Product_Color_Code
                    && item.productSize?.Product_Size_Code === selectedSize
            });
            if (existedIndex > -1) {
                productInShoppingCart[existedIndex].productAmount += 1;
                shoppingCart = productInShoppingCart;
            } else {
                shoppingCart = [
                    ...productInShoppingCart,
                    {
                        productSize: selectedSizeObject,
                        product: data,
                        productAmount: 1
                    }
                ]
            }
            SetLocalStorage({
                key: 'shopping-cart',
                data: shoppingCart
            })
        }
        setSelectedSize(undefined);
    }

    const handleOpenViewProduct = (productColorCode) =>{
        navigate(`/products/${productColorCode}`);
    }

    return (
        <Grid gridColumnStart="6" gridColumnEnd="11" className={'flex flex-col items-center product-info'}>
            <Flex direction="column" align='center' gapY="5">
                <Flex direction="column" align='center' gap={'2'}>
                    <Text
                        size='1'
                        weight="medium"
                        className={"product-tag"}
                    >
                        NEW
                    </Text>
                    <Text size='4' weight="bold" className={'mt-2'}>
                        {data?.ProductData?.Product_Name}
                    </Text>
                    <Text size='1' weight="light">
                        Oversized Fit
                    </Text>
                    <Text size='1' weight="bold">
                        $38
                    </Text>
                </Flex>
                <Flex align='center' justify="between" gapX="5">
                    <Flex align='center' className={"product-rate"} gap={"1"}>
                        <Flex align='center'>
                            <StarFilledIcon style={{width: '12px', height: '12px'}}/>
                            <Text size='1' weight="bold">
                                5
                            </Text>
                        </Flex>
                        <Text size='1' weight="bold">
                            (2)
                        </Text>
                    </Flex>
                    <Box className={'product-icon-box'}>
                        <HeartIcon className={'product-icon'}/>
                    </Box>
                    <Box className={'product-icon-box'}>
                        <UploadIcon className={'product-icon'}/>
                    </Box>
                </Flex>
                <Flex direction='column' align='center' gapY={'1'} className={'product-type-infomation'}>
                    <Text as={'p'} weight={'bold'} size={'2'}>NEW VITAL SCULPT</Text>
                    <Text as={'p'} size={'1'} align={'center'}>Soft, stretchy, made for movement. Just don’t hit any
                        super deep squats in it JIC, as the fabric may become sheer when pushed to the limit.</Text>
                </Flex>
                <Flex direction={"column"} align={'center'} gapY={'1'}>
                    <Flex direction={'row'} gapY={'1'} gapX={'2'} height={'6rem'}>
                        {productColors?.map(item => {
                            return (
                                <img
                                    onMouseMove={(e) => {
                                        handleMouseUp(e.target, item)
                                    }}
                                    onMouseLeave={(e) => {
                                        handleMouseLeave(e.target)
                                    }}
                                    onClick={()=> handleOpenViewProduct(item.Product_Color_Code)}
                                    key={item.Product_Color_Code}
                                    className={`rounded-lg cursor-pointer h-full ${data?.Product_Color_Code === item.Product_Color_Code ? "selected-color" : ""}`}
                                    src={convertImageUrl(item?.Product_Color_Images?.[0]?.url)}
                                    alt={item?.Product_Color_Name}
                                />
                            )
                        })}
                    </Flex>
                    <Box>
                        <Text
                            size="1"
                            weight="medium"
                            id={"focused-color"}
                            color={'gray'}
                        >
                            {data?.Product_Color_Name}
                        </Text>
                    </Box>
                </Flex>
                <Flex
                    direction='column'
                    align='flex-start'
                    gapY={'1'}
                    className={'w-full'}
                >
                    <Text size="1" color={'gray'}>
                        Select a size
                    </Text>
                    <Grid
                        gapY={'1'}
                        columns={'7'}
                        className={'w-full px-2 py-3'}
                        gapX={'2'}
                        style={{
                            border: '1px solid gray', borderRadius: '1rem'
                        }}
                    >
                        {productInventory?.map((item, index) => {
                            return (
                                <Flex
                                    key={index}
                                    className={`size-item ${selectedSize === item.Product_Size_Code ? "activated" : ""}`}
                                    align="center"
                                    justify="center"
                                    onClick={() => {
                                        setSelectedSize(item.Product_Size_Code)
                                    }}
                                >
                                    <Text size={'1'}>
                                        {item?.ProductSizeData?.Product_Size_Name}
                                    </Text>
                                </Flex>)
                        })}
                    </Grid>
                </Flex>
                <Button className={'add-to-bag-button'} onClick={handleAddProductToBag}>
                    ADD TO BAG
                </Button>
            </Flex>
        </Grid>)
}
export default ProductInformation;