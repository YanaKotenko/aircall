import React from 'react';
import secondsToMinutes from 'date-fns/secondsToMinutes'
import minutesToHours from 'date-fns/minutesToHours'

import { ICall } from '../../store/types';
import {
  CallDetailBox,
  CallDetailClose,
  CallDetailHeader,
  CallDirection,
  CallAddress,
  CallAddressSign,
  CallAddressNumber,
  CallDuration,
} from './styles';

interface IProps {
  callDetail: ICall;
  open: boolean;
  onClickClose(): void;
}

const CallDetail = (props: IProps) => {
  const { callDetail, onClickClose, open } = props;

  const getDuration = (duration: number): string => {
    const minutes = secondsToMinutes(duration);
    const hours = minutesToHours(minutes);

    if (duration > 60 && duration < 3600) return `${minutes} min`;
    if (duration > 3600) return `${hours} h`;
    return `${duration} sec`;
  }

  return (
    <CallDetailBox open={open}>
      <CallDetailClose onClick={onClickClose} />
      <CallDetailHeader>
        <CallDirection>{callDetail.direction === 'inbound' ? 'Incoming call' : 'Outgoing call'}</CallDirection>
        <CallAddress>
          <CallAddressSign>From</CallAddressSign>
          <CallAddressNumber>{callDetail.from}</CallAddressNumber>
        </CallAddress>
        <CallAddress>
          <CallAddressSign>To</CallAddressSign>
          <CallAddressNumber>{callDetail.to}</CallAddressNumber>
        </CallAddress>
        <CallDuration>{getDuration(callDetail.duration)}</CallDuration>
      </CallDetailHeader>
    </CallDetailBox>
  );
}

export default CallDetail;
