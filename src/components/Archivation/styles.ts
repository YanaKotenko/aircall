import styled from 'styled-components/macro';
import { colors } from '../../styles/colors';

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