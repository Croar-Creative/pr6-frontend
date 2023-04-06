import GNBComponents from "./GNB.styled";
import GNBItems from "./GNBItems";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import MainLogo from "components/logos/MainLogo";
import { Desktop, Mobile } from "components/mediaquery/MediaQueryFilter";
import SafeArea from "assets/styles/SafeArea";
import { useRecoilValue } from "recoil";
import { loginState } from "recoil/LoginState.atom";
import { signOut } from "firebase/auth";
import { googleAuth } from "../../firebase";

const Highlight = styled(motion.div)`
   position: absolute;
   height: 3px;
   width: 100%;
   bottom: -0.5em;
   left: 0;
   background-color: ${({ theme }) => theme.color.yellow01};
   z-index: 999;
`;

function GNB() {
   const [selected, setSelected] = useState("");
   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   const isLoggedIn = useRecoilValue(loginState);
   const controls = useAnimationControls();

   useEffect(() => {
      controls.start({ height: isMobileMenuOpen ? 438 : 0 });
   }, [isMobileMenuOpen, controls]);

   const renderHighlight = (itemTitle: string) =>
      itemTitle === selected ? <Highlight layoutId="highlight" /> : null;

   return (
      <GNBComponents.Container onMouseLeave={() => setSelected("")}>
         <GNBComponents.InnerContainer>
            <GNBComponents.LeftContainer>
               <MainLogo />
               <Desktop>
                  {GNBItems.map((item) => (
                     <GNBComponents.StyledLink
                        key={item.title}
                        to={item.link}
                        onMouseOver={() => setSelected(item.title)}
                     >
                        <GNBComponents.NavItem>
                           {item.title}
                           {renderHighlight(item.title)}
                        </GNBComponents.NavItem>
                     </GNBComponents.StyledLink>
                  ))}
               </Desktop>
            </GNBComponents.LeftContainer>
            <Desktop>
               {
                  <GNBComponents.RightContainer>
                     <GNBComponents.StyledLink
                        to={isLoggedIn ? "" : "/login"}
                        onMouseOver={() => setSelected("로그인")}
                        onClick={() => {
                           isLoggedIn && signOut(googleAuth);
                        }}
                     >
                        <GNBComponents.NavItem>
                           {isLoggedIn ? "로그아웃" : "로그인"}
                           {renderHighlight("로그인")}
                        </GNBComponents.NavItem>
                     </GNBComponents.StyledLink>
                     <GNBComponents.StyledLink
                        to="/projects"
                        onMouseOver={() => setSelected("프로젝트")}
                     >
                        <GNBComponents.NavItem>
                           프로젝트{renderHighlight("프로젝트")}
                        </GNBComponents.NavItem>
                     </GNBComponents.StyledLink>
                  </GNBComponents.RightContainer>
               }
            </Desktop>
            <Mobile>
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18.75"
                  height="15"
                  viewBox="0 0 18.75 15"
                  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                  style={{
                     cursor: "pointer",
                     padding: "1.2rem",
                     transform: "translateX(0.5rem)",
                     boxSizing: "content-box",
                  }}
               >
                  <path
                     id="hamburger"
                     d="M17.812,10.438H.937a.938.938,0,1,1,0-1.875H17.812a.938.938,0,0,1,0,1.875Zm0-6.563H.937A.938.938,0,1,1,.937,2H17.812a.938.938,0,0,1,0,1.875Zm0,13.125H.937a.937.937,0,0,1,0-1.875H17.812a.937.937,0,0,1,0,1.875Z"
                     transform="translate(0 -2)"
                     fill="#222"
                  />
               </svg>
            </Mobile>
         </GNBComponents.InnerContainer>

         <GNBComponents.MobileMenuContainer animate={controls}>
            <SafeArea>
               {GNBItems.map((item) => (
                  <GNBComponents.MobileStyledLink
                     key={item.title}
                     to={item.link}
                     onClick={() => setIsMobileMenuOpen(false)}
                  >
                     <GNBComponents.MobileMenuItem>
                        {item.title}
                     </GNBComponents.MobileMenuItem>
                  </GNBComponents.MobileStyledLink>
               ))}
               <GNBComponents.MobileDivider />
               <GNBComponents.MobileStyledLink
                  to={isLoggedIn ? "" : "/login"}
                  onClick={() => {
                     setIsMobileMenuOpen(false);
                     isLoggedIn && signOut(googleAuth);
                  }}
               >
                  <GNBComponents.MobileMenuItem>
                     {isLoggedIn ? "로그아웃" : "로그인"}
                  </GNBComponents.MobileMenuItem>
               </GNBComponents.MobileStyledLink>
               <GNBComponents.MobileStyledLink
                  to="/projects"
                  onClick={() => setIsMobileMenuOpen(false)}
               >
                  <GNBComponents.MobileMenuItem>
                     프로젝트
                  </GNBComponents.MobileMenuItem>
               </GNBComponents.MobileStyledLink>
            </SafeArea>
         </GNBComponents.MobileMenuContainer>
      </GNBComponents.Container>
   );
}
export default GNB;
