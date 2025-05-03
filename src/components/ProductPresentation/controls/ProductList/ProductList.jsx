import React from 'react';
import {Box, Card, Flex, Grid, Text} from "@radix-ui/themes";
import {HeartIcon} from "@radix-ui/react-icons";
import ProductItem from "../ProductItem/ProductItem";


const products = [
    { name: 'Contrast Seamless Leggings', color: 'Black', price: 50, rating: 4.3, image: 'path/to/contrast-seamless-leggings.jpg' },
    { name: 'Adapt Camo Seamless Leggings', color: 'Black', price: 60, rating: 4.9, status: 'NEW', image: 'path/to/adapt-camo-leggings.jpg' },
    { name: 'Soft Sculpt Leggings', color: 'Black', price: 60, rating: 4.3, status: 'NEW', image: 'path/to/soft-sculpt-leggings.jpg' },
    { name: 'Vital Seamless Leggings', color: 'Woodland Green Marl', price: 54, rating: 4.2, status: 'REGULAR', image: 'path/to/vital-leggings.jpg' },
    { name: 'Adapt Camo Seamless Leggings', color: 'Black', price: 60, rating: 4.9, status: 'NEW', image: 'path/to/adapt-camo-leggings.jpg' },
    { name: 'Soft Sculpt Leggings', color: 'Black', price: 60, rating: 4.3, status: 'NEW', image: 'path/to/soft-sculpt-leggings.jpg' },
    { name: 'Vital Seamless Leggings', color: 'Woodland Green Marl', price: 54, rating: 4.2, status: 'REGULAR', image: 'path/to/vital-leggings.jpg' },
    { name: 'Adapt Camo Seamless Leggings', color: 'Black', price: 60, rating: 4.9, status: 'NEW', image: 'path/to/adapt-camo-leggings.jpg' },
    { name: 'Soft Sculpt Leggings', color: 'Black', price: 60, rating: 4.3, status: 'NEW', image: 'path/to/soft-sculpt-leggings.jpg' },
    { name: 'Vital Seamless Leggings', color: 'Woodland Green Marl', price: 54, rating: 4.2, status: 'REGULAR', image: 'path/to/vital-leggings.jpg' },
    { name: 'Adapt Camo Seamless Leggings', color: 'Black', price: 60, rating: 4.9, status: 'NEW', image: 'path/to/adapt-camo-leggings.jpg' },
    { name: 'Soft Sculpt Leggings', color: 'Black', price: 60, rating: 4.3, status: 'NEW', image: 'path/to/soft-sculpt-leggings.jpg' },
    { name: 'Vital Seamless Leggings', color: 'Woodland Green Marl', price: 54, rating: 4.2, status: 'REGULAR', image: 'path/to/vital-leggings.jpg' },
    { name: 'Adapt Camo Seamless Leggings', color: 'Black', price: 60, rating: 4.9, status: 'NEW', image: 'path/to/adapt-camo-leggings.jpg' },
    { name: 'Soft Sculpt Leggings', color: 'Black', price: 60, rating: 4.3, status: 'NEW', image: 'path/to/soft-sculpt-leggings.jpg' },
    { name: 'Vital Seamless Leggings', color: 'Woodland Green Marl', price: 54, rating: 4.2, status: 'REGULAR', image: 'path/to/vital-leggings.jpg' },
    { name: 'Adapt Camo Seamless Leggings', color: 'Black', price: 60, rating: 4.9, status: 'NEW', image: 'path/to/adapt-camo-leggings.jpg' },
    { name: 'Soft Sculpt Leggings', color: 'Black', price: 60, rating: 4.3, status: 'NEW', image: 'path/to/soft-sculpt-leggings.jpg' },
    { name: 'Vital Seamless Leggings', color: 'Woodland Green Marl', price: 54, rating: 4.2, status: 'REGULAR', image: 'path/to/vital-leggings.jpg' },
    { name: 'Adapt Camo Seamless Leggings', color: 'Black', price: 60, rating: 4.9, status: 'NEW', image: 'path/to/adapt-camo-leggings.jpg' },
    { name: 'Soft Sculpt Leggings', color: 'Black', price: 60, rating: 4.3, status: 'NEW', image: 'path/to/soft-sculpt-leggings.jpg' },
    { name: 'Vital Seamless Leggings', color: 'Woodland Green Marl', price: 54, rating: 4.2, status: 'REGULAR', image: 'path/to/vital-leggings.jpg' },
];

const ProductList = () => {
    return (
        <Grid columns={'4'} gap={'4'}>
            {products.map((product, index) => (
                <ProductItem
                    key={index}
                    index={index}
                    imageUrl={product.image}
                    name={product.name}
                    rating={product.rating}
                    color={product.color}
                    price={product.price}
                />
            ))}
        </Grid>
    );
};

export default ProductList;