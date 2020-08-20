import styled from 'styled-components';

const Container = styled.div`
  ol {
    list-style: none;
    margin: 0;
    padding: 0;

    & > li {
      margin-bottom: 10px;

      & > button {
        border: 0;
        font-weight: 700;
        font-size: 15px;
        padding: 0;
        color: inherit;
        background: none;
        margin-bottom: 5px;
        cursor: pointer;
        display: flex;
        align-items: center;

        svg {
          width: 7px;
          margin-right: 5px;
          transition: all 0.2s ease-in-out;
        }
      }

      ul {
        list-style: none;
        max-height: 0;
        overflow: hidden;
        padding: 0;
        transition: all 0.3s ease-in-out;

        li a {
          padding: 0 15px;
          font-size: 14px;
          border: 0;
          font-weight: 300;
          margin: 3px 0;
          display: flex;
          align-items: center;
          width: 100%;
          cursor: pointer;
          color: ${(props) => props.theme.colors.black};
          transition: all 0.2s ease-in-out;

          svg {
            color: ${(props) => props.theme.colors.orange};
            width: 10px;
            margin-right: 5px;
            transition: all 0.2s ease-in-out;
          }

          &.active,
          &:hover {
            color: ${(props) => props.theme.colors.orange};
          }
        }
      }

      &.active {
        & > button {
          font-weight: 400;

          svg {
            transform: rotate(90deg);
          }
        }
        ul {
          max-height: 500px;
        }
      }
    }
  }
`;

export { Container };
