import { globalStyles } from '../../styles/globals'
import type { AppProps } from 'next/app'
import { makeServer } from '../mirage/server'
import { SearchContextProvider } from '../context/searchContext'

globalStyles()

makeServer()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SearchContextProvider>
      <Component {...pageProps} />
    </SearchContextProvider>
  )
}
