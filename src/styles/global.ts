import styled, { createGlobalStyle } from 'styled-components/macro';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
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

export const Body = styled.div`
  min-height: 100vh;
  background-color: ${colors.green};
  font-size: 14px;
`;

export const Wrapper = styled.div`
  max-width: 400px;
  width: 100%;
  margin: auto;
  padding: 40px 10px;
  background-color: ${colors.greyLight};
  border-radius: 25px;
`;

export const Content = styled.div`
  position: relative;
  overflow: hidden;
`;

export const CallList = styled.div`
  
`;