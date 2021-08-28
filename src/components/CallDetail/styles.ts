import styled from 'styled-components/macro';
import closeIcon from '../../assets/close.svg';
import { colors } from '../../styles/colors';

interface ICallDetailBox {
	open: boolean;
}

export const CallDetailBox = styled.div<ICallDetailBox>`
	background-color: ${colors.blueDark};
	position: absolute;
	top: 0;
	transform: ${(p): string => (p.open ? 'translateX(0)' : 'translateX(100%)')};
	width: 100%;
	height: 100%;
	transition: 0.2s;
	padding: 15px;
	color: ${colors.white};
`;

export const CallDetailClose = styled.div`
	width: 20px;
	height: 20px;
	background: url(${closeIcon}) no-repeat 50% 50%;
	background-size: contain;
	cursor: pointer;
	position: absolute;
	top: 5px;
	right: 5px;
`;

export const CallDetailHeader = styled.div`
	text-align: center;
	padding: 20px 0;
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

export const CallNotes = styled.div`
	
`;

export const CallNotesTitle = styled.div`
	font-size: 22px;
	margin-bottom: 20px;
	font-weight: bold;
`;

export const CallNotesList = styled.div`

`;

export const CallNote = styled.div`
	background-color: ${colors.white};
	padding: 10px;
	border-radius: 15px;
	color: ${colors.black};
`;

export const CallLeaveNote = styled.div`
	background-color: ${colors.green};
	padding: 15px;
	font-size: 20px;
	border-radius: 15px;
	color: ${colors.white};
	text-align: center;
	cursor: pointer;

	&:hover {
		background-color: ${colors.greenDark};
	}
`;

export const CallDuration = styled.div`
	margin-top: 5px;
`;
