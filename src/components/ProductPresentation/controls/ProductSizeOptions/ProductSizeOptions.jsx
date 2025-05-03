import {Grid, Text} from "@radix-ui/themes";
import './ProductSizeOptions.css'

const ProductSizeOptions = () => {
    return (
        <Grid columns={'3'} gapY={'2'} >
            <button className={'product-size-option'}>
                <Text size="1">XS</Text>
            </button>
            <button className={'product-size-option'}>
                <Text size="1">S</Text>
            </button>
            <button className={'product-size-option'}>
                <Text size="1">M</Text>
            </button>
            <button className={'product-size-option'}>
                <Text size="1">L</Text>
            </button>
            <button className={'product-size-option'}>
                <Text size="1">XL</Text>
            </button>
            <button className={'product-size-option'}>
                <Text size="1">2XL</Text>
            </button>
        </Grid>
    )
}

export default ProductSizeOptions;