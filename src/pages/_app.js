import GlobalStyles from "../styles/global"
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Magic Doors</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyles/>
    </>
  )

}

export default MyApp
