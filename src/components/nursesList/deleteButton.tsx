import React from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 1.3vh;
  border-radius: 15%;
  background-color: rgba(143, 64, 248, 0.5);
  border: 1px solid rgba(143, 64, 248, 1);
`;
type ButtonProps = {
  onDelete: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
export const DeleteButton = (props: ButtonProps) => {
  return <Button onClick={props.onDelete}>Zatwierdź</Button>;
};
