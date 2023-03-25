import styled from "styled-components";
import TileInnerText from "./TileInnerText";
import { Tile } from "./TilesComponents.style";

const Container = styled(Tile)`
   grid-area: tile4;
   background-color: ${({ theme }) => theme.color.yellow01};
   aspect-ratio: 1/1;
`;

export const InnerContainer = styled.div`
   padding: 32px;
   width: 100%;
   height: 100%;
   display: flex;
   ${({ theme }) => theme.mediaQueries.mobile} {
      padding: 22px 15px;
      justify-content: flex-start;
      align-items: flex-end;
   }
`;

function TileSmYellow() {
   return (
      <Container>
         <InnerContainer>
            <TileInnerText
               caption="Contact us"
               title1="빠르고 간편한"
               title2="60초 문의하기"
            />
         </InnerContainer>
      </Container>
   );
}

export default TileSmYellow;
