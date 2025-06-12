import React, {useEffect, useState} from 'react';
import ProductFilter from './controls/ProductFilter/ProductFilter';
import ProductList from './controls/ProductList/ProductList';
import {Box, Flex, Grid, Separator, Text} from "@radix-ui/themes";
import {SearchProductsInCollection} from "../MainProductCollectionSlides/MainProductCollectionSlides.service";
import {useNavigate, useParams, useSearchParams} from "react-router-dom";

const ProductPresentation = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null); // Thêm state để lưu lỗi
    const navigate = useNavigate();
    const params = useParams();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const searchRequest = {
            searchModel: {
                ...params
            },
            searchOptions: {}
        };
        if (searchParams.size > 0) {
            const sortByData = searchParams.get('sortBy');
            if (sortByData) {
                const sortByObject = JSON.parse(sortByData);
                const sortByKeys = Object.keys(sortByObject);
                if (sortByKeys.length > 0) {
                    searchRequest.searchOptions[sortByKeys[0]] = sortByObject[sortByKeys[0]];
                }
            }
        }
        SearchProductsInCollection(searchRequest)
            .then(result => {
                if (result.success === false) {
                    throw new Error(result.message || 'Failed to fetch products');
                }
                setData(result.data);
            })
            .catch(err => {
                setError(err); // Lưu lỗi vào state
            });
    }, [params, searchParams]);

    // Ném lỗi trong render phase để ErrorBoundary bắt
    if (error) {
        throw error;
    }

    const handleFilterChange = (filters) => {
        if (!filters) {
            const currentUrl = window.location.pathname;
            navigate({
                pathname: currentUrl,
            });
        } else {
            const params = new URLSearchParams();
            params.append('sortBy', JSON.stringify(filters.sortBy));
            if (filters.sizes && filters.sizes.length > 0) {
                params.append('sizes', JSON.stringify(filters.sizes));
            }
            if (filters.productName) {
                params.append('productName', filters.productName);
            }

            const currentUrl = window.location.pathname;
            navigate({
                pathname: currentUrl,
                search: params.toString()
            });
        }
    };

    return (
        <Flex className={'sticky'} direction='column' gap={"6"}>
            <Flex direction={'column'} className={"px-16"}>
                <Text size={"1"} weight={"bold"}>Womens</Text>
                <Flex direction={'row'} align={'center'} gap={"2"}>
                    <Text size={"3"} weight={'bold'}>LEGGINGS</Text>
                    <Text size={"1"} weight={"medium"} color={'gray'}>{data.length} Products</Text>
                </Flex>
            </Flex>

            <Grid columns={'20'} className={"px-16"}>
                <Box gridColumnStart={'1'} gridColumnEnd={'4'}>
                    <ProductFilter onFilterChange={handleFilterChange}/>
                </Box>
                <Box gridColumnStart={'4'} gridColumnEnd={'21'}>
                    <ProductList collectionData={data}/>
                </Box>
            </Grid>
        </Flex>
    );
};

export default ProductPresentation;