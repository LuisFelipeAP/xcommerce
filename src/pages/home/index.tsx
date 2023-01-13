import { Header } from "../../components/Header";
import { ProductsHeader } from "../../components/ProductsHeader";
import { Container } from "./styles";

export default function Home() {
    return (
        <Container>
            <Header />
            <ProductsHeader />
        </Container>
    )
}
