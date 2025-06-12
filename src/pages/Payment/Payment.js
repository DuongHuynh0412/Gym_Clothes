import { Box, Flex, Text, TextField, Button, Checkbox, Select, Strong, Container, Grid } from "@radix-ui/themes";
import "./Payment.css";
import OrderSummary from "../../components/OrderSummary/OrderSummary";
import PaymentInfo from "../../components/PaymentInfo/PaymentInfo";
import { useEffect, useState } from "react";
import { GetLocalStorage } from "../../commons/method.common";
import {GetProductsColorInfo} from "../../services/product/Product.Service";
import {CreateReservation} from "../../services/reservation/Reservation.Service";
import {GetShoppingBag} from "../../services/user/User.Service";
import {HttpStatusCode} from "axios";

export default function PaymentPage() {
    const [orderItems, setOrderItems] = useState([]);
    const [total, setTotal] = useState(0); // State to store the total

    useEffect(() => {
        GetShoppingBag().then(result => {
            setOrderItems(result.data);
        })
    }, []);


    const handleSubmit = (data) => {
        const Product_Color_Codes = orderItems.map(item => item.productColorCode);
        data.Product_Color_Codes = Product_Color_Codes;
        data.Reservation_Price = total;
        CreateReservation(data).then(result => {
            if(!!result){

            }
        })
    };

    console.log("orderItems", orderItems);

    return (
        <Container size="4" maxWidth="100vw" height="100%">
            <Grid columns="20">
                <Flex gridColumnStart="1" gridColumnEnd="12" justify="end">
                    <PaymentInfo createBooking={handleSubmit} orderItems={orderItems} total={total} />
                </Flex>
                <Grid gridColumnStart="12" gridColumnEnd="21" className="pt-8 pl-8 order-summary">
                    <OrderSummary orderItems={orderItems} onTotalChange={setTotal} />
                </Grid>
            </Grid>
        </Container>
    );
}