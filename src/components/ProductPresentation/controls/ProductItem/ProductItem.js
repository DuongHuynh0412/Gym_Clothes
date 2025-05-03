import {Box, Card, Flex, Grid, Text} from "@radix-ui/themes";
import {Avatar} from "radix-ui";
import './ProductItem.css'
import {HeartIcon} from "@radix-ui/react-icons";

const ProductItem = ({index, imageUrl, name, rating, color, price}) => {
    return (
        <Box key={index} style={{position: 'relative', padding: 0}}>
            {/* Heart Icon */}
            <Box style={{position: 'absolute', top: '8px', right: '8px'}}>
                <HeartIcon width="20" height="20"/>
            </Box>

            {/* Product Image */}
            <Box style={{width: '100%', height: '400px', backgroundColor: '#e5e5e5'}}>
                <img
                    src={imageUrl}
                    alt={name}
                    style={{width: '100%', height: '100%', objectFit: 'cover'}}
                />
            </Box>
            <Box p="2">
                <Flex align="center" gap="1" className={'product-item-rate'}>
                    <Text size="2" weight="bold" style={{color: '#f5c518'}}>★</Text>
                    <Text size="2">{rating}</Text>
                </Flex>
                <Flex direction={'column'} gap={'1'}>
                    <Text size="2" weight="medium">{name}</Text>
                    <Text size="2" weight='medium' color="gray">{color}</Text>
                    <Text size="2" weight="bold">${price}</Text>
                </Flex>
            </Box>
        </Box>
    )
}

export default ProductItem;