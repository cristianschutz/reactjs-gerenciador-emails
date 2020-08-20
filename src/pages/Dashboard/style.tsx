import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    position: relative;
    width: 320px;
    padding: 0 15px;
    min-width: 250px;

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid ${(props) => props.theme.colors.gray};
      padding: 15px;
      margin: 0 -15px 15px;
    }

    .btn-resize {
      background: none;
      cursor: ew-resize;
      border: 0;
      border-right: 1px solid ${(props) => props.theme.colors.gray};
      height: 100%;
      position: absolute;
      right: 0;
      top: 0;
      width: 2px;
      outline: none;
      font-size: 0;
      padding: 0;
    }
  }

  section {
    width: 100%;
    overflow: scroll;
  }
`;

export { Container };
