import styled from "styled-components";
import TileInnerText from "./TileInnerText";
import { Tile } from "./TilesComponents.style";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

const Container = styled(Tile)`
   grid-area: tile2;
   background-color: ${({ theme }) => theme.color.gray09};
`;

const InnerContainer = styled.div`
   padding: 32px;
   display: flex;
   width: 100%;
   height: 100%;
   justify-content: space-between;
`;

const SVGContainer = styled.div`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   gap: 19px;
`;

const SVG = styled(motion.svg)``;

function TileLg() {
   const [isHovered, setIsHovered] = useState(false);
   const control01 = useAnimationControls();
   const control02 = useAnimationControls();
   const control03 = useAnimationControls();
   const control04 = useAnimationControls();

   const controls = [control01, control02, control03, control04];
   const durations = [0.75, 1, 0.75, 1];
   const easings = ["easeInOut", "easeOut", "easeIn", "easeInOut"];
   const rotations = [-90, 90, -180, 270];

   useEffect(() => {
      if (isHovered) {
         controls.forEach((control, index) => {
            control.start({
               rotate: rotations[index],
               transition: {
                  duration: durations[index],
                  ease: easings[index],
                  repeat: Infinity,
               },
            });
         });
      } else {
         controls.forEach((control, index) => {
            control.start({
               rotate: 0,
               transition: {
                  duration: durations[index],
                  ease: easings[index],
               },
            });
         });
      }
   }, [isHovered, controls, durations, easings, rotations]);

   return (
      <Container
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         <InnerContainer>
            <TileInnerText
               caption="Blog"
               title1="마케팅과 디자인 철학이 담긴"
               title2="블로그를 확인 해보세요"
            />
            <SVGContainer>
               <SVG
                  animate={control01}
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
               >
                  <path
                     d="M899.4-444.731v36.518l4.241,4.241h36.518l4.241-4.241v-36.518l-4.241-4.241H903.639Z"
                     transform="translate(-899.398 448.972)"
                     fill="#f7cc4f"
                  />
               </SVG>
               <SVG
                  animate={control02}
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
               >
                  <path
                     d="M1261.305-425.512l22.5-9.772-9.772,22.5,9.772,22.5-22.5-9.772-22.5,9.772,9.772-22.5-9.772-22.5Z"
                     transform="translate(-1238.805 435.284)"
                     fill="#365cf6"
                  />
               </SVG>
               <SVG
                  animate={control03}
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
               >
                  <path
                     d="M1548.988-426.09l20.27,20.27h24.73v-24.73l-20.27-20.27h-24.73Z"
                     transform="translate(-1548.988 450.82)"
                     fill="#f7cc4f"
                  />
               </SVG>
               <SVG
                  animate={control04}
                  xmlns="http://www.w3.org/2000/svg"
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
               >
                  <path
                     d="M1989.128-300.025h-.01a20.692,20.692,0,0,1-3.327-.27l3.079-18.819.055.009.2-1.41.188.916,3.546,19.234A20.645,20.645,0,0,1,1989.128-300.025Z"
                     transform="translate(-1966.603 345.025)"
                     fill="#365cf6"
                  />
                  <path
                     d="M1920.142-302.85a20.548,20.548,0,0,1-5.488-4.477l14.412-12.484.024.027,1.082-.975-.423.791Z"
                     transform="translate(-1909.641 345.226)"
                     fill="#365cf6"
                  />
                  <path
                     d="M2015.759-303.035l-9.659-16.442.042-.025-.759-1.235.358.286,15.415,12.836A20.544,20.544,0,0,1,2015.759-303.035Z"
                     transform="translate(-1980.912 345.209)"
                     fill="#365cf6"
                  />
                  <path
                     d="M1886.809-313.525a20.5,20.5,0,0,1-1.362-6.97l19.063-.372v.024l1.477-.053Z"
                     transform="translate(-1885.447 343.732)"
                     fill="#365cf6"
                  />
                  <path
                     d="M2024.607-317.857l-17.934-6.486.01-.029-1.4-.474,1.479-.029c0-.012,0-.024,0-.036l19.051-.753q.016.406.016.815A20.5,20.5,0,0,1,2024.607-317.857Z"
                     transform="translate(-1980.83 347.614)"
                     fill="#365cf6"
                  />
                  <path
                     d="M2005.285-387.357v0h0l.013-.019-.009.016.24-.216.87-.754-.015-.017,14.16-12.768a20.5,20.5,0,0,1,3.771,6.008l-18.779,7.654Z"
                     transform="translate(-1980.831 408.694)"
                     fill="#365cf6"
                  />
                  <path
                     d="M1911.21-382.865l-.008,0-1.376-.5-.01.028-18.062-6.123a20.483,20.483,0,0,1,3.411-6.231Z"
                     transform="translate(-1890.672 404.303)"
                     fill="#365cf6"
                  />
                  <path
                     d="M1953.269-418.17l-.742-1.227-.009.005-9.984-16.246a20.436,20.436,0,0,1,6.62-2.618Z"
                     transform="translate(-1931.483 438.467)"
                     fill="#365cf6"
                  />
                  <path
                     d="M2005.332-419.193l.207-1.415h0l2.7-18.876a20.434,20.434,0,0,1,6.767,2.219Z"
                     transform="translate(-1982.212 439.484)"
                     fill="#365cf6"
                  />
               </SVG>
            </SVGContainer>
         </InnerContainer>
      </Container>
   );
}

export default TileLg;
