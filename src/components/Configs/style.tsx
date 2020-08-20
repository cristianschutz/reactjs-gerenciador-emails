import styled from 'styled-components';

const Container = styled.div`
  position: relative;

  & > button {
    width: 20px;
    height: 20px;
    padding: 0;
    margin-left: 15px;
    color: ${(props) => props.theme.colors.black};
    cursor: pointer;
    border: 0;
    svg {
      height: auto;
      width: 100%;
    }
  }

  ul {
    background: #fff;
    border: 1px solid ${(props) => props.theme.colors.gray};
    display: none;
    list-style: none;
    padding: 0;
    position: absolute;
    right: 0;

    &.active {
      display: block;
    }

    li {
      button {
        margin: 0;
        width: auto;
      }
    }
  }
`;

export { Container };
