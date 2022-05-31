import Document, { Html, Head, Main, NextScript } from "next/document";

export default class Mydocument extends Document {
    render() {
        return (
            <Html> 
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400&family=Lato:wght@300&family=Playfair+Display:ital@0;1&family=Poppins:wght@300&display=swap" rel="stylesheet" />              
                    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                    <link rel="manifest" href="/favicon/site.webmanifest" /> 
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}