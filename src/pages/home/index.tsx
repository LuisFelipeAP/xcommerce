import { NextSeo } from 'next-seo'
import { Content } from '../../components/Content'
import { Header } from '../../components/Header'
import { ProductsHeader } from '../../components/ProductsHeader'
import { Container } from './styles'

export default function Home() {
  return (
    <>
      <NextSeo title="Xcommerce" />

      <Container>
        <Header />
        <ProductsHeader />

        <Content />
      </Container>
    </>
  )
}
