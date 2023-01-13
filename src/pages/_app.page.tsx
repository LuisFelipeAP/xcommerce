import { globalStyles } from '../../styles/globals'
import type { AppProps } from 'next/app'
import { makeServer } from "../mirage/server"

globalStyles()

if (
  process.env.NODE_ENV === "development" &&
  typeof makeServer === "function"
) {
  console.log("entrei")
  makeServer();
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
