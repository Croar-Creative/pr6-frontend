import styled from "styled-components";
import LinkedButton from "components/buttons/LinkedButton";
import { Desktop, Mobile } from "components/mediaquery/MediaQueryFilter";
import ContentWrap from "components/ContentWrap";

const InnerContainer = styled.div`
   margin: 93px 0;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   position: relative;
`;

const Title = styled.h1`
   ${({ theme }) => theme.font.title2};
   ${({ theme }) => theme.mediaQueries.mobile} {
      ${({ theme }) => theme.font.title4};
   }
   text-align: center;
`;

const SubTitle = styled.pre`
   text-align: center;
   ${({ theme }) => theme.font.body2};
   ${({ theme }) => theme.mediaQueries.mobile} {
      ${({ theme }) => theme.font.body3};
   }
   margin: 1em 0;
   line-height: 21.25px;
`;

const Illust = styled.img`
   height: 430.75px;
`;

const IllustMobile = styled.img`
   height: 227.23px;
`;

const ButtonContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   bottom: -7em;
`;

interface ErrorPageProps {
   title: string;
   subTitle: string;
   imageSrc: string;
   mobileImgSrc: string;
}

function ErrorPage({
   title,
   subTitle,
   imageSrc,
   mobileImgSrc,
}: ErrorPageProps) {
   return (
      <ContentWrap>
         <InnerContainer>
            <Title>{title}</Title>
            <SubTitle>{subTitle}</SubTitle>
            <Desktop>
               <Illust src={imageSrc} alt="404" />
            </Desktop>
            <Mobile>
               <IllustMobile src={mobileImgSrc} alt="404" />
            </Mobile>
            <ButtonContainer>
               <LinkedButton color="yellow01" to="/">
                  돌아가기
               </LinkedButton>
            </ButtonContainer>
         </InnerContainer>
      </ContentWrap>
   );
}

export default ErrorPage;
