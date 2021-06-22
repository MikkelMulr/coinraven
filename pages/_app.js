import '../styles/globals.css'
import Layout from '../components/ui/Layout/Layout'
import Nav from '../components/ui/nav/Nav'


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Nav />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
