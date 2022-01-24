import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Layout from '@components/layout'
import Seo from '@components/seo';

function MyApp({ Component, pageProps, router }) {
  const { pathname } = router;
  return (
    <Layout>
      <Seo path={pathname} />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
