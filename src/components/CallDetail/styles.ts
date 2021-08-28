import styled from 'styled-components/macro';
import closeIcon from '../../assets/close.svg';
import closeNoteIcon from '../../assets/close-note.svg';
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
	margin-bottom: 15px;
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
	height: 68%;
`;

export const CallNotesTitle = styled.div`
	font-size: 22px;
	margin-bottom: 20px;
	font-weight: bold;
`;

export const CallNotesScrollBox = styled.div`
	height: 90%;
	overflow: auto;
`;

export const CallNote = styled.div`
	background-color: ${colors.white};
	padding: 10px;
	border-radius: 10px;
	color: ${colors.black};
	margin-bottom: 8px;
`;

export const CallDetailBtn = styled.div`
	background-color: ${colors.green};
	padding: 11px;
	border-radius: 8px;
	color: ${colors.white};
	text-align: center;
	cursor: pointer;
	display: inline-block;
	margin-top: 15px;

	&:hover {
		background-color: ${colors.greenDark};
	}
`;

export const CallDuration = styled.div`
	margin-top: 5px;
`;

export const ModalNote = styled.div`
	background-color: ${colors.white};
	width: 300px;
	height: 200px;
	padding: 29px 10px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;
	border-radius: 10px;
`;

export const ModalNoteTextArea = styled.textarea`
	width: 100%;
	height: 100px;
	border: 1px solid ${colors.greyLight};
	resize: none;
	padding: 8px;
	font-family: inherit;
`;

export const ModalNoteClose = styled.div`
	width: 20px;
	height: 20px;
	background: url(${closeNoteIcon}) no-repeat 50% 50%;
	background-size: contain;
	cursor: pointer;
	position: absolute;
	top: 5px;
	right: 7px;
`;

