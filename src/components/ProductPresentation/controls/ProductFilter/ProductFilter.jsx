// src/components/ProductFilter/ProductFilter.jsx
import React, {useState} from 'react';
import {Flex, Text, Separator, Box, TextField, Button} from '@radix-ui/themes';
import {Accordion} from 'radix-ui';
import {ChevronDownIcon} from '@radix-ui/react-icons';
import classNames from 'classnames';
import './ProductFilter.css';
import ProductSortOptions from '../ProductSortOptions/ProductSortOptions';
import ProductSizeOptions from '../ProductSizeOptions/ProductSizeOptions';

const ProductFilter = ({onFilterChange}) => {
    const [sortBy, setSortBy] = useState({_id: 1});
    const [productName, setProductName] = useState("");
    const [selectedSizes, setSelectedSizes] = useState([]);

    const handleSortChange = (apiSort) => {
        setSortBy(apiSort);
        if (onFilterChange) {
            onFilterChange({sortBy: apiSort, sizes: selectedSizes});
        }
    };

    const handleSizeChange = (sizes) => {
        setSelectedSizes(sizes);
        if (onFilterChange) {
            onFilterChange({sortBy, sizes});
        }
    };

    const applyFilter = () => {
        if (onFilterChange) {
            onFilterChange({sortBy, sizes: selectedSizes, productName});
        }
    }

    const handleClearFilters = () => {
        setSortBy({_id: 1});
        setSelectedSizes([]);
        if (onFilterChange) {
            onFilterChange(undefined);
        }
    };

    return (
        <Box className={'product-filter'}>
            <Flex direction={'row'} align={'center'} justify={'between'}>
                <Text size={'2'} weight={'bold'}>FILTER & SORT</Text>
                <button className={'cursor-pointer'} onClick={handleClearFilters}>
                    <Text size={'1'} weight={'medium'} color={'gray'} className={'cursor-pointer'}>
                        Clear all
                    </Text>
                </button>
            </Flex>
            <Separator my="4" size="4"/>
            <Accordion.Root
                className="AccordionRoot"
                type="multiple"
                defaultValue={['product-sort-by']}
                collapsible
            >
                <Accordion.Item className="AccordionItem" value="product-sort-by">
                    <AccordionTrigger>
                        <Text size={'2'} weight={'bold'}>SORT BY</Text>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ProductSortOptions sortBy={sortBy} onSortChange={handleSortChange}/>
                    </AccordionContent>
                </Accordion.Item>
                <Separator size="4" my="4"/>
                <Accordion.Item className="AccordionItem" value="filter-with-name">
                    <AccordionTrigger>
                        <Text size={'2'} weight={'bold'}>SEARCH WITH NAME</Text>
                    </AccordionTrigger>
                    <AccordionContent>
                        <Flex gap="2" align="center">
                            <TextField.Root
                                placeholder="Enter product name"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                className="w-full"
                            />
                            <Button variant="soft" onClick={applyFilter} className="apply-promotion-button">
                                apply
                            </Button>
                        </Flex>
                    </AccordionContent>
                </Accordion.Item>
                <Separator size="4" my="4"/>
                <Accordion.Item className="AccordionItem" value="product-size">
                    <AccordionTrigger>
                        <Text size={'2'} weight={'bold'}>SIZE</Text>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ProductSizeOptions onSizeChange={handleSizeChange}/>
                    </AccordionContent>
                </Accordion.Item>
            </Accordion.Root>
        </Box>
    );
};

const AccordionTrigger = React.forwardRef(({children, className, ...props}, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
            className={classNames('AccordionTrigger', className)}
            {...props}
            ref={forwardedRef}
        >
            {children}
            <ChevronDownIcon className="AccordionChevron" aria-hidden/>
        </Accordion.Trigger>
    </Accordion.Header>
));

const AccordionContent = React.forwardRef(({children, className, ...props}, forwardedRef) => (
    <Accordion.Content
        className={classNames('AccordionContent', className)}
        {...props}
        ref={forwardedRef}
    >
        <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
));

export default ProductFilter;