import styled from 'styled-components';
import arrowIcon from '../../assets/arrow.svg';
import phoneIcon from '../../assets/phone.svg';

interface IArrow {
	type: string;
}
 
export const CallBox = styled.div`
	background-color: #fff;
	padding: 10px;
	margin: 4px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
`;
 
export const CallCol = styled.div`
	
`;
 
export const CallArrow = styled.div<IArrow>`
	width: 25px;
	height: 25px;
	background-image: url(${arrowIcon});
	background-size: contain;
	background-position: 50% 50%;
	background-repeat: no-repeat;
	transform: ${(p): string => (p.type === 'inbound' ? 'rotate(45deg)' : 'rotate(-135deg)')};
	display: inline-block;
	vertical-align: middle;
`;
 
export const CallDate = styled.div`
	display: inline-block;
	vertical-align: middle;
`;
 
export const CallPhone = styled.div`
	width: 25px;
	height: 25px;
	background-image: url(${phoneIcon});
	background-size: contain;
	background-position: 50% 50%;
	background-repeat: no-repeat;
	display: inline-block;
	vertical-align: middle;
	margin-left: 10px;
`;
 
export const CallFrom = styled.div`
	margin-bottom: 3px;
`;
 
export const CallTo = styled.div`
	font-size: 12px;
	color: #666;
`;
 
export const CallInfo = styled.div`
	display: inline-block;
	vertical-align: middle;
	margin: 0 10px;
`;