import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <meta property="og:title" content="Satwika Kadiyala Portfolio" />
                    <meta property="og:description" content="Welcome to my professional portfolio website!" />
                    <meta property="og:image" content="/preview.png" />
                    <meta property="og:url" content="https://your-deployment-link.com" />
                    <meta name="twitter:card" content="summary_large_image" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
