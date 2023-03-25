import styled from "styled-components";
import TileInnerText from "./TileInnerText";
import { Tile } from "./TilesComponents.style";
import { InnerContainer } from "./TileSmYellow";

const Container = styled(Tile)`
   grid-area: tile3;
   background-color: ${({ theme }) => theme.color.blue01};
   aspect-ratio: 1/1;
`;

function TileSmBlue() {
   return (
      <Container>
         <InnerContainer>
            <TileInnerText
               caption="About us"
               title1="프로젝트6는"
               title2="어떤 브랜드일까요?"
            />
         </InnerContainer>
      </Container>
   );
}

export default TileSmBlue;
