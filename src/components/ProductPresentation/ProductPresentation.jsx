import React, {useEffect, useState} from 'react';
import ProductFilter from './controls/ProductFilter/ProductFilter';
import ProductList from './controls/ProductList/ProductList';
import {Box, Flex, Grid, Separator, Text} from "@radix-ui/themes";
import {SearchProducts, SearchProductsInCollection} from "../MainProductTypeSlides/MainProductTypeSlides.service";
import {useParams, useSearchParams} from "react-router-dom";

const ProductPresentation = () => {
    const [data, setData] = useState([])

    const params = useParams();
    const searchParams = useSearchParams();
    useEffect(() => {
        SearchProductsInCollection(params).then(result => {
            setData(result.data)
        })
    }, [params]);

    return (
        <Flex
            className={'sticky'}
            direction='column'
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
                    <ProductList collectionData={data}/>
                </Box>
            </Grid>
        </Flex>
    );
};

export default ProductPresentation;