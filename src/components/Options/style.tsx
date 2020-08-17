import styled from 'styled-components';
import { colors } from '../../styles/global';

const Container = styled.nav`
  position: relative;
  display: flex;
  padding: 15px 15px 20px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  label:nth-child(2),
  label:first-of-type {
    margin-bottom: 22px;
    width: calc(80% - 12px);

    select,
    input {
      height: 36px;
      line-height: 36px;
    }

    &:not(.active) small {
      top: 9px;
    }
  }

  label:nth-child(2) {
    width: calc(20% - 12px);
  }

  hr {
    align-items: center;
    border: 0;
    border-bottom: 1px solid ${colors.gray};
    display: flex;
    margin: 0px -15px 10px;
    width: calc(100% + 15px);
  }

  label {
    margin-right: auto;
    margin-left: 10px;
  }

  button {
    margin-left: 10px;
  }
`;

export { Container };
