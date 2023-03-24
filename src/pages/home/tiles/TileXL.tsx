import styled from "styled-components";
import { Tile } from "./TilesComponents.style";
import TitleIllustSrc from "assets/images/home/Pr6-Tile-Illust1@2x.png";

const Container = styled(Tile)`
   grid-area: tile1;
   background-color: ${({ theme }) => theme.color.yellow01};
`;

const InnerContainer = styled.div`
   width: 100%;
   height: 100%;
   padding: 56px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-end;
`;

const TitleContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
`;

const SubTitle = styled.h3`
   ${({ theme }) => theme.font.title3}
   margin-bottom: 1rem;
`;

const Title = styled.h2`
   ${({ theme }) => theme.font.title2}
`;

const Image = styled.img`
   height: 440.42px;
`;

function TileXl() {
   return (
      <Container>
         <InnerContainer>
            <TitleContainer>
               <SubTitle>거품 없는 마케팅 정찰제 시스템</SubTitle>
               <Title>지금 바로 견적 확인하기</Title>
            </TitleContainer>
            <Image src={TitleIllustSrc} alt="tile-illust" />
         </InnerContainer>
      </Container>
   );
}

export default TileXl;
