import { Color } from "assets/styles/theme";

export default interface ButtonProps {
   onClick: () => void;
   children: React.ReactNode;
   color: keyof Color;
}
