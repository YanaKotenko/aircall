import styled from 'styled-components/macro';
import arrowIcon from '../../assets/arrow.svg';
import crossIcon from '../../assets/cross.svg';
import voiceIcon from '../../assets/voicemail.svg';
import { colors } from '../../styles/colors';

interface IType {
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
 
export const CallDirection = styled.div`
	display: inline-block;
	vertical-align: middle;
`;
 
export const CallType = styled.div<IType>`
	width: 16px;
	height: 16px;
	margin: auto;
	background: url(${(p): string => (p.type === 'missed' ? crossIcon : voiceIcon)}) no-repeat 50% 50%;
	background-size: contain;
`;
 
export const CallArrow = styled.div<IType>`
	width: 25px;
	height: 25px;
	background: url(${arrowIcon}) no-repeat 50% 50%;
	background-size: contain;
	transform: ${(p): string => (p.type === 'inbound' ? 'rotate(45deg)' : 'rotate(-135deg)')};
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