import styled from "styled-components";

const TileTextContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   align-items: flex-start;
`;

const Caption = styled.h4`
   ${({ theme }) => theme.font.body3}
   color: ${({ theme }) => theme.color.white01};
`;

const TitleContainer = styled.div``;

const Title = styled.h2`
   ${({ theme }) => theme.font.title3}
   color: ${({ theme }) => theme.color.white01};
   margin-top: 0.75rem;
`;

function TileInnerText({
   caption,
   title1,
   title2,
}: {
   caption: string;
   title1: string;
   title2: string;
}) {
   return (
      <TileTextContainer>
         <Caption>{caption}</Caption>
         <TitleContainer>
            <Title>{title1}</Title>
            <Title>{title2}</Title>
         </TitleContainer>
      </TileTextContainer>
   );
}

export default TileInnerText;
