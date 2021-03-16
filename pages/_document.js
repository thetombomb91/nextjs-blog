import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }


    render() {
        let analyticsCode = null;
        if(process.env.ENVIRONMENT !== "dev") {
            analyticsCode = (         
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
        }

        return (
            <Html lang="en">
                <Head>
                    {analyticsCode}
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