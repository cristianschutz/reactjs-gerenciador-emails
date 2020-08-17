import styled from "styled-components";
import { colors } from "../../styles/global";

const Container = styled.label`
  border-radius: 3px;
  border: 1px solid ${colors.gray};
  display: block;
  margin: 5px 0 25px;
  position: relative;

  small {
    display: block;
    font-size: 16px;
    left: 15px;
    pointer-events: none;
    position: absolute;
    color: #80868b;
    top: 18px;
    transition: all 0.2s ease-in-out;
  }

  select,
  input {
    border-radius: 3px;
    border: 0;
    height: 54px;
    background: transparent;
    width: 100%;
    font-size: 16px;
    outline: none;
    padding: 0 15px;
    appearance: none;

    &:-webkit-autofill {
      -webkit-text-fill-color: inherit !important;
      -webkit-box-shadow: 0 0 0 30px #fff inset !important;
    }

    &:-webkit-autofill {
      animation-name: onAutoFillStart;
      transition: background-color 50000s ease-in-out 0s;
    }

    &:not(:-webkit-autofill) {
      animation-name: onAutoFillCancel;
    }
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

  @keyframes onAutoFillStart {
  }

  @keyframes onAutoFillCancel {
  }
`;

export { Container };
