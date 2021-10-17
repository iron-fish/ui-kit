import { Themed } from 'styles/Global'

function MyApp({ Component, pageProps }) {
  return (
    <Themed>
      <Component {...pageProps} />
    </Themed>
  )
}

export default MyApp
