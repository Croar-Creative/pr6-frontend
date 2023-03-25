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
   z-index: 100;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${({ theme }) => theme.color.white01};
   ${({ theme }) => theme.mediaQueries.mobile} {
      height: 63px;
   }
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

const GlobalNavBarComponents = {
   Container,
   InnerContainer,
   LeftContainer,
   RightContainer,
   NavItem,
   StyledLink,
};

export default GlobalNavBarComponents;
