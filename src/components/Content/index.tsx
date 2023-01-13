import { AllProducts } from '../AllProducts'
import { MostSold } from '../MostSold'
import { Container } from './style'

export function Content() {
  return (
    <Container>
      <MostSold />
      <AllProducts />
    </Container>
  )
}
