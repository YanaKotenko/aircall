import React, { ReactElement, useState, useEffect, ChangeEvent } from 'react';
import { addSeconds, format } from 'date-fns'

import Archivation from '../Archivation';
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
  ModalNoteClose,
} from './styles';

interface IProps {
  callDetail: ICall;
  open: boolean;
  onCloseDetail(): void;
  onUnarchive(callId: string): void;
  onArchive(callId: string): void;
  onSendNote(callId: string, note: string): void;
}

const CallDetail = (props: IProps): ReactElement => {
  const { callDetail, onCloseDetail, open, onSendNote, onUnarchive, onArchive } = props;
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

  const onCloseModalNote = (): void => {
    setModalVisibility(false);
    setNote('');
  };

  const onClickSend = (callId: string): void => {
    setModalVisibility(false);
    onSendNote(callId, note);
    setNote('');
  };

  const onTyping = (event: ChangeEvent<HTMLTextAreaElement>): void => {
    setNote(event.target.value);
  };

  const onUnarchiveCall = (): void => {
    onUnarchive(callDetail.id);
  };

  const onArchiveCall = (): void => {
    onArchive(callDetail.id);
  };

  return (
    <CallDetailBox open={open}>
      <Archivation
        isArchived={callDetail.isArchived}
        onUnarchive={onUnarchiveCall}
        onArchive={onArchiveCall}
      />
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
          <ModalNoteClose onClick={onCloseModalNote} />
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
