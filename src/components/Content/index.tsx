import { useContext } from 'react'
import { ProductsContext } from '../../context/productContext'
import { AllProducts } from '../AllProducts'
import { FavoritesProducts } from '../FavoritesProducts'
import { FilterSection } from '../FilterSection'
import { Container } from './style'

export function Content() {
  const { showFavorites } = useContext(ProductsContext)

  return (
    <Container>
      <FilterSection />
      {showFavorites ? <FavoritesProducts /> : <AllProducts />}
    </Container>
  )
}
