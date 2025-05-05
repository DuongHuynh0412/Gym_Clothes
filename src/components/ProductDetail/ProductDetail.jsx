import {Grid} from "@radix-ui/themes";
import ProductImagePresent from "../ProductImagePresent/ProductImagePresent";
import ProductInformation from "../ProductInformation/ProductInformation";
import './ProductDetail.css'

const ProductDetail = () => {
    return (
        <Grid columns='5'>
            <ProductImagePresent />
            <ProductInformation />
        </Grid>
    );
};

export default ProductDetail;