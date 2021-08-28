import React, { ReactElement, useState, useEffect, ChangeEvent } from 'react';
import { addSeconds, format } from 'date-fns'

import { ICall, INote } from '../../store/types';
import {
  CallDetailBox,
  CallDetailClose,
  CallDetailHeader,
  CallDirection,
  CallAddressSign,
  CallAddressNumber,
  CallNotes,
  CallNotesTitle,
  CallNote,
  CallDetailBtn,
  CallDuration,
  CallNotesScrollBox,
  ModalNote,
  ModalNoteTextArea,
} from './styles';

interface IProps {
  callDetail: ICall;
  open: boolean;
  onCloseDetail(): void;
  onSendNote(callId: string, note: string): void;
}

const CallDetail = (props: IProps): ReactElement => {
  const { callDetail, onCloseDetail, open, onSendNote } = props;
  const [durationTime, setDurationTime] = useState('');
  const [modalIsVisible, setModalVisibility] = useState(false);
  const [note, setNote] = useState('');

  useEffect(() => {
    const helperDate = addSeconds(new Date(0), callDetail.duration);
    setDurationTime(format(helperDate, 'hh:mm'));
  }, [callDetail.duration]);

  const onOpenModalNote = (): void => {
    setModalVisibility(true);
  };

  const onClickSend = (callId: string): void => {
    setModalVisibility(false);
    onSendNote(callId, note);
  };

  const onTyping = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setNote(event.target.value);
  };

  return (
    <CallDetailBox open={open}>
      <CallDetailClose onClick={onCloseDetail} />
      <CallDetailHeader>
        <CallDirection>
          {callDetail.direction === 'inbound' ? 'Incoming call' : 'Outgoing call'}
          {' '}
          ({callDetail.callType})
          <CallDuration>{durationTime}</CallDuration>
        </CallDirection>
        <div>
          <CallAddressSign>From</CallAddressSign>
          <CallAddressNumber>{callDetail.from}</CallAddressNumber>
        </div>
        <div>
          <CallAddressSign>To</CallAddressSign>
          <CallAddressNumber>{callDetail.to}</CallAddressNumber>
        </div>
        <CallDetailBtn onClick={onOpenModalNote}>Leave a note</CallDetailBtn>
      </CallDetailHeader>
      {callDetail.notes.length > 0 && (
        <CallNotes>
          <CallNotesTitle>Notes</CallNotesTitle>
          <CallNotesScrollBox>
            {callDetail.notes.map((note: INote) => (
              <CallNote key={note.id}>{note.content}</CallNote>
            ))}
          </CallNotesScrollBox>
        </CallNotes>
      )}
      {modalIsVisible && (
        <ModalNote>
          <ModalNoteTextArea
            name="textarea"
            placeholder="Text your note here..."
            value={note}
            onChange={onTyping}
          />
          <CallDetailBtn onClick={(): void => onClickSend(callDetail.id)}>Send</CallDetailBtn>
        </ModalNote>
      )}
    </CallDetailBox>
  );
}

export default CallDetail;
