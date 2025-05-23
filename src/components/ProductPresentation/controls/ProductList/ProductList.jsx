import React, {useEffect, useState} from 'react';
import {Box, Card, Flex, Grid, Text} from "@radix-ui/themes";
import ProductItem from "../ProductItem/ProductItem";


const ProductList = ({collectionData}) => {
    return (
        <Grid columns={'4'} gap={'4'}>
            {
                collectionData.map((collection, index) => {
                    const product = collection?.ProductDetail;
                    const productColor = product?.ProductColorDetail;
                    const productInventory = product?.ProductInventoryList;
                    return (
                        <ProductItem
                            key={index}
                            index={index}
                            productColorCode={productColor.Product_Color_Code}
                            frontImageUrl={productColor?.Product_Color_Images?.[0]?.url}
                            backImageUrl={productColor?.Product_Color_Images?.[1]?.url}
                            name={product?.Product_Name}
                            rating={product?.Product_Rating}
                            color={productColor?.Product_Color_Name}
                            price={product?.Product_Price}
                            sizes={productInventory}
                        />
                    )
                })
            }
        </Grid>
    );
};

export default ProductList;