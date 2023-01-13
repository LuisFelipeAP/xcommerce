import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import { MostSoldProduct } from '../MostSoldProduct'
import {
  Container,
  Content,
  ContentContainer,
  Pagination,
  TitleAndNav,
} from './style'

export function MostSold() {
  return (
    <Container>
      <TitleAndNav>
        <h2>Mais vendidos</h2>
        <div>
          <ArrowLeftIcon width="20" height="20" />
          <ArrowRightIcon width="20" height="20" />
        </div>
      </TitleAndNav>

      <ContentContainer>
        <Content>
          <MostSoldProduct />
          <MostSoldProduct />
          <MostSoldProduct />
          <MostSoldProduct />
          <MostSoldProduct />
          <MostSoldProduct />
        </Content>
        <Pagination>
          <span>Página 1 de 10</span>
        </Pagination>
      </ContentContainer>
    </Container>
  )
}
