import styled, { createGlobalStyle } from 'styled-components/macro';
import paginationIcon from '../assets/pagination-arrow.svg';
import checkboxActiveIcon from '../assets/checkbox-active.svg';
import checkboxIcon from '../assets/checkbox.svg';
import { colors } from './colors';

interface IPrev {
	disabled: boolean;
}

interface ICheckbox {
	active: boolean;
}

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
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const Content = styled.div`
  position: relative;
  overflow: hidden;
`;

export const CallPagination = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const PaginationIcon = styled.div<IPrev>`
  width: 30px;
  height: 30px;
  background: url(${paginationIcon}) no-repeat 50% 50%;
  background-size: contain;
  display: inline-block;
  vertical-align: middle;
  border: 2px solid #000;
  border-radius: 4px;
  margin: 0 5px;
  cursor: ${(p): string => (p.disabled ? 'initial' : 'pointer')};
`;

export const CallPaginationPrev = styled(PaginationIcon)<IPrev>`
  transform: rotate(90deg);
  opacity: ${(p): string => (p.disabled ? '0.2' : '1')};
`;

export const CallPaginationNext = styled(PaginationIcon)`
  transform: rotate(-90deg);
`;

export const Checkboxes = styled.div`
  margin-bottom: 15px;
`;

export const CheckboxWrap = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin: 0 10px 10px 0;
`;

export const Checkbox = styled.div<ICheckbox>`
  cursor: pointer;
  padding-left: 18px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    width: 15px;
    height: 15px;
    top: 50%;
    margin-top: -7px;
    background: url(${(p): string => (p.active ? checkboxActiveIcon : checkboxIcon)});
  }
`;
