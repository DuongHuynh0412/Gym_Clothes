import React, { useState } from 'react';
import { Box, Button, Flex, Link } from '@radix-ui/themes';
import { Text, Heading, Container } from '@radix-ui/themes';
import { Form } from 'radix-ui';
import { EyeClosedIcon, EyeOpenIcon } from "@radix-ui/react-icons";
import { useForm } from 'react-hook-form';
import './Register.css';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      email: '',
      password: '',
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = (data) => {
    console.log('Form Values:', data);
    // You can now use data for API calls or further processing
  };

  return (
      <Container size="1" className="login-container">
        <Flex direction="column" align="center" gapY="4">
          <Box className="logo">
            <img src="/gs-icon-black.png" alt="black icon"/>
          </Box>

          <Flex direction="column" align="center" gapY="2">
            <Heading size="5">
              GYMSHARK SIGNUP
            </Heading>

            <Text size="2" className="login-subtext">
              One account, across all apps, just to make things a little easier.
            </Text>

            <Form.Root className="login-form" onSubmit={handleSubmit(onSubmit)}>
              <Flex className="form-fields" gapY="3">
                <Form.Field name="firstName">
                  <Box className="form-field">
                    <Form.Label asChild>
                      <Text as="label" className="form-label">
                        First name
                      </Text>
                    </Form.Label>
                    <Form.Control asChild>
                      <input
                          type="text"
                          {...register("firstName", { required: true })}
                          className="form-input"
                          autoFocus={true}
                      />
                    </Form.Control>
                    {errors.firstName && (
                        <Form.Message asChild>
                          <Text as="p" className="form-error">
                            Please enter your first name
                          </Text>
                        </Form.Message>
                    )}
                  </Box>
                </Form.Field>

                <Form.Field name="lastName">
                  <Box className="form-field">
                    <Form.Label asChild>
                      <Text as="label" className="form-label">
                        Last name
                      </Text>
                    </Form.Label>
                    <Form.Control asChild>
                      <input
                          type="text"
                          {...register("lastName", { required: true })}
                          className="form-input"
                          autoFocus={true}
                      />
                    </Form.Control>
                    {errors.lastName && (
                        <Form.Message asChild>
                          <Text as="p" className="form-error">
                            Please enter your last name
                          </Text>
                        </Form.Message>
                    )}
                  </Box>
                </Form.Field>

                <Form.Field name="dateOfBirth">
                  <Box className="form-field">
                    <Form.Label asChild>
                      <Text as="label" className="form-label">
                        Date of birth
                      </Text>
                    </Form.Label>
                    <Form.Control asChild>
                      <input
                          type="date"
                          {...register("dateOfBirth", { required: true })}
                          className="form-input"
                          autoFocus={true}
                      />
                    </Form.Control>
                    {errors.dateOfBirth && (
                        <Form.Message asChild>
                          <Text as="p" className="form-error">
                            Please enter your date of birth
                          </Text>
                        </Form.Message>
                    )}
                  </Box>
                </Form.Field>

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
                          {...register("email", {
                            required: true,
                            pattern: /^[^@]+@[^@]+\.[^@]{2,}$/i,
                          })}
                          className="form-input"
                      />
                    </Form.Control>
                    {errors.email?.type === "required" && (
                        <Form.Message asChild>
                          <Text as="p" className="form-error">
                            Please enter your email
                          </Text>
                        </Form.Message>
                    )}
                    {errors.email?.type === "pattern" && (
                        <Form.Message asChild>
                          <Text as="p" className="form-error">
                            Please enter a valid email
                          </Text>
                        </Form.Message>
                    )}
                  </Box>
                </Form.Field>

                <Form.Field name="password">
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
                            {...register("password", { required: true })}
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
                    {errors.password && (
                        <Form.Message asChild>
                          <Text as="p" className="form-error">
                            Please enter your password
                          </Text>
                        </Form.Message>
                    )}
                  </Box>
                </Form.Field>

                <Box className="forgot-password">
                  <Link href="/reset-password" className="forgot-link">
                    <Text size="2">
                      Forgot password?
                    </Text>
                  </Link>
                </Box>

                <Form.Submit asChild>
                  <Button className="login-button">
                    CREATE ACCOUNT
                  </Button>
                </Form.Submit>

                <Box className="signup-link">
                  <Text as="span" className="signup-text">
                    Already have an account?{' '}
                    <Link href="/login" className="signup-action">
                      Sign in
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

export default Register;