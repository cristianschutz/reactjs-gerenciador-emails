import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;700&display=swap');

  body {  
    padding: 0;
    background: ${(props) => props.theme.colors.background};
    margin: 0;
    font-family: 'Raleway', sans-serif;
    color: ${(props) => props.theme.colors.black};
  }

  html,body{
    height: 100%;
  }

  *, *::before, *::after {
      box-sizing: border-box;
  }

  a{
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }

  button {
    box-shadow: none;
    outline: none;
  }

  .container {
    max-width: 1000px;
    margin: 0 auto;
    width: 100%;
    display: block;
  }

  .btn {
    background: ${(props) => props.theme.colors.green};
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.17);
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.25);
    box-sizing: border-box;
    color: #FFFFFF;
    font-size: 14px;
    font-style: normal;
    font-weight: bold;
    height: 38px;
    line-height: 17px;
  }
`;
