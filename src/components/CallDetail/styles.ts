import styled from 'styled-components';
import closeIcon from '../../assets/close.svg';

interface ICallDetailBox {
	open: boolean;
}

export const CallDetailBox = styled.div<ICallDetailBox>`
	background-color: #fff;
	position: absolute;
	top: 0;
	transform: ${(p): string => (p.open ? 'translateX(0)' : 'translateX(100%)')};
	width: 100%;
	height: 100%;
	transition: 0.4s;
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

export const CallDetailHeader = styled.div`
	background-color: #002432;
	text-align: center;
	padding: 20px 0;
	color: #fff;
`;

export const CallDirection = styled.div`
	margin-bottom: 20px;
`;

export const CallAddress = styled.div`
	margin-bottom: 10px;
`;

export const CallAddressSign = styled.div`
	font-size: 22px;
	font-weight: bold;
	display: inline-block;
	vertical-align: middle;
	margin-right: 10px;
`;

export const CallAddressNumber = styled.div`
	font-size: 16px;
	display: inline-block;
	vertical-align: middle;
`;

export const CallDuration = styled.div`
	
`;
