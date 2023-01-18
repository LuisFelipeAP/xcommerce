import Image from 'next/image'
import { Container, ImageContainer, InfoContainer } from './style'
import ProductImage from '../../assets/product.jpg'
import { ProductInterface } from '../../context/productContext'

export function FilteredProductComponent({
  name,
  price,
  sales,
}: ProductInterface) {
  return (
    <Container>
      <ImageContainer>
        <Image alt="Imagem do produto" src={ProductImage} />
      </ImageContainer>
      <InfoContainer>
        <span>
          R$ <strong>{price}</strong>
        </span>
        <span>{sales} vendas</span>
      </InfoContainer>
      <h3>{name.length > 18 ? name.substring(0, 18) + ' (...)' : name}</h3>
    </Container>
  )
}
