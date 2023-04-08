import Head from "next/head"
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'

const Layout = ({ children, title }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Pedro suarez Portfolio Web Page" />
                <link rel="icon" href="../../../public/favicon.ico" />
            </Head>
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout