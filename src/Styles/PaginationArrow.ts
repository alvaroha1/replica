import styled from "styled-components";

interface ArrowProps {
  disabled?: boolean;
}

export const LeftArrow = styled.div<ArrowProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  pointer-events: ${props => props.disabled ? "disabled" : "auto"};
  opacity: ${props => props.disabled ? "0.4" : "1"};
`;

export const RightArrow = styled.div<ArrowProps>`
  padding: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${props => props.disabled ? "disabled" : "auto"};
  opacity: ${props => props.disabled ? "0.4" : "1"};
`;
