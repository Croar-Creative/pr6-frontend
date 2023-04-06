import { Color } from "assets/styles/theme";
import { Link } from "react-router-dom";
import Container from "./Button.styled";

type LinkedButtonProps = {
   color: keyof Color;
   to: string;
   children: React.ReactNode;
};

function LinkedButton({ color, to, children }: LinkedButtonProps) {
   return (
      <Link to={to}>
         <Container color={color}>{children}</Container>
      </Link>
   );
}

export default LinkedButton;
