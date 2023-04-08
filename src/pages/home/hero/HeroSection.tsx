import LinkedButton from "components/inputs/buttons/LinkedButton";
import HeroSectionComponents from "./HeroSection.styled";
import Illusts from "./Illusts";
import { Desktop, Mobile } from "components/mediaquery/MediaQueryFilter";

function HeroSection() {
   return (
      <HeroSectionComponents.Container>
         <HeroSectionComponents.InnerContainer>
            <HeroSectionComponents.TitleContainer>
               <Desktop>
                  <HeroSectionComponents.SubTitle>
                     웹디자인 &nbsp; / &nbsp; 홈페이지 &nbsp; / &nbsp; 영상제작
                     &nbsp; / &nbsp; 유튜브 &nbsp; / &nbsp; 마케팅
                  </HeroSectionComponents.SubTitle>
                  <HeroSectionComponents.Title transition={{ duration: 0.5 }}>
                     고객님의 <em>합리적인</em> 마케팅 도입을 위한
                  </HeroSectionComponents.Title>
                  <HeroSectionComponents.Title
                     transition={{ delay: 0.2, duration: 0.5 }}
                  >
                     <em>맞춤형 마케팅 견적 서비스</em>
                  </HeroSectionComponents.Title>
               </Desktop>
               <Mobile>
                  <HeroSectionComponents.Title transition={{ duration: 0.5 }}>
                     고객님의 <em>합리적인</em>
                  </HeroSectionComponents.Title>
                  <HeroSectionComponents.Title
                     transition={{ delay: 0.2, duration: 0.5 }}
                  >
                     마케팅 도입을 위한
                  </HeroSectionComponents.Title>
                  <HeroSectionComponents.Title
                     transition={{ delay: 0.4, duration: 0.5 }}
                  >
                     <em>맞춤형 마케팅 견적 서비스</em>
                  </HeroSectionComponents.Title>
                  <HeroSectionComponents.SubTitle>
                     웹디자인 &nbsp; / &nbsp; 홈페이지 &nbsp; / &nbsp; 영상제작
                     &nbsp; / &nbsp; 유튜브 &nbsp; / &nbsp; 마케팅
                  </HeroSectionComponents.SubTitle>
               </Mobile>
            </HeroSectionComponents.TitleContainer>

            <LinkedButton color="yellow01" to="/service">
               견적 시작하기
            </LinkedButton>

            <Illusts />
         </HeroSectionComponents.InnerContainer>
      </HeroSectionComponents.Container>
   );
}

export default HeroSection;
