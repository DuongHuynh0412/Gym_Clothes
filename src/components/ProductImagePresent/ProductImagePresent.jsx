import {Grid} from "@radix-ui/themes";

const ProductImagePresent = () => {
    return (
        <Grid gridColumnStart='1' gridColumnEnd={'4'} gap="1" maxHeight={'100vh'} overflowY='scroll' className={'product-image-present'}>
            <Grid columns="2" gap="1">
                <Grid className={'h-full w-full'}>
                    <img src="/AdaptAnimalSeamlessShortsENG-L-A0234GSAsphaltGrey_GSBlackB3B7P-GC8C-1811_2048x.webp"
                         alt=""/>
                </Grid>
                <Grid className={'h-full w-full'}>
                    <video
                        src="/2d88561cf44c4564933c7c3c5ed688d1.HD-1080p-4.8Mbps-45716800.mp4"
                        autoPlay={true}
                        loop={true}
                        muted={true}
                        playsInline
                    >
                    </video>
                </Grid>
            </Grid>
            <Grid>
                <img src="/Adapt-x-whitney_Static_eComm_PDP_1692x2018_a5c17cc0-07b2-4f61-814f-3ccbb151e70f_2048x.webp"
                     alt=""/>
            </Grid>
            <Grid columns="2" gap="1">
                <Grid className={'h-full w-full'}>
                    <img src="/AdaptAnimalSeamlessShortsENG-L-A0234GSAsphaltGrey_GSBlackB3B7P-GC8C-1859_2048x.webp"
                         alt=""/>
                </Grid>
                <Grid className={'h-full w-full'}>
                    <img src="/AdaptAnimalSeamlessShortsENG-L-A0234GSAsphaltGrey_GSBlackB3B7P-GC8C-1827_2048x.webp" alt=""/>
                </Grid>
            </Grid>
            <Grid>
                <img src="/AdaptAnimalSeamlessShortsENG-L-A0234GSAsphaltGrey_GSBlackB3B7P-GC8C-1797_2048x.webp"
                     alt=""/>
            </Grid>
            <Grid>
                <img src="/AdaptAnimalSeamlessShortsENG-L-A0234GSAsphaltGrey_GSBlackB3B7P-GC8C-1799_2048x.jpg"
                     alt=""/>
            </Grid>
            <Grid>
                <img src="/AdaptAnimalSeamlessShortsENG-L-A0234GSAsphaltGrey_GSBlackB3B7P-GC8C-1783_2048x.webp"
                     alt=""/>
            </Grid>
        </Grid>
    )
}
export default ProductImagePresent;