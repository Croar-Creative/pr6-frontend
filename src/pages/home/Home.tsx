import styled from "styled-components";
import HeroSection from "./hero/HeroSection";
import Tiles from "./tiles/Tiles";

const Container = styled.div`
   width: 100%;
`;

function Home() {
   return (
      <Container>
         <HeroSection />
         <Tiles />
      </Container>
   );
}

export default Home;
