import Image from "next/image";
import { Container, ImageContainer, InfoContainer } from "./style";
import ProductImage from "../../assets/product.jpg"

export function MostSoldProduct() {
    return (
        <Container>
            <ImageContainer>
                <Image alt="Imagem do produto" src={ProductImage}/>
            </ImageContainer>
            <InfoContainer>
                <span>R$ <strong>31,67</strong></span>
                <span>203 vendas</span>
            </InfoContainer>
            <h3>Kit 10 Un. Adesivo (...)</h3>
        </Container>
    )
}
