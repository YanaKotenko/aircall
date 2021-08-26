import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  #root {
    margin: 0 auto;
  }
`;

export const Wrapper = styled.div`
    min-height: 100vh;
    background-color: #00b288;
    font-size: 14px;
`;

export const Content = styled.div`
    max-width: 600px;
    width: 100%;
    margin: auto;
    padding: 40px 10px;
    background-color: #f3f3f3;
    border-radius: 25px;
`;