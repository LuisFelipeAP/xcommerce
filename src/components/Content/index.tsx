import { useState } from 'react'
import { AllProducts } from '../AllProducts'
import { FavoritesProducts } from '../FavoritesProducts'
import { MostSold } from '../MostSold'
import { Container } from './style'

export function Content() {
  const [isFavorite, setIsFavorite] = useState(false)

  return (
    <Container>
      <MostSold />
      {isFavorite ? <FavoritesProducts /> : <AllProducts />}
    </Container>
  )
}
