import GNBComponents from "./GNBComponents.style";
import GNBItems from "./GNBItems";
import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import MainLogo from "components/logos/MainLogo";

const Highlight = styled(motion.div)`
   position: absolute;
   height: 3px;
   width: 100%;
   bottom: -0.5em;
   left: 0;
   background-color: ${({ theme }) => theme.color.yellow01};
`;

function GNB() {
   const [selected, setSelected] = useState("");

   const renderHighlight = (itemTitle: string) =>
      itemTitle === selected ? <Highlight layoutId="highlight" /> : null;

   return (
      <GNBComponents.Container onMouseLeave={() => setSelected("")}>
         <GNBComponents.InnerContainer>
            <GNBComponents.LeftContainer>
               <MainLogo />
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
            </GNBComponents.LeftContainer>
            <GNBComponents.RightContainer>
               <GNBComponents.StyledLink
                  to="/login"
                  onMouseOver={() => setSelected("로그인")}
               >
                  <GNBComponents.NavItem>
                     로그인{renderHighlight("로그인")}
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
         </GNBComponents.InnerContainer>
      </GNBComponents.Container>
   );
}
export default GNB;
