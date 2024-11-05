import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head></Head>
            <body>
                <Main />
                <NextScript />
                {/* <script
                    type="text/javascript"
                    id="hs-script-loader"
                    async
                    defer
                    src="//js.hs-scripts.com/47956029.js"
                ></script> */}
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
                (function(d, s, i, r) {
                  if (d.getElementById(i)) {return;}
                  var n = d.createElement(s), e = d.getElementsByTagName(s)[0];
                  n.id=i;n.src='https://js.hs-scripts.com/47956029.js';
                  e.parentNode.insertBefore(n, e);
                })(document, 'script', 'hs-script-loader');
              `,
                    }}
                ></script>
            </body>
        </Html>
    );
}
