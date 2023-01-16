import { useContext, useState } from 'react'
import { ProductsContext } from '../../context/productContext'
import { AllProducts } from '../AllProducts'
import { FavoritesProducts } from '../FavoritesProducts'
import { MostSold } from '../MostSold'
import { Container } from './style'

export function Content() {
  const [isFavorite] = useState(false)

  return (
    <Container>
      <MostSold />
      {isFavorite ? <FavoritesProducts /> : <AllProducts />}
    </Container>
  )
}
