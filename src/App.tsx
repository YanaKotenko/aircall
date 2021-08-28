import React, { useEffect, useState, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TRootStoreState } from './app/store';

import { ICall } from './store/types';

import {
  getCalls,
  getToken,
  pickCall,
  clearCall,
  unarchiveCall,
  archiveCall,
} from './store/actions';

import Call from './components/Call';
import CallDetail from './components/CallDetail';

import { GlobalStyle, Body, Wrapper, Content, CallList } from './styles/global';

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const { callsList, callDetail, token } = useSelector((store: TRootStoreState) => store.calls);
  const [CallDetailIsVisibile, setCallDetailVisibility] = useState(false);

  useEffect(() => {
    dispatch(getToken());
  }, []);

  useEffect(() => {
    if (token) dispatch(getCalls(token));
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
            open={CallDetailIsVisibile}
            callDetail={callDetail}
            onClickClose={onCloseDetail}
          />
        </Content>
      </Wrapper>
    </Body>
  );
}

export default App;
