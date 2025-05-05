import {Box, Flex, Grid, Text} from "@radix-ui/themes";
import {StarFilledIcon, HeartIcon, UploadIcon} from "@radix-ui/react-icons";
import './ProductInformation.css'

const ProductInformation = () => {
    return (
        <Grid gridColumnStart="4" gridColumnEnd="6" className={'flex flex-col items-center'}>
            <Flex direction="column" align='center' gapY="5">
                <Flex direction="column" align='center' gap={'2'}>
                    <Text
                        size='1'
                        weight="medium"
                        className={"product-tag"}
                    >
                        NEW
                    </Text>
                    <Text size='4' weight="bold" className={'mt-2'}>
                        EST 2012 GRAPHIC T-SHIRT
                    </Text>
                    <Text size='1' weight="light">
                        Oversized Fit
                    </Text>
                    <Text size='1' weight="bold">
                        $38
                    </Text>
                </Flex>
                <Flex align='center' justify="between" gapX="5">
                    <Flex align='center' className={"product-rate"} gap={"1"}>
                        <Flex align='center'>
                            <StarFilledIcon style={{width: '12px', height: '12px'}}/>
                            <Text size='1' weight="bold">
                                5
                            </Text>
                        </Flex>
                        <Text size='1' weight="bold">
                            (2)
                        </Text>
                    </Flex>
                    <Box className={'product-icon-box'}>
                        <HeartIcon className={'product-icon'}/>
                    </Box>
                    <Box className={'product-icon-box'}>
                        <UploadIcon className={'product-icon'}/>
                    </Box>
                </Flex>
                <Flex align='center' justify="between" gapX="5">
                    <Box>
                        <img src="/EST2012GraphicT-ShirtGSBlackB3B1R-BB2J-1081_A-0147_3840x.webp" alt=""/>
                    </Box>
                    <Box>
                        <img src="/EST2012GraphicT-ShirtGSLiftPinkB3B1R-KCPR-1036_A-0141_640x.webp" alt=""/>
                    </Box>
                    <Box>
                        <img src="/EST2012GraphicT-ShirtGSWhiteB3B1R-WB57-0987_A-0135_edfccd9f-bdd9-4711-bc2a-ff097d323a3f_640x.webp" alt=""/>
                    </Box>
                </Flex>
            </Flex>

            {/*<div class="section">*/}
            {/*    <div>★★★★★ <a href="#">(2)</a></div>*/}
            {/*    <div>♡ ⤴</div>*/}
            {/*</div>*/}

            {/*<div class="section thumbnails">*/}
            {/*    <img src="black-shirt.png" alt="Black" class="active"/>*/}
            {/*    <img src="pink-shirt.png" alt="Pink"/>*/}
            {/*    <img src="white-shirt.png" alt="White"/>*/}
            {/*    <div>Black</div>*/}
            {/*</div>*/}

            {/*<div class="section">*/}
            {/*    <div>*/}
            {/*        <span class="label">Select a size</span> — <a href="#">Size Guide</a>*/}
            {/*    </div>*/}
            {/*    <div class="size-options">*/}
            {/*        <span>XXS</span>*/}
            {/*        <span>XS</span>*/}
            {/*        <span>S</span>*/}
            {/*        <span>M</span>*/}
            {/*        <span>L</span>*/}
            {/*        <span>XL</span>*/}
            {/*        <span>XXL</span>*/}
            {/*    </div>*/}
            {/*    <button class="button">ADD TO BAG</button>*/}
            {/*</div>*/}

            {/*<div class="section checkout-options">*/}
            {/*    <div>Pay in 4 interest-free payments of $9.50. <a href="#">Learn more</a></div>*/}
            {/*    <div>Also available at checkout: Klarna, Afterpay</div>*/}
            {/*</div>*/}

            {/*<div class="section">*/}
            {/*    <div><strong>Unlock Access to Exclusive Rewards & Benefits</strong></div>*/}
            {/*    <div>Purchasing this product earns 304XP</div>*/}
            {/*</div>*/}

            {/*<div class="section get-the-look">*/}
            {/*    <div><strong>GET THE LOOK</strong> — 3 Products</div>*/}
            {/*    <img src="look1.png" alt="Look 1"/>*/}
            {/*    <img src="look2.png" alt="Look 2"/>*/}
            {/*    <img src="look3.png" alt="Look 3"/>*/}
            {/*</div>*/}
        </Grid>
    )
}
export default ProductInformation;