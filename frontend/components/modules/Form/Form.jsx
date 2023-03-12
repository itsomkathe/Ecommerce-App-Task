import React from "react";
import {
    Card,
    Spacer,
    Button,
    Text,
    Input,
    Container,
    Link
} from "@nextui-org/react";

export default function Form({
    title,
    buttonText,
    credentials,
    setCredentials,
    isSignup,
    onClick
}) {
    return (
        <div>
            <Container
                display="flex"
                alignItems="center"
                justify="center"
                css={{ minHeight: "100vh", flexDirection: "column" }}
            >
                <Card css={{ mw: "420px", p: "20px" }}>
                    <Text
                        size={24}
                        weight="bold"
                        css={{
                            as: "center",
                            mb: "20px"
                        }}
                    >
                        {title}
                    </Text>

                    {isSignup && (
                        <>
                            <Spacer y={1} />
                            <Input
                                clearable
                                bordered
                                fullWidth
                                color="primary"
                                size="lg"
                                placeholder="Name"
                                value={credentials.name}
                                onChange={(e) =>
                                    setCredentials((prev) => ({
                                        ...prev,
                                        name: e.target.value
                                    }))
                                }
                            />
                            <Spacer y={1} />
                        </>
                    )}
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Email"
                        value={credentials.email}
                        onChange={(e) =>
                            setCredentials((prev) => ({
                                ...prev,
                                email: e.target.value
                            }))
                        }
                    />
                    <Spacer y={1} />
                    <Input
                        clearable
                        bordered
                        fullWidth
                        color="primary"
                        size="lg"
                        placeholder="Password"
                        type="password"
                        value={credentials.password}
                        onChange={(e) =>
                            setCredentials((prev) => ({
                                ...prev,
                                password: e.target.value
                            }))
                        }
                    />
                    <Spacer y={2} />
                    <Button onClick={onClick}>{buttonText}</Button>
                </Card>
                <Text
                    css={{
                        fontWeight: "$medium",
                        color: "$accents6",
                        marginTop: "10px"
                    }}
                >
                    {isSignup
                        ? "Already have an account? "
                        : "Don't have an account? "}
                    <Link
                        css={{ color: "$blue600" }}
                        href={isSignup ? "/login" : "/signup"}
                    >
                        {isSignup ? "Log In" : "Sign Up"}
                    </Link>
                </Text>
            </Container>
        </div>
    );
}
