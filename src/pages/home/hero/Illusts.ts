import styled from "styled-components";
import { motion } from "framer-motion";
import LeftPersonSrc from "assets/images/home/Pr6-Hero-Left-Person@2x.png";
import CenterPersonSrc from "assets/images/home/Pr6-Hero-Center-Person@2x.png";
import RightPersonSrc from "assets/images/home/Pr6-Hero-Right-Person@2x.png";
import MagnifierSrc from "assets/images/home/Pr6-Hero-Magnifier@2x.png";
import BlueCircleSrc from "assets/images/home/Pr6-Hero-Blue-Circle@2x.png";
import BlueTriangleSrc from "assets/images/home/Pr6-Hero-Rounded-Triangle@2x.png";
import YellowCircleSrc from "assets/images/home/Pr6-Hero-Yellow-Circle@2x.png";
import GreyTwoCircleSrc from "assets/images/home/Pr6-Hero-Gray-Two-Circle@2x.png";
import GreyBlueCirclesSrc from "assets/images/home/Pr6-Hero-Gray-and-Blue-Circle@2x.png";

const Image = styled.img`
   position: absolute;
`;

const LeftPerson = styled(motion(Image)).attrs({
   src: LeftPersonSrc,
   alt: "leftPerson",
   variants: {
      hidden: { scale: 0, opacity: 0, left: "-20%", bottom: "-30%" },
      show: {
         opacity: 1,
         scale: 1,
         left: 0,
         bottom: "10%",
      },
   },
   initial: "hidden",
   animate: "show",
   transition: { type: "spring", damping: 20, delay: 0.1, stiffness: 150 },
})`
   height: 285.3px;
   bottom: 34.1px;
   left: 0;
`;

const CenterPerson = styled(motion(Image)).attrs({
   src: CenterPersonSrc,
   alt: "centerPerson",
   variants: {
      hidden: { scale: 0, opacity: 0, bottom: "-50%" },
      show: {
         opacity: 1,
         scale: 1,
         bottom: 0,
      },
   },
   initial: "hidden",
   animate: "show",
   transition: { type: "spring", damping: 20, stiffness: 150 },
})`
   height: 214.52px;
   bottom: 0px;
`;

const RightPerson = styled(motion(Image)).attrs({
   src: RightPersonSrc,
   alt: "rightPerson",
   variants: {
      hidden: { scale: 0, opacity: 0, right: "-20%", bottom: "-30%" },
      show: {
         opacity: 1,
         scale: 1,
         right: 0,
         bottom: "10%",
      },
   },
   initial: "hidden",
   animate: "show",
   transition: { type: "spring", damping: 20, delay: 0.13, stiffness: 150 },
})`
   height: 350.47px;
   right: 0;
   z-index: -1;
   bottom: 34.1px;
`;

export const Illusts = {
   LeftPerson,
   CenterPerson,
   RightPerson,
};

const Magnifier = styled(motion(Image)).attrs({
   src: MagnifierSrc,
   alt: "magnifier",
   animate: {
      x: [0, -2, 3, 1, 0],
      y: [0, 3, -1, -5, 0],
      transition: {
         duration: 5,
         repeat: Infinity,
         repeatType: "reverse",
      },
   },
})`
   height: 63.68px;
   left: 0;
   top: 113.2px;
`;

const BlueCircle = styled(motion(Image)).attrs({
   src: BlueCircleSrc,
   alt: "blueCircle",
   animate: {
      x: [0, 2, -5, -8, 0],
      y: [0, -7, -2, 5, 0],
      scale: [1, 1.2, 0.9, 1.1, 1],
      transition: {
         duration: 4,
         repeat: Infinity,
         repeatType: "easeInOut",
      },
   },
})`
   height: 29.77px;
   left: 212.42px;
   top: 0px;
`;

const BlueTriangle = styled(motion(Image)).attrs({
   src: BlueTriangleSrc,
   alt: "blueTriangle",
   animate: {
      rotate: [0, 180, 360],
      transition: {
         duration: 1,
         repeat: Infinity,
         repeatType: "easeInOut",
         repeatDelay: 1,
      },
   },
})`
   height: 37.04px;
   right: 244.68px;
   top: 242.82px;
`;

const YellowCircle = styled(motion(Image)).attrs({
   src: YellowCircleSrc,
   alt: "yellowCircle",
   animate: {
      x: [0, 2, 0, 1, 0],
      y: [0, -3, 2, 5, 0],
      transition: {
         duration: 5,
         repeat: Infinity,
         repeatType: "easeInOut",
      },
   },
})`
   height: 21.93px;
   right: 233.72px;
   top: 123.11px;
`;

const GreyTwoCircle = styled(motion(Image)).attrs({
   src: GreyTwoCircleSrc,
   alt: "greyTwoCircle",
   animate: {
      opacity: [1, 0.5, 1],
      scale: [1, 1.1, 1],
      transition: {
         duration: 1.5,
         repeat: Infinity,
         repeatType: "easeInOut",
         repeatDelay: 1.5,
         delay: 0.4,
      },
   },
})`
   height: 40.75px;
   left: 402.71px;
   bottom: 175.06px;
`;

const GreyBlueCircles = styled(motion(Image)).attrs({
   src: GreyBlueCirclesSrc,
   alt: "greyBlueCircles",
   animate: {
      rotate: [0, -180, -360],
      transition: {
         duration: 1.5,
         repeat: Infinity,
         repeatType: "easeInOut",
         repeatDelay: 1.5,
         delay: 0.4,
      },
   },
})`
   height: 45.2px;
   right: 355.62px;
   bottom: 171.89px;
`;

export const Particles = {
   Magnifier,
   BlueCircle,
   BlueTriangle,
   YellowCircle,
   GreyTwoCircle,
   GreyBlueCircles,
};
