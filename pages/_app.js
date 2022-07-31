import Header from "../components/Header";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Head from "next/head";
import { useEffect } from "react";
import TagManager from "react-gtm-module/dist/TagManager";
import { CookieConsent } from "react-cookie-consent";
import { useTranslation } from "next-export-i18n";

function MyApp({ Component, pageProps }) {
    const { t } = useTranslation();
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
            <CookieConsent
                enableDeclineButton
                /*acceptOnScroll={true}*/
                location="bottom"
                buttonText={t("banner.btnAceitar")}
                declineButtonText={t("banner.btnRecusar")}
                cookieName="politicas"
                style={{
                    background: "#26475E",
                    padding: "15px 10px",
                    alignItems: "center",
                }}
                buttonStyle={{
                    background: "#F59B2C",
                    color: "#ffffff",
                    fontSize: "20px",
                    fontWeight: "700",
                    padding: "15px 45px",
                    letterSpacing: "2px",
                    borderRadius: "10px",
                    marginTop: "10px",
                }}
                declineButtonStyle={{
                    background: "#F59B2C",
                    color: "#ffffff",
                    fontSize: "20px",
                    fontWeight: "700",
                    padding: "15px 45px",
                    letterSpacing: "2px",
                    borderRadius: "10px",
                }}
                expires={150}
                onDecline={() => {
                    TagManager.dataLayer({
                        dataLayer: {
                            ad_storage: "denied",
                            analytics_storage: "denied",
                        },
                        dataLayerName: "consent",
                    });
                }}
            >
                <p className={"text-2xl font-semibold"}>{t("banner.titulo")}</p>
                <p className={"text-xl mt-2"}>{t("banner.texto")}</p>
            </CookieConsent>
        </>
    );
}

export default MyApp;
