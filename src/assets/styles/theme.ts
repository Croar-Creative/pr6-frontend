import { DefaultTheme } from "styled-components";

const font = {
   title1: `
      font-size: 72px;
      font-weight: bold;
   `,
   title2: `
      font-size: 56px;
      font-weight: bold;
   `,
   title3: `
      font-size: 32px;
      font-weight: 600;
      `,
   title4: `
      font-size: 28px;
      font-weight: 600;
   `,
   body1: `
      font-size: 26px;
      font-weight: medium;
   `,
   body2: `
      font-size: 21px;
      font-weight: medium;
   `,
   body3: `
      font-size: 17px;
      font-weight: medium;
   `,
   detail1: `
      font-size: 14px;
      font-weight: medium;
   `,
};

const color = {
   yellow01: "#F7CC4F",
   blue01: "#365CF6",
   red01: "#E94B35",
   green01: "#1AAF4D",
   white01: "#FFFFFF",
   black01: "#000000",
   gray03: "#F0F0F0",
   gray04: "#CCCCCC",
   gray05: "#AAAAAA",
   gray06: "#888888",
   gray07: "#666666",
   gray08: "#444444",
   gray09: "#222222",
};

const mediaQueries = {
   mobile: "@media screen and (max-width: 1023px)",
   desktop: "@media screen and (min-width: 1024px)",
};

export type Color = typeof color;
export type Font = typeof font;
export type MediaQueries = typeof mediaQueries;

const theme: DefaultTheme = {
   color,
   font,
   mediaQueries,
};

export default theme;
