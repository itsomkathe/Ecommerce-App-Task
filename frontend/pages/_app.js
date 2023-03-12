import "@styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { useRefreshLoader } from "@hooks/useRefreshLoader";
import { Provider } from "react-redux";
import { store } from "@store/Store";

function App({ Component, pageProps }) {
    const { loading } = useRefreshLoader();
    return (
        <NextUIProvider>
            {loading ? "Loading" : <Component {...pageProps} />}
        </NextUIProvider>
    );
}

export default function WrappedApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <App Component={Component} pageProps={pageProps} />
        </Provider>
    );
}
