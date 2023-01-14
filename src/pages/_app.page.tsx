import { globalStyles } from '../../styles/globals'
import type { AppProps } from 'next/app'
import { makeServer } from '../mirage/server'

globalStyles()

makeServer()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
