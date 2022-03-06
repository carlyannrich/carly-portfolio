import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import Header from '../components/Header'
import Footer from '../components/Footer'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="icon" href="/favicon.ico" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter&family=Press+Start+2P&DM+Mono:wght@300;400&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="bg-gray-900">
                    <Header />
                    <Main />
                    <Footer />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument