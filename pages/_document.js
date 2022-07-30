import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
    return (
        <Html>
            <Head>
                <Script
                    id={"gtag"}
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-53693WR');`,
                    }}
                />
            </Head>
            <body>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-53693WR"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}
                ></noscript>
                <Main />
                <NextScript />
                {/*<Script
                    strategy={"afterInteractive"}
                    id="hs-script-loader"
                    src={"https://js.hs-scripts.com/22416551.js"}
                ></Script>*/}

                <script
                    type="text/javascript"
                    id="hs-script-loader"
                    async
                    defer
                    src="//js.hs-scripts.com/22416551.js"
                ></script>
            </body>
        </Html>
    );
}
