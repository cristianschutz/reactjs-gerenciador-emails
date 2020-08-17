import styled from "styled-components";
import { colors } from "../../../styles/global";

const Container = styled.button`
  align-items: center;
  background: ${colors.orange};
  border-radius: 3px;
  border: 0;
  color: #fff;
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  height: 36px;
  justify-content: center;
  padding: 0 24px;
  transition: all 0.3s ease-in-out;

  &.text {
    background: none;
    color: #202020;
    padding: 0;
    font-weight: 500;
  }

  &.focus {
    border-color: ${colors.orange};
    small {
      color: ${colors.orange};
    }
  }

  &.active {
    small {
      top: -7px;
      font-size: 12px;
      background: #fff;
      padding: 0 5px;
      left: 5px;
    }
  }

  &:hover {
    opacity: 0.7;
  }
`;

export { Container };
