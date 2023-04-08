import { Color } from "assets/styles/theme";
import styled from "styled-components";

const Container = styled.button<{ color: keyof Color }>`
   all: unset;
   cursor: pointer;
   display: flex;
   align-items: center;
   justify-content: center;
   border-radius: 10px;
   padding: 0.8em 1em;
   transition: all 0.1s ease-out;
   background-color: ${({ theme, color }) => theme.color[color]};
   ${({ theme }) => theme.font.title4};

   color: ${({ theme, color }) =>
      color === "black01"
         ? theme.color.white01
         : color === "yellow01"
         ? theme.color.black01
         : color === "blue01"
         ? theme.color.yellow01
         : theme.color.black01};

   &:hover:active {
      transform: scale(0.98);
      filter: brightness(0.95);
   }

   &:hover {
      transform: scale(1.02);
   }

   ${({ theme }) => theme.mediaQueries.mobile} {
      padding: 1em 1.4em;
      ${({ theme }) => theme.font.body3};
      border-radius: 7px;
   }
`;

export default Container;
