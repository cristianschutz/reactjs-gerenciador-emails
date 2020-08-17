import styled from 'styled-components';
import { colors } from '../../../styles/global';

const Container = styled.label`
  display: flex;
  align-items: center;

  svg {
    width: 10px;
    margin: 0 auto;
    color: inherit;
    opacity: 0;
  }

  span {
    content: '';
    border: 2px solid ${colors.orange};
    color: ${colors.orange};
    cursor: pointer;
    height: 20px;
    width: 20px;
    transition: all 0.3s ease-in-out;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input {
    opacity: 0;
    position: absolute;
    pointer-events: none;
  }

  input:checked + span {
    box-shadow: inset 0px 0px 0px 3px white;

    svg {
      opacity: 1;
    }
  }
  small {
    margin-left: 10px;
    color: ${colors.black};
    font-size: 12px;
  }
`;

export { Container };
