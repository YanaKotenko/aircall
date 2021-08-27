import styled from 'styled-components';
import closeIcon from '../../assets/close.svg';

export const CallDetailBox = styled.div`
	background-color: #fff;
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	height: 100%;
	padding: 15px;
`;

export const CallDetailClose = styled.div`
	width: 20px;
	height: 20px;
	background-image: url(${closeIcon});
	background-size: contain;
	background-position: 50% 50%;
	background-repeat: no-repeat;
	cursor: pointer;
	position: absolute;
	top: 5px;
	right: 5px;
`;
