import React, { ReactElement } from 'react';
import { format } from 'date-fns';

import { ICall } from '../../store/types';

import {
  CallBox,
  CallArrow,
  CallDate,
  CallArchive,
  CallFrom,
  CallTo,
  CallInfo,
  CallWrap,
} from './styles';

interface IProps {
  call: ICall;
  onClickCall(): void;
  onUnarchive(): void;
  onArchive(): void;
}

const Call = (props: IProps): ReactElement => {
  const { call, onClickCall, onUnarchive, onArchive } = props;

  const ArchiveIcon = (): ReactElement => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor">
      <path d="M 8.5 5 C 7.1364058 5 6 6.1364058 6 7.5 L 6 14.5 C 6 15.692499 6.8698775 16.712342 8 16.949219 L 8 38.5 C 8 40.967501 10.032499 43 12.5 43 L 35.5 43 C 37.967501 43 40 40.967501 40 38.5 L 40 16.949219 C 41.130122 16.712342 42 15.692499 42 14.5 L 42 7.5 C 42 6.1364058 40.863594 5 39.5 5 L 8.5 5 z M 9 8 L 39 8 L 39 14 L 38.5 14 L 9.5 14 L 9 14 L 9 8 z M 11 17 L 37 17 L 37 38.5 C 37 39.346499 36.346499 40 35.5 40 L 12.5 40 C 11.653501 40 11 39.346499 11 38.5 L 11 17 z M 19.5 21 A 1.50015 1.50015 0 1 0 19.5 24 L 28.5 24 A 1.50015 1.50015 0 1 0 28.5 21 L 19.5 21 z"></path>
    </svg>
  );

  const ArchivedIcon = (): ReactElement => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor">
      <path d="M39.5 16h-31C7.121 16 6 14.878 6 13.5v-6C6 6.122 7.121 5 8.5 5h31C40.879 5 42 6.122 42 7.5v6C42 14.878 40.879 16 39.5 16zM39.5 8h.01H39.5zM8 18v20.5c0 2.485 2.015 4.5 4.5 4.5h23c2.485 0 4.5-2.015 4.5-4.5V18H8zM28.5 24h-9c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5h9c.828 0 1.5.671 1.5 1.5S29.328 24 28.5 24z"></path>
    </svg>
  );

  const handleArchive = (isArchived: boolean): void => {
    return isArchived ? onUnarchive() : onArchive();
  };

  return (
    <CallBox>
      <CallWrap onClick={onClickCall}>
        <div>
          <CallArrow type={call.direction} />
          <CallInfo>
            <CallFrom>{call.from}</CallFrom>
            <CallTo>
              {call.direction === 'inbound' ? 'answered by' : 'made by'}
              {' '}
              {call.to}
            </CallTo>
          </CallInfo>
        </div>
        <CallDate>{format(new Date(call.createdAt), 'dd/MM/yyyy')}</CallDate>
      </CallWrap>
      <CallArchive onClick={(): void => handleArchive(call.isArchived)}>
        {call.isArchived ? <ArchivedIcon /> : <ArchiveIcon />}
      </CallArchive>
    </CallBox>
  );
}

export default Call;
