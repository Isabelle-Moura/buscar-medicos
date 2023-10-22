import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }
`;
