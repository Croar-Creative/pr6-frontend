import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   *, *::before, *::after {
      box-sizing: border-box;
      
   }
   :root {
      font-family: Pretendard, sans-serif;
      letter-spacing: -0.05em;
      word-spacing: -0.05em;
      line-height: 0.5em;
      
      @media screen and (max-width: 1023px) {
         font-size: 12px;
      }
      @media screen and (min-width: 1440px)  {
         font-size: 14px;
      }
   }
   html, body, div, span, applet, object, iframe,
   h1, h2, h3, h4, h5, h6, p, blockquote, pre,
   a, abbr, acronym, address, big, cite, code,
   del, dfn, em, img, ins, kbd, q, s, samp,
   small, strike, strong, sub, sup, tt, var,
   b, u, i, center,
   dl, dt, dd, ol, ul, li,
   fieldset, form, label, legend,
   table, caption, tbody, tfoot, thead, tr, th, td,
   article, aside, canvas, details, embed, 
   figure, figcaption, footer, header, hgroup, 
   menu, nav, output, ruby, section, summary,
   time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
   }
   /* HTML5 display-role reset for older browsers */
   article, aside, details, figcaption, figure, 
   footer, header, hgroup, menu, nav, section {
      display: block;
   }
   body {
      line-height: 1;
   }
   #root {
      min-height: 100vh;
   }
   ol, ul {
      list-style: none;
   }
   blockquote, q {
      quotes: none;
   }
   blockquote:before, blockquote:after,
   q:before, q:after {
      content: '';
      content: none;
   }
   table {
      border-collapse: collapse;
      border-spacing: 0;
   }
   a {
      text-decoration: none;
      color: inherit;
      
   }
`;
