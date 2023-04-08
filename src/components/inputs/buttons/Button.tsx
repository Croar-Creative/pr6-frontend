import ButtonProps from "./Button.props";
import Container from "./Button.styled";

const COLORS = ["black", "white", "red"];
export type ButtonColors = typeof COLORS[number];

const handleClick = (
   e: React.MouseEvent<HTMLButtonElement>,
   onClickCallback: () => void
) => {
   e.preventDefault();
   onClickCallback();
};

function Button({ onClick, children, color }: ButtonProps) {
   return (
      <Container
         color={color}
         onClick={(e) => onClick && handleClick(e, onClick)}
      >
         {children}
      </Container>
   );
}

export default Button;
