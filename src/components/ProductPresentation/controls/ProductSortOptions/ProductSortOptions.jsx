// src/components/ProductSortOptions/ProductSortOptions.jsx
import React, {useEffect, useState} from 'react';
import {Flex, Text, RadioGroup} from '@radix-ui/themes';
import './ProductSortOptions.css';

const ProductSortOptions = ({sortBy, onSortChange}) => {
    const [selectedSort, setSelectedSort] = useState('relevancy'); // Default sort

    const sortOptions = [
        {value: 'price-low', label: 'Price: Low to High', apiSort: {Product_Price: 1}},
        {value: 'price-high', label: 'Price: High to Low', apiSort: {Product_Price: -1}},
        {value: 'relevancy', label: 'Relevancy', apiSort: {_id: 1}},
        {value: 'newest', label: 'Newest First', apiSort: {CreateDate: -1}},
    ];

    const handleSortChange = (value) => {
        setSelectedSort(value);
        const selectedOption = sortOptions.find((option) => option.value === value);
        if (selectedOption && onSortChange) {
            onSortChange(selectedOption.apiSort);
        }
    };

    useEffect(() => {
        const value = sortOptions.find(option => JSON.stringify(option.apiSort) === JSON.stringify(sortBy))?.value;
        setSelectedSort(value)
    }, [sortBy]);

    return (
        <Flex direction="column" gap="2" className="product-sort-options">
            <RadioGroup.Root value={selectedSort} onValueChange={handleSortChange}>
                {sortOptions.map((option) => (
                    <Flex key={option.value} align="center" gap="2" className={'cursor-pointer'}>
                        <RadioGroup.Item value={option.value} id={option.value}  className={'cursor-pointer'}/>
                        <Text as="label" size="2" htmlFor={option.value}  className={'cursor-pointer'}>
                            {option.label}
                        </Text>
                    </Flex>
                ))}
            </RadioGroup.Root>
        </Flex>
    );
};

export default ProductSortOptions;