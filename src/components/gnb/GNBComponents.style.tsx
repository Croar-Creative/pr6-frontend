import SafeArea from "assets/styles/SafeArea";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.nav`
   width: 100%;
   height: 100px;
   position: sticky;
   top: 0;
   left: 0;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${({ theme }) => theme.color.white01};
   ${({ theme }) => theme.mediaQueries.mobile} {
      height: 63px;
   }
   z-index: 999;
`;

const InnerContainer = styled(SafeArea)`
   display: flex;
   align-items: center;
   justify-content: space-between;
   height: 100%;
`;

const LeftContainer = styled.ul`
   display: flex;
   align-items: center;
   justify-content: flex-start;
`;

const RightContainer = styled.ul`
   display: flex;
   align-items: center;
   justify-content: flex-end;
`;

const NavItem = styled(motion.li)`
   margin: 1rem;
   height: 100%;
   ${({ theme }) => theme.font.body3};
   position: relative;
`;

const StyledLink = styled(motion(Link)).attrs({ layout: true })`
   height: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const MobileMenuContainer = styled(motion.ul)`
   width: 100%;
   height: 0;
   background-color: ${({ theme }) => theme.color.white01};
   position: absolute;
   top: 63px;
   left: 0;
   z-index: 100;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   overflow: hidden;
   padding-top: 21px;
`;

const MobileMenuOverlay = styled(motion.div)`
   width: 100vw;
   height: 100vh;
   background-color: ${({ theme }) => theme.color.black01};
   opacity: 0.5;
   position: absolute;
   top: 0;
   left: 0;
   z-index: 88888;
`;

const MobileStyledLink = styled(Link)`
   width: 100%;
   height: 100%;
`;

const MobileMenuItem = styled.li`
   width: 100%;
   height: 62px;
   ${({ theme }) => theme.font.body3};
   font-weight: 500;
   display: flex;
   align-items: center;
   justify-content: flex-start;
`;

const MobileDivider = styled.div`
   width: 100%;
   height: 1.5px;
   margin: 1em 0;
   background-color: ${({ theme }) => theme.color.gray03};
`;

const GlobalNavBarComponents = {
   Container,
   InnerContainer,
   LeftContainer,
   RightContainer,
   NavItem,
   StyledLink,
   MobileStyledLink,
   MobileMenuContainer,
   MobileMenuItem,
   MobileMenuOverlay,
   MobileDivider,
};

export default GlobalNavBarComponents;
