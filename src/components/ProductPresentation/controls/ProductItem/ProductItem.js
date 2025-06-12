import {useState} from "react";
import {Box, Card, Flex, Grid, Text} from "@radix-ui/themes";
import {HeartIcon} from "@radix-ui/react-icons";
import "./ProductItem.css";
import {convertImageUrl, GetLocalStorage, SetLocalStorage} from "../../../../commons/method.common";
import {useNavigate} from "react-router-dom";
import {faHeart as heartSolid} from "@fortawesome/free-solid-svg-icons";
import {faHeart as heartRegular} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import LoveItem from "../../../commons/LoveItem/LoveItem";

const ProductItem = ({
                         index,
                         frontImageUrl,
                         productColorCode,
                         backImageUrl,
                         name,
                         rating,
                         productColorName,
                         price,
                         sizes
                     }) => {
    const navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState(frontImageUrl);
    const viewSpecificItem = () => {
        navigate(`/products/${productColorCode}`)
    }

    const handleAddProductToBag = (e, sizeObject) => {
        e.preventDefault();
        e.stopPropagation();
    }

    const favoriteList = GetLocalStorage('favorite-list')
    const selectedFavoriteList = JSON.parse(favoriteList);

    return (
        <Box
            key={index}
            className={'product-item'}
            onMouseEnter={() => setImageUrl(backImageUrl ? backImageUrl : frontImageUrl)} // Show back image on hover
            onMouseLeave={() => setImageUrl(frontImageUrl)}
            onClick={viewSpecificItem}
        >
            <Box style={{position: "absolute", top: "8px", right: "8px", zIndex: '50'}}>
                <LoveItem
                    colorCode={productColorCode}
                    className={'love-item'}
                />
            </Box>

            <Box
                className={"product-preview"}
            >
                <img
                    src={convertImageUrl(imageUrl)}
                    alt={name}
                    className={"product-image"}
                    style={{width: "100%", height: "100%", objectFit: "cover"}}
                />
                <Grid columns={'5'} className={'product-size'}>
                    {
                        sizes.map(item => (
                            <Text as={'p'} size={'1'} weight={'medium'} onClick={(e) => {
                                handleAddProductToBag(e, item.ProductSizeItem)
                            }}>
                                {item.ProductSizeItem?.Product_Size_Name}
                            </Text>
                        ))
                    }
                </Grid>
            </Box>
            <Box p="2">
                <Flex align="center" gap="1" className="product-item-rate">
                    <Text size="2" weight="bold" style={{color: "#f5c518"}}>
                        ★
                    </Text>
                    <Text size="2">{rating}</Text>
                </Flex>
                <Flex direction="column" gap="1">
                    <Text size="2" weight="medium">{name}</Text>
                    <Text size="2" weight="medium" color="gray">{productColorName}</Text>
                    <Text size="2" weight="bold">${price}</Text>
                </Flex>
            </Box>
        </Box>
    );
};

export default ProductItem;