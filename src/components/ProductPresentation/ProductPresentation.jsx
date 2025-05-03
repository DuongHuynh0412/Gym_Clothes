import React from 'react';
import ProductFilter from './controls/ProductFilter/ProductFilter';
import ProductList from './controls/ProductList/ProductList';
import {Box, Flex, Grid, Separator, Text} from "@radix-ui/themes";

const ProductPresentation = () => {
    return (
        <Flex
            className={'sticky'}
            direction={'column'}
            gap={"6"}
        >
            <Flex direction={'column'} className={"px-16"}>
                <Text size={"1"} weight={"bold"}>Womens</Text>
                <Flex direction={'row'} align={'center'} gap={"2"}>
                    <Text size={"3"} weight={'bold'}>LEGGINGS</Text>
                    <Text size={"1"} weight={"medium"} color={'gray'}>177 Products</Text>
                </Flex>
            </Flex>

            <Grid columns={'20'} className={"px-16"}>
                <Box gridColumnStart={'1'} gridColumnEnd={'4'}>
                    <ProductFilter/>
                </Box>
                <Box gridColumnStart={'4'} gridColumnEnd={'21'} className={'border-1 border-red-50'}>
                    <ProductList/>
                </Box>
            </Grid>
        </Flex>
    );
};

export default ProductPresentation;