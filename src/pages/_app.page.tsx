import { globalStyles } from '../../styles/globals'
import type { AppProps } from 'next/app'
import { makeServer } from '../mirage/server'
import { SearchContextProvider } from '../context/searchContext'
import { ProductsProvider } from '../context/productContext'

globalStyles()

makeServer()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProductsProvider>
      <SearchContextProvider>
        <Component {...pageProps} />
      </SearchContextProvider>
    </ProductsProvider>
  )
}
