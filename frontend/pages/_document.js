import { Html, Head, Main, NextScript } from "next/document";
import { CssBaseline } from '@nextui-org/react';
import { Provider } from "react-redux";
import { store } from "@store/Store";

export default function Document() {
    return (
        <Html lang="en">
            <Head>{CssBaseline.flush()}</Head>
            <body>
                <Provider store={store}>
                    <Main/>
                    <NextScript />
                </Provider> 
            </body>
        </Html>
    );
}
