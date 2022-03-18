import type { AppProps } from 'next/app'
import IronFishUIProvider from 'components/IronFishUIProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IronFishUIProvider>
      <Component {...pageProps} />
    </IronFishUIProvider>
  )
}

export default MyApp
