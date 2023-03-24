import LinkedButton from "components/buttons/LinkedButton";
import HeroSectionComponents from "./HeroSectionComponents.style";
import { Illusts, Particles } from "./Illusts";

function HeroSection() {
   return (
      <HeroSectionComponents.Container>
         <HeroSectionComponents.InnerContainer>
            <HeroSectionComponents.TitleContainer>
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
            </HeroSectionComponents.TitleContainer>
            <LinkedButton color="yellow01" to="/service">
               견적 시작하기
            </LinkedButton>

            <Illusts.LeftPerson />
            <Illusts.CenterPerson />
            <Illusts.RightPerson />
            <Particles.Magnifier />
            <Particles.BlueCircle />
            <Particles.BlueTriangle />
            <Particles.YellowCircle />
            <Particles.GreyTwoCircle />
            <Particles.GreyBlueCircles />
         </HeroSectionComponents.InnerContainer>
      </HeroSectionComponents.Container>
   );
}

export default HeroSection;
