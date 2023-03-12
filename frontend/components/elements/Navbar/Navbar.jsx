import React from "react";
import {
    Navbar,
    Link,
    Text,
    Avatar,
    Dropdown,
    Button
} from "@nextui-org/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const deleteCookie = function (name) {
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:01 GMT;";
};

export default function NavbarComponent() {
    const { email } = useSelector((state) => {
        return state.user;
    });
    const router = useRouter();
    function pushToRoute(path) {
        router.push(path);
    }
    return (
        <Navbar disableShadow isBordered variant="default">
            <Navbar disableShadow isBordered variant="sticky">
                <Navbar.Toggle showIn="xs" />
                <Navbar.Brand
                    css={{
                        "@xs": {
                            w: "12%"
                        }
                    }}
                >
                    <Text b color="inherit" hideIn="xs">
                        Shopping
                    </Text>
                </Navbar.Brand>
                <Navbar.Content
                    enableCursorHighlight
                    hideIn="xs"
                    variant="highlight"
                >
                    <Navbar.Link
                        isActive={router.pathname == "/"}
                        onClick={() => pushToRoute("/")}
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link
                        isActive={router.pathname == "/cart"}
                        onClick={() => pushToRoute("/cart")}
                    >
                        Cart
                    </Navbar.Link>
                </Navbar.Content>
                <Navbar.Content
                    css={{
                        "@xs": {
                            w: "12%",
                            jc: "flex-end"
                        }
                    }}
                >
                    <Dropdown placement="bottom-right">
                        <Navbar.Item>
                            <Dropdown.Trigger>
                                <Avatar
                                    bordered
                                    as="button"
                                    color="warning"
                                    size="md"
                                    src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                                />
                            </Dropdown.Trigger>
                        </Navbar.Item>
                        <Dropdown.Menu
                            aria-label="User menu actions"
                            color="default"
                            onAction={(actionKey) => console.log({ actionKey })}
                        >
                            <Dropdown.Item
                                key="profile"
                                css={{ height: "$18" }}
                            >
                                <Text b color="inherit" css={{ d: "flex" }}>
                                    Signed in as
                                </Text>
                                <Text b color="inherit" css={{ d: "flex" }}>
                                    {email}
                                </Text>
                            </Dropdown.Item>
                            <Dropdown.Item key="logout" withDivider>
                                <Button
                                    onClick={() => deleteCookie("accessToken")}
                                    color="error"
                                    flat
                                >
                                    Log Out
                                </Button>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Content>
                <Navbar.Collapse disableAnimation>
                    <Navbar.CollapseItem>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%"
                            }}
                            href="#"
                        >
                            Home
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem>
                        <Link
                            color="inherit"
                            css={{
                                minWidth: "100%"
                            }}
                            href="#"
                        >
                            Cart
                        </Link>
                    </Navbar.CollapseItem>
                </Navbar.Collapse>
            </Navbar>
        </Navbar>
    );
}
