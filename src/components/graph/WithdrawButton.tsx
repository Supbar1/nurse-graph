import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import ClearSchedule from "../../services/ClearSchedule";
import { pickedNurse } from "../../store/slices/nursesSlice";
import { useAppDispatch } from "./../../store/hooks";
import { setActiveLink } from "../../store/slices/activeLinkSlice";
import {
  resetWorkSchedule,
  setActiveDay,
} from "../../store/slices/monthsSlice";

interface ButtonProps {
  warning?: boolean;
  fontSize: number;
}
const Container = styled.div`
  grid-area: buttons;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0);
`;

const ActionButton = styled.button<ButtonProps>`
  background-color: rgba(255, 255, 255, 0);
  padding: 8px;
  border: none;
  font-weight: bold;
  color: rgba(143, 64, 248, 1);
  width: 100%;
  border-radius: 4px;
  transition: ease-out 0.5s;
  outline: none;
  z-index: 1;
  white-space: nowrap;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0);
  :hover {
    cursor: pointer;
    color: black;
    border: 1px solid rgba(143, 64, 248, 0.5);
  }
  ::before {
    transition: 0.5s all ease;
    position: absolute;
    top: 0;
    left: 50%;
    right: 50%;
    bottom: 0;
    opacity: 0;
    content: "";
    background-color: ${(props) =>
      props.warning ? "palevioletred" : "rgba(39, 200, 255, 0.5)"};
  }
  :hover::before {
    transition: 0.5s all ease;
    left: 0;
    right: 0;
    opacity: 1;
    z-index: -1;
  }
  letter-spacing: 1px;
  @media (max-width: 980px) {
    padding: 4px;
  }
  font-size: ${(props) => props.fontSize}px;
  white-space: nowrap; 
  overflow: hidden; 
  border: 1px solid black;
`;

const WithdrawButton = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSave = () => {
    dispatch(pickedNurse({}));
    dispatch(setActiveLink("table"));
    navigate("/table");
  };
  const withdrawChanges = () => {
    dispatch(resetWorkSchedule(ClearSchedule()));
    dispatch(setActiveDay({}));
  };

  const [fontSize, setFontSize] = useState<number>(0);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const resizeText = () => {
      if (buttonRef.current) {
        const buttonWidth = buttonRef.current.offsetWidth;
        const textWidth = buttonRef.current.scrollWidth;
        console.log("buttonRef", buttonRef.current.scrollWidth);
        if (textWidth > buttonWidth) {
          const newFontSize = (buttonWidth / textWidth) * fontSize;
          setFontSize(newFontSize);
        }
      }
    };

    window.addEventListener("resize", resizeText);
    resizeText();

    return () => window.removeEventListener("resize", resizeText);
  }, [fontSize]);

  return (
    <Container>
      <ActionButton fontSize={fontSize} onClick={handleSave}>
        Zapisz Zmiany
      </ActionButton>
      <ActionButton fontSize={fontSize} warning onClick={withdrawChanges}>
        Cofnij wszystko
      </ActionButton>
    </Container>
  );
};
export default WithdrawButton;
