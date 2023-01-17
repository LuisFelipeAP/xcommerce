import { useContext } from 'react'
import { ProductsContext } from '../../context/productContext'
import { AllProducts } from '../AllProducts'
import { FavoritesProducts } from '../FavoritesProducts'
import { MostSold } from '../MostSold'
import { Container } from './style'

export function Content() {
  const { showFavorites } = useContext(ProductsContext)

  return (
    <Container>
      <MostSold />
      {showFavorites ? <FavoritesProducts /> : <AllProducts />}
    </Container>
  )
}
