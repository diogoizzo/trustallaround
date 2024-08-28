import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
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
