import React, { ReactElement } from 'react';
import { format } from 'date-fns';

import Archivation from '../Archivation';
import { ICall } from '../../store/types';

import {
  CallBox,
  CallArrow,
  CallDirection,
  CallType,
  CallDate,
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

  return (
    <CallBox>
      <CallWrap onClick={onClickCall}>
        <div>
          <CallDirection>
            <CallArrow type={call.direction} />
            {call.callType !== 'answered' && <CallType type={call.callType} />}
          </CallDirection>
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
      <Archivation
        isArchived={call.isArchived}
        onUnarchive={onUnarchive}
        onArchive={onArchive}
      />
    </CallBox>
  );
}

export default Call;
