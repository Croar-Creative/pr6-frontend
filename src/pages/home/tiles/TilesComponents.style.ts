import SafeArea from "assets/styles/SafeArea";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.section`
   width: 100%;
   height: 698px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: flex-start;
   margin-bottom: 84px;
`;

const InnerContainer = styled(motion(SafeArea))`
   display: grid;
   height: 100%;
   grid-template-columns: 2fr 1fr 1fr;
   grid-template-rows: 1fr 1fr;
   grid-template-areas:
      "tile1 tile2 tile2"
      "tile1 tile3 tile4";
   grid-gap: 32px;
`;

export const Tile = styled(motion.div).attrs({
   animate: {
      opacity: 1,
      y: 0,
   },
   initial: {
      opacity: 0,
      y: 20,
   },
   whileHover: {
      scale: 1.02,
      padding: "0.5%",
      transition: {
         duration: 0.5,
         type: "spring",
         velocity: 2,
      },
   },
})`
   border-radius: 20px;
   cursor: pointer;
   z-index: 10;
   position: relative;
`;

const TilesComponents = {
   Container,
   InnerContainer,
};

export default TilesComponents;
