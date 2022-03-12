import { Themed } from 'styles/Global'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Themed>
      <Component {...pageProps} />
    </Themed>
  )
}

export default MyApp
