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
                        href="https://fonts.googleapis.com/css2?family=Inter&family=Press+Start+2P&display=swap"
                        rel="stylesheet"
                    />
                </Head>
                <body className="bg-gray-800">
                    <section className='bg-star-bg h-[50px]'>
                        <Header />
                    </section>
                    <Main />
                    <Footer />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument