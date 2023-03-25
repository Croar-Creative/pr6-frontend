import "styled-components";
import { Color, Font, MediaQueries } from "./theme";

declare module "styled-components" {
   export interface DefaultTheme {
      font: Font;
      color: Color;
      mediaQueries: MediaQueries;
   }
}
