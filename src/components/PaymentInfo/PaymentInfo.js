import { Box, Button, Flex, Radio, Select, Text, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import { Accordion } from "radix-ui";
import classNames from "classnames";
import "./PaymentInfo.css";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import {CreateReservation} from "../../services/reservation/Reservation.Service";

export default function PaymentInfo({ createBooking, orderItems, total }) {
    const [qrCode, setQrCode] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm({
        defaultValues: {
            Reservation_Country: "",
            Reservation_First_Name: "",
            Reservation_Last_Name: "",
            Reservation_Address: "",
            Reservation_City: "",
            Reservation_Phone: "",
            Reservation_Email: "",
        },
    });

    // Generate product string for QR code
    const productString = Array.isArray(orderItems)
        ? orderItems
            .map((item) => `${item.productColorCode} - ${item.productSize?.Product_Size_Code}`)
            .join(", ")
        : "";

    // QR code URL with validation for environment variables
    const qrCodeUrl = process.env.REACT_APP_BANKING_USER_BRAND &&
    process.env.REACT_APP_BANKING_USER_NUMBER &&
    process.env.REACT_APP_BANKING_USER_NAME
        ? `https://img.vietqr.io/image/${process.env.REACT_APP_BANKING_USER_BRAND}-${process.env.REACT_APP_BANKING_USER_NUMBER}-compact2.jpg?amount=${Math.round(total * 25000)}&addInfo=${encodeURIComponent(productString)}&accountName=${encodeURIComponent(process.env.REACT_APP_BANKING_USER_NAME)}`
        : "";

    // Handle form submission
    const onSubmit = (data) => {
        createBooking(data);
    };

    // Simulate payment confirmation
    const handleConfirmPaymentSuccessfully = () => {
        alert("Payment confirmed successfully! (Simulated)");
        setQrCode(false); // Reset QR code state
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Flex direction="column" gap="6" className="payment-content w-full">
                <Box>
                    <Text as="h2" weight="bold" size="5">
                        CONTACT
                    </Text>
                    <TextField.Root
                        placeholder="Email"
                        mt="2"
                        size="3"
                        radius="large"
                        {...register("Reservation_Email", {
                            required: "Email is required",
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message: "Please enter a valid email address",
                            },
                        })}
                        className={errors.Reservation_Email ? "error-field" : ""}
                    />
                    {errors.Reservation_Email && (
                        <Text color="red" size="2" mt="1">
                            {errors.Reservation_Email.message}
                        </Text>
                    )}
                </Box>

                <Flex direction="column">
                    <Text as="h2" weight="bold" size="5">
                        DELIVERY
                    </Text>
                    <Flex direction="column" gap="3" mt="3">
                        <Select.Root
                            size="3"
                            radius="large"
                            onValueChange={(value) => setValue("Reservation_Country", value)}
                        >
                            <Select.Trigger placeholder="Country/Region" />
                            <Select.Content>
                                <Select.Item value="United States">United States</Select.Item>
                                <Select.Item value="Canada">Canada</Select.Item>
                                <Select.Item value="United Kingdom">United Kingdom</Select.Item>
                            </Select.Content>
                        </Select.Root>

                        <Flex gap="2">
                            <Box className="w-1/2">
                                <TextField.Root
                                    size="3"
                                    placeholder="First name"
                                    radius="large"
                                    {...register("Reservation_First_Name", { required: "First name is required" })}
                                    className={errors.Reservation_First_Name ? "error-field" : ""}
                                />
                                {errors.Reservation_First_Name && (
                                    <Text color="red" size="2" mt="1">
                                        {errors.Reservation_First_Name.message}
                                    </Text>
                                )}
                            </Box>
                            <Box className="w-1/2">
                                <TextField.Root
                                    size="3"
                                    radius="large"
                                    placeholder="Last name"
                                    {...register("Reservation_Last_Name", { required: "Last name is required" })}
                                    className={errors.Reservation_Last_Name ? "error-field" : ""}
                                />
                                {errors.Reservation_Last_Name && (
                                    <Text color="red" size="2" mt="1">
                                        {errors.Reservation_Last_Name.message}
                                    </Text>
                                )}
                            </Box>
                        </Flex>

                        <Box>
                            <TextField.Root
                                size="3"
                                radius="large"
                                placeholder="Address"
                                {...register("Reservation_Address", { required: "Address is required" })}
                                className={errors.Reservation_Address ? "error-field" : ""}
                            />
                            {errors.Reservation_Address && (
                                <Text color="red" size="2" mt="1">
                                    {errors.Reservation_Address.message}
                                </Text>
                            )}
                        </Box>

                        <Box>
                            <TextField.Root
                                size="3"
                                radius="large"
                                placeholder="City"
                                {...register("Reservation_City", { required: "City is required" })}
                                className={errors.Reservation_City ? "error-field" : ""}
                            />
                            {errors.Reservation_City && (
                                <Text color="red" size="2" mt="1">
                                    {errors.Reservation_City.message}
                                </Text>
                            )}
                        </Box>

                        <Box>
                            <TextField.Root
                                size="3"
                                radius="large"
                                placeholder="Phone"
                                {...register("Reservation_Phone", { required: "Phone is required" })}
                                className={errors.Reservation_Phone ? "error-field" : ""}
                            />
                            {errors.Reservation_Phone && (
                                <Text color="red" size="2" mt="1">
                                    {errors.Reservation_Phone.message}
                                </Text>
                            )}
                        </Box>
                    </Flex>
                </Flex>

                <Flex direction="column" className="w-full">
                    <Text as="h2" weight="bold" size="5">
                        PAYMENT
                    </Text>
                    <Accordion.Root
                        type="single"
                        defaultValue="payLater"
                        collapsible
                        className="mt-3 payment-method-select"
                    >
                        <Accordion.Item className="AccordionItem" value="payLater">
                            <AccordionTrigger>
                                <Flex align="center" gap="2">
                                    <Radio
                                        name="paymentMethod"
                                        value="payLater"
                                        defaultChecked
                                        color="gray"
                                        highContrast
                                        className="trigger-button"
                                    />
                                    <Text size="2">Payment after</Text>
                                </Flex>
                            </AccordionTrigger>
                            <AccordionContent>
                                After clicking “Purchase”, you can handle payment when you receive the product.
                            </AccordionContent>
                        </Accordion.Item>
                    </Accordion.Root>
                </Flex>

                {!qrCode ? (
                    <Button type="submit" className="purchase-button">
                        Purchase
                    </Button>
                ) : (
                    <>
                        {qrCodeUrl ? (
                            <img src={qrCodeUrl} alt="QR Code" />
                        ) : (
                            <Text color="red" size="2">
                                Error: Unable to generate QR code. Please check configuration.
                            </Text>
                        )}
                        <Button
                            className="purchase-button"
                            onClick={handleConfirmPaymentSuccessfully}
                        >
                            Confirm
                        </Button>
                    </>
                )}
            </Flex>
        </form>
    );
}

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
            className={classNames("AccordionTrigger", className)}
            {...props}
            ref={forwardedRef}
        >
            {children}
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
    </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
        className={classNames("AccordionContent", className)}
        {...props}
        ref={forwardedRef}
    >
        <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
));