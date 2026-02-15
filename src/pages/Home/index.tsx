import { Container, Title, Subtitle } from "./styled";
import ImageCarousel from "../../components/ImageCarousel";
import Header from "../../components/Header";


function Home() {
  return (
    <Container>
      <Title>Aluguel de Temas para festas</Title>
      <Subtitle>
        Infantil, adulto, corporativo e muito mais. Monte sua festa do seu jeito.
      </Subtitle>

      <Header />
      <ImageCarousel />
    </Container>
  );
}

export default Home;
