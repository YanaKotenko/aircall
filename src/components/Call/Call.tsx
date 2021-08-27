import React from 'react';
import { format } from 'date-fns';

import { ICall } from '../../store/types';

import {
  CallBox,
  CallArrow,
  CallCol,
  CallDate,
  CallPhone,
  CallFrom,
  CallTo,
  CallInfo,
} from './styles';

interface IProps {
  call: ICall;
  onClickCall(): void;
}

const Call = (props: IProps) => {
  const { call, onClickCall } = props;

  return (
    <CallBox onClick={onClickCall}>
      <CallCol>
        <CallArrow type={call.direction} />
        <CallInfo>
          <CallFrom>{call.from}</CallFrom>
          <CallTo>
            {call.direction === 'inbound' ? 'answered by' : 'made by'}
            {' '}
            {call.to}
          </CallTo>
        </CallInfo>
      </CallCol>
      <CallCol>
        <CallDate>{format(new Date(call.createdAt), 'dd/MM/yyyy')}</CallDate>
        <CallPhone />
      </CallCol>
    </CallBox>
  );
}

export default Call;
