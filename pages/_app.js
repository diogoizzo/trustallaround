import Header from "../components/Header";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Head from "next/head";
import { useEffect } from "react";
import TagManager from "react-gtm-module/dist/TagManager";

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        TagManager.initialize({ gtmId: "GTM-53693WR" });
    }, []);
    return (
        <>
            <Head>
                <title>Trust All Around</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="description"
                    content="Trust all around, transporte de produtos pelo mundo, seja por terra, água ou mar"
                />
                <meta name="author" content="Diogo Izzo" />
            </Head>
            <Footer>
                <Header />
                <Component {...pageProps} />
            </Footer>
        </>
    );
}

export default MyApp;
