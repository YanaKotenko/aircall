import React, { ReactElement, useState, useEffect} from 'react';
import { addSeconds, format } from 'date-fns'

import { ICall, INote } from '../../store/types';
import {
  CallDetailBox,
  CallDetailClose,
  CallDetailHeader,
  CallDirection,
  CallAddress,
  CallAddressSign,
  CallAddressNumber,
  CallNotes,
  CallNotesTitle,
  CallNotesList,
  CallNote,
  CallLeaveNote,
  CallDuration,
} from './styles';

interface IProps {
  callDetail: ICall;
  open: boolean;
  onClickClose(): void;
}

const CallDetail = (props: IProps): ReactElement => {
  const { callDetail, onClickClose, open } = props;
  const [durationTime, setDurationTime] = useState('');

  useEffect(() => {
    const helperDate = addSeconds(new Date(0), callDetail.duration);
    setDurationTime(format(helperDate, 'hh:mm'));
  }, [callDetail.duration]);

  return (
    <CallDetailBox open={open}>
      <CallDetailClose onClick={onClickClose} />
      <CallDetailHeader>
        <CallDirection>
          {callDetail.direction === 'inbound' ? 'Incoming call' : 'Outgoing call'}
          {' '}
          ({callDetail.callType})
          <CallDuration>{durationTime}</CallDuration>
        </CallDirection>
        <CallAddress>
          <CallAddressSign>From</CallAddressSign>
          <CallAddressNumber>{callDetail.from}</CallAddressNumber>
        </CallAddress>
        <CallAddress>
          <CallAddressSign>To</CallAddressSign>
          <CallAddressNumber>{callDetail.to}</CallAddressNumber>
        </CallAddress>
      </CallDetailHeader>
      {callDetail.notes.length > 0 && (
        <CallNotes>
          <CallNotesTitle>Notes</CallNotesTitle>
          <CallNotesList>
            {callDetail.notes.map((note: INote) => (
              <CallNote key={note.id}>{note.content}</CallNote>
            ))}
          </CallNotesList>
        </CallNotes>
      )}
      <CallLeaveNote>Leave a note</CallLeaveNote>
    </CallDetailBox>
  );
}

export default CallDetail;
