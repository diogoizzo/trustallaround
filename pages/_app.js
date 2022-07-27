import Header from "../components/Header";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Trust All Around</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
            </Head>
            <Footer>
                <Header />
                <Component {...pageProps} />
            </Footer>
        </>
    );
}

export default MyApp;
