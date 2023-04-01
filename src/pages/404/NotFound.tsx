import SafeArea from "assets/styles/SafeArea";
import styled from "styled-components";
import NotFoundIllust from "assets/images/404/Pr6-404man-illust@2x.png";
import NotFoundIllustMobile from "assets/images/404/Pr6-404man-illust@2x.png";
import LinkedButton from "components/buttons/LinkedButton";

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   margin: 93px 0;
`;

const InnerContainer = styled(SafeArea)`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   position: relative;
`;

const Title = styled.h1`
   ${({ theme }) => theme.font.title2};
   text-align: center;
`;

const SubTitle = styled.span`
   text-align: center;
   ${({ theme }) => theme.font.body2};
   margin: 1em 0;
   line-height: 26.25px;
`;

const Illust = styled.img`
   height: 430.75px;
`;

const ButtonContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   bottom: -1em;
`;

function NotFound() {
   return (
      <Container>
         <InnerContainer>
            <Title>존재하지 않는 페이지입니다.</Title>
            <SubTitle>
               이용에 불편을 드려 죄송합니다.
               <br /> 본 페이지는 존재하지 않는 페이지입니다.
            </SubTitle>
            <Illust src={NotFoundIllust} alt="404" />
            <ButtonContainer>
               <LinkedButton color="yellow01" to="/">
                  돌아가기
               </LinkedButton>
            </ButtonContainer>
         </InnerContainer>
      </Container>
   );
}

export default NotFound;
