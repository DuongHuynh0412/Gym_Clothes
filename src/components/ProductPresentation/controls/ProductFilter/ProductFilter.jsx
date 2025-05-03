import React from 'react';
import {Accordion} from "radix-ui";
import {ChevronDownIcon, ChevronUpIcon} from '@radix-ui/react-icons';
import classNames from "classnames";
import {Flex, Text, Separator, ScrollArea, Box} from "@radix-ui/themes";
import './ProductFilter.css'
import ProductSortOptions from "../ProductSortOptions/ProductSortOptions";
import ProductSizeOptions from "../ProductSizeOptions/ProductSizeOptions";

const ProductFilter = () => {
    return (
        <Box className={'product-filter'}>
            {/*<ScrollArea type="always" scrollbars="vertical" style={{height: 180}}>*/}
            <Flex direction={'row'} align={"center"} justify={'between'}>
                <Text size={"2"} weight={'bold'}>FILTER & SORT</Text>
                <button className={'cursor-pointer'}>
                    <Text size={"1"} weight={'medium'} color={'gray'}>
                        Clear all
                    </Text>
                </button>
            </Flex>
            <Separator my="4" size="4"/>
            <Accordion.Root
                className="AccordionRoot"
                type="multiple"
                defaultValue="sort-by"
                // collapsible
            >
                <Accordion.Item className="AccordionItem" value="product-sort-by">
                    <AccordionTrigger>
                        <Text size={"2"} weight={'bold'}>
                            SORT BY
                        </Text>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ProductSortOptions/>
                    </AccordionContent>
                </Accordion.Item>
                <Separator my="4" size="4"/>
                <Accordion.Item className="AccordionItem" value="product-size">
                    <AccordionTrigger>
                        <Text size={"2"} weight={'bold'}>
                            SIZE
                        </Text>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ProductSizeOptions/>
                    </AccordionContent>
                </Accordion.Item>
                <Separator my="4" size="4"/>
                <Accordion.Item className="AccordionItem" value="product-feature">
                    <AccordionTrigger>
                        <Text size={"2"} weight={'bold'}>
                            SIZE
                        </Text>
                    </AccordionTrigger>
                    <AccordionContent>
                        <ProductSizeOptions/>
                    </AccordionContent>
                </Accordion.Item>
                <Separator my="4" size="4"/>

                {/*<Accordion.Item className="AccordionItem" value="item-3">*/}
                {/*    <AccordionTrigger>Can it be animated?</AccordionTrigger>*/}
                {/*    <Accordion.Content className="AccordionContent">*/}
                {/*        <div className="AccordionContentText">*/}
                {/*            Yes! You can animate the Accordion with CSS or JavaScript.*/}
                {/*        </div>*/}
                {/*    </Accordion.Content>*/}
                {/*</Accordion.Item>*/}
            </Accordion.Root>
        </Box>
    );
};


const AccordionTrigger = React.forwardRef(
    ({children, className, ...props}, forwardedRef) => (
        <Accordion.Header className="AccordionHeader">
            <Accordion.Trigger
                className={classNames("AccordionTrigger", className)}
                {...props}
                ref={forwardedRef}
            >
                {children}
                <ChevronDownIcon className="AccordionChevron" aria-hidden/>
            </Accordion.Trigger>
        </Accordion.Header>
    ),
);

const AccordionContent = React.forwardRef(
    ({children, className, ...props}, forwardedRef) => (
        <Accordion.Content
            className={classNames("AccordionContent", className)}
            {...props}
            ref={forwardedRef}
        >
            <div className="AccordionContentText">{children}</div>
        </Accordion.Content>
    ),
);

export default ProductFilter;