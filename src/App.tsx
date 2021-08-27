import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TRootStoreState } from './app/store';

import { ICall } from './store/types';

import {
  getCalls,
  getToken,
  pickCall,
  clearCall,
} from './store/actions';

import Call from './components/Call';
import CallDetail from './components/CallDetail';

import { Body, Wrapper, Content, CallList } from './styles/global';

const App = () => {
  const dispatch = useDispatch();
  const { callsList, callDetail, token } = useSelector((store: TRootStoreState) => store.calls);
  const [CallDetailIsVisibile, setCallDetailVisibility] = useState(false);

  useEffect(() => {
    dispatch(getToken());
  }, []);

  useEffect(() => {
    if (token) dispatch(getCalls(token));
  }, [token]);

  const onPickCall = (call: ICall) => {
    dispatch(pickCall(call));
    setCallDetailVisibility(true);
  };

  const onCloseDetail = () => {
    dispatch(clearCall());
    setCallDetailVisibility(false);
  };

  return (
    <Body>
      <Wrapper>
        <Content>
          <CallList>
            {callsList.map((call: ICall) => (
              <Call
                key={call.id}
                call={call}
                onClickCall={(): void => onPickCall(call)}
              />
            ))}
          </CallList>
          {CallDetailIsVisibile && (
            <CallDetail
              callDetail={callDetail}
              onClickClose={onCloseDetail}
            />
          )}
        </Content>
      </Wrapper>
    </Body>
  );
}

export default App;
