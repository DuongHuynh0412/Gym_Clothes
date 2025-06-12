// src/components/ProductSizeOptions/ProductSizeOptions.jsx
import React, { useState } from 'react';
import { Grid, Text } from '@radix-ui/themes';
import './ProductSizeOptions.css';

const ProductSizeOptions = ({ onSizeChange }) => {
    const [selectedSizes, setSelectedSizes] = useState([]); // Track selected sizes

    const sizeOptions = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

    const handleSizeClick = (size) => {
        let updatedSizes;
        if (selectedSizes.includes(size)) {
            // Deselect size
            updatedSizes = selectedSizes.filter((s) => s !== size);
        } else {
            // Select size
            updatedSizes = [...selectedSizes, size];
        }
        setSelectedSizes(updatedSizes);
        if (onSizeChange) {
            onSizeChange(updatedSizes); // Notify parent of selected sizes
        }
    };

    return (
        <Grid columns={'3'} gapY={'2'} className="product-size-options">
            {sizeOptions.map((size) => (
                <button
                    key={size}
                    className={`product-size-option ${selectedSizes.includes(size) ? 'selected' : ''}`}
                    onClick={() => handleSizeClick(size)}
                >
                    <Text size="1">{size}</Text>
                </button>
            ))}
        </Grid>
    );
};

export default ProductSizeOptions;