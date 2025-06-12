import {Box, Flex, Text, TextField, Button, Strong, Grid} from "@radix-ui/themes";
import {useState, useEffect} from "react";
import "./OrderSummary.css";
import {convertImageUrl} from "../../commons/method.common";
import {ApplyPromotion} from "../../services/promotion/Promotion.Service";

export default function OrderSummary({orderItems, onTotalChange}) {
    const [discountCode, setDiscountCode] = useState("");
    const [discountInfo, setDiscountInfo] = useState(undefined);

    const applyDiscount = () => {
        ApplyPromotion(discountCode, total).then((result) => {
            setDiscountInfo(result)
        })
    };

    const removeDiscount = () => {
        setDiscountCode("")
        setDiscountInfo(undefined)
    };

    // Calculate subtotal and total
    const subtotal = orderItems.reduce((sum, item) => sum + Number(item.productColorDetails?.Product_Color_Price) * Number(item.System_User_Shopping_Bag?.Product_Selected_Amount), 0);
    const shipping = 0; // Free shipping
    let total = subtotal + shipping;
    if (!!discountInfo) {
        total = Number(discountInfo.DiscountedAmount);
    }

    // Notify parent of total changes
    useEffect(() => {
        if (onTotalChange) {
            onTotalChange(total);
        }
    }, [total, onTotalChange]);

    const totalNumberItems = orderItems.reduce((sum, item) => sum + Number(item.System_User_Shopping_Bag?.Product_Selected_Amount), 0);

    return (
        <Box className="mt-4 order-payment-summary">
            <Flex direction="column" gap="4">
                <Flex direction="column" gapY="3">
                    {orderItems.map((item) => (
                        <Grid key={item.id} align="center" columns="30" className="w-full">
                            <Box gridColumnStart="1" gridColumnEnd="5" className="border-1">
                                <img src={convertImageUrl(item?.productColorDetails?.Product_Color_Images?.[0]?.url)} alt="" className="px-1"/>
                            </Box>
                            <Box gridColumnStart="6" gridColumnEnd="25">
                                <Text size="3" weight="medium">
                                    {item?.product?.Product_Name} - {item?.productColorDetails?.Product_Color_Name}
                                </Text>
                            </Box>
                            <Box gridColumnStart="26" gridColumnEnd="31">
                                <Text size="3" weight="medium">$ {Number(item.productColorDetails?.Product_Color_Price)?.toFixed(2)} x {item.System_User_Shopping_Bag?.Product_Selected_Amount}</Text>
                            </Box>
                        </Grid>
                    ))}
                </Flex>
                <Flex direction="column" gapY="3">
                    <Box>
                        <Text size="3" weight="medium">Discount Code</Text>
                    </Box>
                    <Flex gap="2" align="center">
                        <TextField.Root
                            placeholder="Discount code or gift card"
                            value={discountCode}
                            onChange={(e) => setDiscountCode(e.target.value)}
                            className="w-full"
                        />
                        {
                            !!discountInfo ?
                                (
                                    <Button variant="soft" onClick={removeDiscount} className="apply-promotion-button">
                                        REMOVE
                                    </Button>
                                )
                                :
                                (
                                    <Button variant="soft" onClick={applyDiscount} className="apply-promotion-button">
                                        APPLY
                                    </Button>
                                )
                        }
                    </Flex>
                </Flex>
                <Flex justify="between">
                    <Text size="2">
                        Subtotal - <span className="font-bold">{totalNumberItems}</span> items
                    </Text>
                    <Text>${subtotal?.toFixed(2)}</Text>
                </Flex>
                {
                    !!discountInfo && (
                        <>
                            <Flex justify="between">
                                <Text size="2">
                                    Discount percent
                                </Text>
                                <Text>{discountInfo?.PromotionData?.Discount}</Text>
                            </Flex>
                        </>
                    )
                }

                <Flex justify="between" className="total-line">
                    <Strong>Total</Strong>
                    <Strong>USD
                        ${!!discountInfo ? Number(discountInfo?.DiscountedAmount).toFixed(2) : total?.toFixed(2)}</Strong>
                </Flex>
            </Flex>
        </Box>
    );
}