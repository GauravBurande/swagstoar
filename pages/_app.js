import '../styles/globals.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Swagstoar - for developers. by developers.</title>
        <meta name="description" content="Swagstoar.vercel.app - wear code t-shirts and more" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
