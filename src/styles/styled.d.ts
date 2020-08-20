import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      green: string;
      orange: string;
      black: string;
      gray: string;
    };
  }
}
