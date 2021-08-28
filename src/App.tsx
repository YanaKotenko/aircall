import React, { useEffect, useState, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pusher from 'pusher-js';
import { TRootStoreState } from './app/store';

import { pusherUrl } from './api/config';
import { ICall } from './store/types';

import {
  getCalls,
  getToken,
  pickCall,
  clearCall,
  unarchiveCall,
  archiveCall,
  sendNote,
} from './store/actions';

import Call from './components/Call';
import CallDetail from './components/CallDetail';

import { GlobalStyle, Body, Wrapper, Content, CallList } from './styles/global';

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const { callsList, callDetail, token } = useSelector((store: TRootStoreState) => store.calls);
  const [callDetailIsVisibile, setCallDetailVisibility] = useState(false);

  useEffect(() => {
    dispatch(getToken());
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(getCalls(token));


      const pusher = new Pusher('d44e3d910d38a928e0be', {
        cluster: 'eu',
        authEndpoint: pusherUrl,
      });
      const channel = pusher.subscribe('private-aircall');
      console.log(channel);
      channel.bind('update-call', (data: any) => {
        console.log(data);
        return data;
        // add new price into the APPL widget
      });
    }
  }, [token]);

  const onPickCall = (call: ICall): void => {
    dispatch(pickCall(call));
    setCallDetailVisibility(true);
  };

  const onCloseDetail = (): void => {
    dispatch(clearCall());
    setCallDetailVisibility(false);
  };

  const onArchive = (callId: string): void => {
    dispatch(archiveCall(token, callId));
  };

  const onUnarchive = (callId: string): void => {
    dispatch(unarchiveCall(token, callId));
  };

  const onSendNote = (callId: string, note: string): void => {
    dispatch(sendNote(token, callId, note));
  };

  return (
    <Body>
      <GlobalStyle />
      <Wrapper>
        <Content>
          <CallList>
            {callsList.map((call: ICall) => (
              <Call
                key={call.id}
                call={call}
                onClickCall={(): void => onPickCall(call)}
                onArchive={(): void => onArchive(call.id)}
                onUnarchive={(): void => onUnarchive(call.id)}
              />
            ))}
          </CallList>
          <CallDetail
            open={callDetailIsVisibile}
            callDetail={callDetail}
            onCloseDetail={onCloseDetail}
            onSendNote={onSendNote}
          />
        </Content>
      </Wrapper>
    </Body>
  );
}

export default App;
