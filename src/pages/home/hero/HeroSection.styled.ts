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
   ${({ theme }) => theme.mediaQueries.mobile} {
      margin-top: 50px;
      overflow-x: hidden;
   }
`;

const InnerContainer = styled(SafeArea)`
   position: relative;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   padding-bottom: 250px;
   ${({ theme }) => theme.mediaQueries.mobile} {
      align-items: flex-start;
      padding-bottom: 440px;
   }
`;

const TitleContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   margin-bottom: 2em;
   ${({ theme }) => theme.mediaQueries.mobile} {
      align-items: flex-start;
   }
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

   line-height: 1.25em;
   em {
      font-weight: 700;
   }

   ${({ theme }) => theme.mediaQueries.mobile} {
      text-align: left;
      ${({ theme }) => theme.font.title4};
      font-weight: 500;
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
   ${({ theme }) => theme.mediaQueries.mobile} {
      margin-top: 1em;
      margin-bottom: 0;
      font-size: 1.2em;
   }
`;

const HeroSectionComponents = {
   Container,
   InnerContainer,
   TitleContainer,
   Title,
   SubTitle,
};

export default HeroSectionComponents;
