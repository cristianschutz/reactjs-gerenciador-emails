import styled from 'styled-components';

const Container = styled.div`
  min-height: 407px;

  .logo {
    display: block;
    height: auto;
    margin: 0 auto 50px;
    padding: 10px;
    width: 200px;

    img {
      width: 100%;
      height: auto;
      display: block;
    }
  }

  form {
    background: ${(props) => props.theme.colors.background};
    border-radius: 5px;
    border: 1px solid ${(props) => props.theme.colors.gray};
    display: flex;
    flex-direction: column;
    justify-content: center;
    left: 50%;
    max-width: 400px;
    padding: 48px 40px 36px;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;

    div {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export { Container };
