import React from "react";
import { Container } from "./style";

interface Props {
  type?: "text" | "";
  onClick?: any;
}

const Button: React.FC<Props> = (props) => {
  return (
    <Container onClick={props.onClick} className={props.type}>
      {props.children}
    </Container>
  );
};

export default Button;
