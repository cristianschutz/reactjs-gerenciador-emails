import styled from 'styled-components';
import { colors } from '../../styles/global';

const Container = styled.div`
  position: relative;

  .btn-toggle {
    border-radius: 50%;
    border: 2px solid ${colors.green};
    overflow: hidden;
    padding: 3px;
    background: none;
    height: 50px;
    cursor: pointer;
    width: 50px;

    img {
      border-radius: 50%;
      width: 100%;
    }
  }

  ul {
    display: none;
    position: absolute;
    list-style: none;
    background: #fff;
    border-radius: 4px;
    margin: 10px 0 0;
    padding: 10px 20px;
    border: 1px solid ${colors.gray};

    li {
      padding: 10px 0;
      display: flex;
    }

    &.active {
      display: block;
    }
  }
`;

export { Container };
