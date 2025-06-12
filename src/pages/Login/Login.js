import React, { useState } from 'react';
import { Box, Button, Flex, Link } from '@radix-ui/themes';
import { Text, Heading, Container } from '@radix-ui/themes';
import { Form } from 'radix-ui';
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useForm } from 'react-hook-form';
import './Login.css';
import {loginModel} from "../../services/authorize/Authorize.Model";
import {HandleLogin} from "../../services/authorize/Authorize.Service";
import {Navigate, useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {...loginModel}
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = async (data) => {
        const success = await HandleLogin(data);
        if (success) {
            navigate(-1, );
        }
    };

    return (
        <Container size="1" className="login-container">
            <Flex direction="column" align="center" gapY="4">
                <Box className="logo">
                    <img src="/gs-icon-black.png" alt="black icon"/>
                </Box>

                <Flex direction="column" align="center" gapY="2">
                    <Heading size="5">
                        GYMSHARK LOGIN
                    </Heading>

                    <Text size="2" className="login-subtext">
                        Shop your styles, save top picks to your wishlist, track those orders & train with us.
                    </Text>

                    <Form.Root className="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <Flex className="form-fields" gapY="3">
                            <Form.Field name="System_User_Email">
                                <Box className="form-field">
                                    <Form.Label asChild>
                                        <Text as="label" className="form-label">
                                            Email address*
                                        </Text>
                                    </Form.Label>
                                    <Form.Control asChild>
                                        <input
                                            type="System_User_Email"
                                            {...register("System_User_Email", {
                                                required: true,
                                                pattern: /^[^@]+@[^@]+\.[^@]{2,}$/i,
                                            })}
                                            className="form-input"
                                        />
                                    </Form.Control>
                                    {errors.System_User_Email?.type === "required" && (
                                        <Form.Message asChild>
                                            <Text as="p" className="form-error">
                                                Please enter your email
                                            </Text>
                                        </Form.Message>
                                    )}
                                    {errors.System_User_Email?.type === "pattern" && (
                                        <Form.Message asChild>
                                            <Text as="p" className="form-error">
                                                Please enter a valid email
                                            </Text>
                                        </Form.Message>
                                    )}
                                </Box>
                            </Form.Field>

                            <Form.Field name="System_User_Password">
                                <Box className="form-field">
                                    <Form.Label asChild>
                                        <Text as="label" className="form-label">
                                            Password*
                                        </Text>
                                    </Form.Label>
                                    <Box className="password-wrapper">
                                        <Form.Control asChild>
                                            <input
                                                type={showPassword ? "text" : "password"}
                                                {...register("System_User_Password", { required: true })}
                                                className="form-input"
                                            />
                                        </Form.Control>
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="password-toggle"
                                        >
                                            {showPassword ? (
                                                <EyeClosedIcon size={20} />
                                            ) : (
                                                <EyeOpenIcon size={20} />
                                            )}
                                        </button>
                                    </Box>
                                    {errors.System_User_Password && (
                                        <Form.Message asChild>
                                            <Text as="p" className="form-error">
                                                Please enter your password
                                            </Text>
                                        </Form.Message>
                                    )}
                                </Box>
                            </Form.Field>

                            <Box className="forgot-password">
                                <Link href="/resetPassword" className="forgot-link">
                                    <Text size="2">
                                        Forgot password?
                                    </Text>
                                </Link>
                            </Box>

                            <Form.Submit asChild>
                                <Button className="login-button">
                                    LOG IN
                                </Button>
                            </Form.Submit>

                            <Box className="signup-link">
                                <Text as="span" className="signup-text">
                                    Don't have an account?{' '}
                                    <Link href="/signUp" className="signup-action">
                                        Sign up
                                    </Link>
                                </Text>
                            </Box>
                        </Flex>
                    </Form.Root>
                </Flex>
            </Flex>
        </Container>
    );
};

export default Login;