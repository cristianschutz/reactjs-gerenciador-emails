import styled from 'styled-components';

const Container = styled.div`
  position: relative;

  .avatar {
    background: none;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.colors.green};
    cursor: pointer;
    display: block;
    height: 50px;
    overflow: hidden;
    padding: 3px;
    width: 50px;

    img {
      border-radius: 50%;
      width: 100%;
    }
  }

  .avatar-backdrop {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: none;

    &.active {
      display: block;
      z-index: 98;
    }
  }

  .avatar-box {
    background: ${(props) => props.theme.colors.background};
    display: none;
    position: absolute;
    list-style: none;
    border-radius: 4px;
    margin: 10px 0 0;
    padding: 10px 20px;
    width: 300px;
    z-index: 99;
    border: 1px solid ${(props) => props.theme.colors.gray};

    .avatar {
      cursor: initial;
      margin: 0 auto;
      width: 80px;
      height: 80px;
    }

    p {
      text-align: center;
      font-size: 14px;
      width: 100%;
      margin: 20px 0;
    }

    ul {
      margin: 0;
      padding: 0;
      border-top: 1px solid ${(props) => props.theme.colors.gray};
      border-bottom: 1px solid ${(props) => props.theme.colors.gray};
    }

    li {
      padding: 10px 0;
      display: flex;
      font-size: 12px;
      justify-content: center;
      align-items: center;

      select {
        appearance: none;
        background: none;
        margin-left: 10px;
        outline: none;
        padding: 5px 25px 5px 5px;
        text-align: center;
        color: ${(props) => props.theme.colors.black};

        background-image: url(data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhbCIgZGF0YS1pY29uPSJhbmdsZS1kb3duIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1NiA1MTIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1hbmdsZS1kb3duIGZhLXctOCI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMTE5LjUgMzI2LjlMMy41IDIwOS4xYy00LjctNC43LTQuNy0xMi4zIDAtMTdsNy4xLTcuMWM0LjctNC43IDEyLjMtNC43IDE3IDBMMTI4IDI4Ny4zbDEwMC40LTEwMi4yYzQuNy00LjcgMTIuMy00LjcgMTcgMGw3LjEgNy4xYzQuNyA0LjcgNC43IDEyLjMgMCAxN0wxMzYuNSAzMjdjLTQuNyA0LjYtMTIuMyA0LjYtMTctLjF6IiBjbGFzcz0iIj48L3BhdGg+PC9zdmc+);
        background-size: 8px;
        background-repeat: no-repeat;
        background-position: 94%;
        ${(props) =>
          props.theme.title === 'dark' &&
          'background-image: url(data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhbCIgZGF0YS1pY29uPSJhbmdsZS1kb3duIiByb2xlPSJpbWciIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI1NiA1MTIiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1hbmdsZS1kb3duIGZhLXctOCI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTExOS41IDMyNi45TDMuNSAyMDkuMWMtNC43LTQuNy00LjctMTIuMyAwLTE3bDcuMS03LjFjNC43LTQuNyAxMi4zLTQuNyAxNyAwTDEyOCAyODcuM2wxMDAuNC0xMDIuMmM0LjctNC43IDEyLjMtNC43IDE3IDBsNy4xIDcuMWM0LjcgNC43IDQuNyAxMi4zIDAgMTdMMTM2LjUgMzI3Yy00LjcgNC42LTEyLjMgNC42LTE3LS4xeiIgY2xhc3M9IiI+PC9wYXRoPjwvc3ZnPg==);'}
      }

      &:last-of-type {
        justify-content: space-between;
      }
    }

    button {
      background-color: ${(props) => props.theme.colors.background};
      border: 1px solid ${(props) => props.theme.colors.gray};
      color: ${(props) => props.theme.colors.black};
      border-radius: 4px;
      display: inline-block;
      letter-spacing: 0.15px;
      outline: 0;
      cursor: pointer;
      padding: 10px 0;
      text-align: center;
      text-decoration: none;
      white-space: normal;
      text-transform: capitalize;
      align-self: center;
      width: 45%;
    }

    &.active {
      display: block;
    }
  }
`;

export { Container };
