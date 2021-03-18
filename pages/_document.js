import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        let shouldTrackAnalytics = process.env.SHOULD_TRACK_ANALYTICS;
        let analtyicsCode = null;
        if (shouldTrackAnalytics == true) {
            analtyicsCode = (
                <>
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=UA-101030398-1`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', 'UA-101030398-1', {
                            page_path: window.location.pathname,
                            });
                        `,
                        }}
                    />
                </>)
        } else {
            analtyicsCode = (
                <>
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=UA-101030398-1`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                        `,
                        }}
                    />
                </>)
        }

        return (
            <Html lang="en">
                <Head>
                    {analtyicsCode}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument