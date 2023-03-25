import SafeArea from "assets/styles/SafeArea";
import MainLogo from "components/logos/MainLogo";
import { Desktop, Mobile } from "components/mediaquery/MediaQueryFilter";
import styled from "styled-components";

const Wrapper = styled.footer`
   width: 100%;
`;

const Container = styled.div`
   width: 100%;
   height: 190px;
   border-radius: 20px 20px 0 0;
   background-color: ${({ theme }) => theme.color.gray03};
   display: flex;
   align-items: center;
   justify-content: center;
   ${({ theme }) => theme.mediaQueries.mobile} {
      height: 244px;
      align-items: flex-start;
   }
`;

const InnerContainer = styled(SafeArea)`
   display: flex;
   align-items: center;
   justify-content: space-between;
   ${({ theme }) => theme.mediaQueries.desktop} {
      height: 100%;
   }
   ${({ theme }) => theme.mediaQueries.mobile} {
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin-top: 46px;
   }
`;

const InfosContainer = styled.div`
   a {
      text-decoration: underline;
   }
   ${({ theme }) => theme.mediaQueries.mobile} {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }
`;

const Infos = styled.p`
   ${({ theme }) => theme.font.detail1};
   color: ${({ theme }) => theme.color.gray07};
   line-height: 1.2em;
   margin-bottom: 0.75em;
   em {
      font-weight: 500;
   }
   ${({ theme }) => theme.mediaQueries.mobile} {
      font-size: 1em;
      text-align: center;
      margin-top: 1em;
   }
`;

const CopyRight = styled.p`
   font-size: 12px;
   font-weight: 300;
   color: ${({ theme }) => theme.color.gray08};
   letter-spacing: 0.02px;
   ${({ theme }) => theme.mediaQueries.mobile} {
      text-align: center;
      margin-top: 1em;
      font-size: 11px;
      color: ${({ theme }) => theme.color.gray05};
   }
`;

const Vr = styled.div`
   display: inline-block;
   width: 1px;
   height: 1em;
   background-color: ${({ theme }) => theme.color.gray08};
   margin: 0 0.5em;
   transform: translateY(0.15em);
`;

function Footer() {
   return (
      <Wrapper>
         <Container>
            <InnerContainer>
               <Desktop>
                  <InfosContainer>
                     <Infos>
                        <em>프로젝트6</em> <Vr /> 상호명 : 크로아 크리에이티브{" "}
                        <Vr /> 대표자 : 강우주 <Vr /> 소재지 : 서울특별시 강서구
                        공항대로 247 C동 (마곡동) <Vr /> 문의 : pr6@croar.co.kr
                        <br /> 사업자등록번호 : 717-48-00420{" "}
                        <a href="#">[사업자정보확인]</a> <Vr />{" "}
                        개인정보관리책임자 : 이호연 <Vr /> 통신판매업 신고번호 :
                        제2023–서울강서-0903호
                     </Infos>
                     <CopyRight>
                        Copyright © 2023 Project6. All rights reserved. <Vr />
                        Brand Of <a href="#">Croar Creative</a> : Don’t be
                        afraid to experiment.
                     </CopyRight>
                  </InfosContainer>
                  <MainLogo />
               </Desktop>
               <Mobile>
                  <InfosContainer>
                     <MainLogo />
                     <Infos>
                        상호명 : 크로아 크리에이티브 <Vr /> 대표자 : 강우주{" "}
                        <br />
                        소재지 : 서울특별시 강서구 공항대로 247 C동 (마곡동)
                        <br /> 문의 : pr6@croar.co.kr
                        <br /> 사업자등록번호 : 717-48-00420{" "}
                        <a href="#">[사업자정보확인]</a>
                        <br />
                        개인정보관리책임자 : 이호연 <br />
                        통신판매업 신고번호 : 제2023–서울강서-0903호
                     </Infos>
                     <CopyRight>
                        Copyright © 2023 Project6. All rights reserved. <br />
                        Brand Of <a href="#">Croar Creative</a> : Don’t be
                        afraid to experiment.
                     </CopyRight>
                  </InfosContainer>
               </Mobile>
            </InnerContainer>
         </Container>
      </Wrapper>
   );
}

export default Footer;
