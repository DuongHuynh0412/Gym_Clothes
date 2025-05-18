import React, {useState} from 'react';
import {Box, Button, Flex, Link} from '@radix-ui/themes';
import {Text, Heading, Container} from '@radix-ui/themes';
import {Form} from 'radix-ui'
import {EyeClosedIcon, EyeOpenIcon} from "@radix-ui/react-icons";
import './ResetPassword.css'

const ResetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Container size="1" className={'login-container'}>
            <Flex direction='column' align='center' gapY='4'>
                <Box className="logo">
                    <svg
                        width="70"
                        height="40"
                        viewBox="0 0 70 40"
                        className="logo-svg"
                    >
                        <path
                            d="M35 5L60 35H10L35 5Z"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="2"
                        />
                    </svg>
                </Box>

                <Flex direction='column' align='center' gapY='2'>
                    <Heading size='5'>
                        FORGOT YOUR PASSWORD?
                    </Heading>

                    <Text size='2' className="login-subtext">
                        No problem. Enter your account email address and we’ll send you instructions so you can reset
                        your password.
                    </Text>

                    <Form.Root className="login-form" onSubmit={(e) => e.preventDefault()}>
                        <Flex className="form-fields" gapY={'3'}>
                            <Form.Field name="email">
                                <Box className="form-field">
                                    <Form.Label asChild>
                                        <Text as="label" className="form-label">
                                            Email address*
                                        </Text>
                                    </Form.Label>
                                    <Form.Control asChild>
                                        <input
                                            type="email"
                                            className="form-input"
                                            required
                                        />
                                    </Form.Control>
                                    <Form.Message asChild match="valueMissing">
                                        <Text as="p" className="form-error">
                                            Please enter your email
                                        </Text>
                                    </Form.Message>
                                    <Form.Message asChild match="typeMismatch">
                                        <Text as="p" className="form-error">
                                            Please enter a valid email
                                        </Text>
                                    </Form.Message>
                                </Box>
                            </Form.Field>

                            <Form.Submit asChild>
                                <Button className="login-button">
                                    RESET PASSWORD
                                </Button>
                            </Form.Submit>

                            <Box className="signup-link">
                                <Link href="/login" className="signup-action">
                                    <Text size='2' weight='bold'>
                                        Back to login
                                    </Text>
                                </Link>
                            </Box>
                        </Flex>
                    </Form.Root>
                </Flex>
            </Flex>
        </Container>
    )
        ;
};

export default ResetPassword;