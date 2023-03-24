import styled from "styled-components";
import TileInnerText from "./TileInnerText";
import { Tile } from "./TilesComponents.style";

const Container = styled(Tile)`
   grid-area: tile3;
   background-color: ${({ theme }) => theme.color.blue01};
`;

const InnerContainer = styled.div`
   padding: 32px;
   width: 100%;
   height: 100%;
   display: flex;
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
