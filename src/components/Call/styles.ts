import styled from 'styled-components/macro';
import arrowIcon from '../../assets/arrow.svg';
import { colors } from '../../styles/colors';

interface IArrow {
	type: string;
}

export const CallBox = styled.div`
	background-color: ${colors.white};
	padding: 10px;
	margin: 4px 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
 
export const CallWrap = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	width: 90%;
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
	font-size: 12px;
`;
 
export const CallArchive = styled.div`
	width: 25px;
	height: 25px;
	background-size: contain;
	background-position: 50% 50%;
	background-repeat: no-repeat;
	margin-left: 10px;
	cursor: pointer;

	&:hover {
		color: ${colors.greenDark};
	}
`;
 
export const CallFrom = styled.div`
	margin-bottom: 3px;
`;
 
export const CallTo = styled.div`
	font-size: 12px;
	color: ${colors.grey};
`;
 
export const CallInfo = styled.div`
	display: inline-block;
	vertical-align: middle;
	margin: 0 10px;
`;