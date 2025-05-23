import {Grid} from "@radix-ui/themes";
import {useContext} from "react";
import Product from "../../pages/Product/Product";
import {ProductContext} from "../../providers/ProductProvider";
import {convertImageUrl} from "../../commons/method.common";

const ImageOrVideoItem = ({ url, altText = "Product media" }) => {
    // Check if the URL is valid
    if (!url || typeof url !== "string") {
        return <div>Invalid media URL</div>;
    }
    const convertedUrl = convertImageUrl(url);

    // Common image and video extensions
    const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp"];
    const videoExtensions = [".mp4", ".webm", ".ogg"];

    // Get the file extension (case-insensitive)
    const extension = url.toLowerCase().slice(url.lastIndexOf("."));

    // Render image if the extension matches an image type
    if (imageExtensions.includes(extension)) {
        return (
            <img
                src={convertedUrl}
                alt={altText}
                loading={'eager'}
                className="collection-image-img" // Class for hover animation
            />
        );
    }

    // Render video if the extension matches a video type
    if (videoExtensions.includes(extension)) {
        return (
            <video
                src={convertedUrl}
                autoPlay
                loop
                muted
                playsInline
                className="collection-image-video" // Class for styling
            />
        );
    }

    // Fallback for unsupported media types
    return <div>Unsupported media type</div>;
};

const ProductImagePresent = () => {
    const productContext = useContext(ProductContext)
    const productData = productContext.productData;
    const productImages = productData.Product_Color_Images;
    const moreThan6Items = productImages?.slice(6)


    return (
        <Grid gridColumnStart='1' gridColumnEnd={'6'} gap="1" maxHeight={'100vh'} overflowY='scroll'
              className={'product-image-present'}>
            <Grid columns="2" gap="1">
                <Grid className={'h-full w-full'}>
                    <ImageOrVideoItem
                        name={productImages?.[0].fileName}
                        url={productImages?.[0].url || ""}
                    />
                </Grid>
                <Grid className={'h-full w-full'}>
                    <ImageOrVideoItem
                        name={productImages?.[1].fileName}
                        url={productImages?.[1].url || ""}
                    />
                </Grid>
            </Grid>
            <Grid>
                <ImageOrVideoItem
                    name={productImages?.[2].fileName}
                    url={productImages?.[2].url || ""}
                />
            </Grid>
            <Grid columns="2" gap="1">
                <Grid className={'h-full w-full'}>
                    <ImageOrVideoItem
                        name={productImages?.[3].fileName}
                        url={productImages?.[3].url || ""}
                    />
                </Grid>
                <Grid className={'h-full w-full'}>
                    <ImageOrVideoItem
                        name={productImages?.[4].fileName}
                        url={productImages?.[4].url || ""}
                    />
                </Grid>
            </Grid>
            <Grid>
                <ImageOrVideoItem
                    name={productImages?.[5].fileName}
                    url={productImages?.[5].url || ""}
                />
            </Grid>
            {
                moreThan6Items?.map(item => {
                    return (
                        <Grid>
                            <ImageOrVideoItem
                                name={item.fileName}
                                url={item.url || ""}
                            />
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}
export default ProductImagePresent;