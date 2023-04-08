import ContentWrap from "components/ContentWrap";
import styled from "styled-components";
import SuccessIllus from "assets/images/sign-up/Pr6-SignUp-Illust@2x.png";
import SuccessIllusMobile from "assets/images/sign-up/Pr6-SignUp-Illust.png";
import { Desktop, Mobile } from "components/mediaquery/MediaQueryFilter";
import Button from "components/inputs/buttons/Button";
import { useNavigate } from "react-router-dom";

const InnerContainer = styled.div`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

const Title = styled.h1`
   ${({ theme }) => theme.font.title2}
   margin: 76px auto 17px auto;
`;

const SubTitle = styled.h2`
   ${({ theme }) => theme.font.body2}
   margin-bottom: 29px;
   max-width: 340px;
   width: 100%;
   text-align: center;
   line-height: 26.25px;
`;

const Image = styled.img`
   height: 392.62px;
`;

const ButtonContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 21px;
   margin: 26.37px 0 75px 0;
`;

function Success() {
   const navigate = useNavigate();
   return (
      <ContentWrap>
         <InnerContainer>
            <Title>회원가입이 완료되었습니다.</Title>
            <SubTitle>
               프로젝트6의 회원이 되신 것을 환영합니다.
               <br /> 서비스 이용을 위해 로그인해주세요.
            </SubTitle>
            <Desktop>
               <Image src={SuccessIllus} alt="완료 일러스트" />
            </Desktop>
            <Mobile>
               <Image src={SuccessIllusMobile} alt="완료 일러스트" />
            </Mobile>
            <ButtonContainer>
               <Button
                  color="yellow01"
                  onClick={() => {
                     navigate("/login");
                  }}
               >
                  로그인
               </Button>
               <Button
                  color="gray04"
                  onClick={() => {
                     navigate("/");
                  }}
               >
                  돌아가기
               </Button>
            </ButtonContainer>
         </InnerContainer>
      </ContentWrap>
   );
}

export default Success;
