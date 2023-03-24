import SafeArea from "assets/styles/SafeArea";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.section`
   width: 100%;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   margin-top: 100px;
`;

const InnerContainer = styled(SafeArea)`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   padding-bottom: 250px;
`;

const TitleContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   margin-bottom: 2em;
`;

const Title = styled(motion.h1).attrs({
   animate: {
      opacity: 1,
      y: 0,
   },
   initial: {
      opacity: 0,
      y: 20,
   },
})`
   ${({ theme }) => theme.font.title2}
   font-weight: 500;
   text-align: center;
   line-height: 1.25em;

   em {
      font-weight: 700;
   }
`;

const SubTitle = styled(motion.h2).attrs({
   animate: {
      opacity: 1,
      y: 0,
   },
   initial: {
      opacity: 0,
      y: 20,
   },
})`
   ${({ theme }) => theme.font.body1}
   margin-bottom: 1em;
`;

const HeroSectionComponents = {
   Container,
   InnerContainer,
   TitleContainer,
   Title,
   SubTitle,
};

export default HeroSectionComponents;
