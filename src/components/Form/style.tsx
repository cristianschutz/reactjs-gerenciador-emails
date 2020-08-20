import styled from 'styled-components';

const Container = styled.label`
  border-radius: 3px;
  border: 1px solid ${(props) => props.theme.colors.gray};
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
    color: ${(props) => props.theme.colors.black};
    padding: 0 15px;
    appearance: none;

    &:-internal-autofill-selected {
      background-color: transparent;
    }
  }

  &.focus {
    border-color: ${(props) => props.theme.colors.orange};
    small {
      color: ${(props) => props.theme.colors.orange};
    }
  }

  &.active {
    small {
      top: -7px;
      font-size: 12px;
      background: ${(props) => props.theme.colors.background};
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
