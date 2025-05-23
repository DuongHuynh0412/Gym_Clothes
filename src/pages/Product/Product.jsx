import ProductDetail from "../../components/ProductDetail/ProductDetail";
import {useParams} from "react-router-dom";
import {ProductProvider} from "../../providers/ProductProvider";
import {useEffect, useState} from "react";
import {GetProductsInfo} from "../../services/product/Product.Service";

const Product = () => {
    const [productData, setProductData] = useState({})
    const params = useParams();

    useEffect(() => {
        GetProductsInfo(params.productColorCode).then(result =>  {
            setProductData(result.data)
        })
    }, [params]);
    return (
        <ProductProvider value={{
            productData : productData
        }}>
            <ProductDetail/>
        </ProductProvider>
    )
}
export default Product;