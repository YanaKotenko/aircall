import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TRootStoreState } from './app/store';

import { ICall } from './store/types';

import {
  getCalls,
} from './store/actions';

import Call from './components/Call';
import CallDetail from './components/CallDetail';

import { Wrapper, Content } from './styles/global';

const App = () => {
  const dispatch = useDispatch();
  // const { callsList, callDetail } = useSelector((store: TRootStoreState) => store.calls);
  const { callsList, callDetail } = useSelector((store: TRootStoreState) => store.calls);

  useEffect(() => {
    dispatch(getCalls());
  }, []);

  return (
    <Wrapper>
      <Content>
        {callsList.map((call: ICall) => (
          <Call key={call.id} call={call} />
        ))}
        {/* <CallDetail callDetail={callDetail} /> */}
      </Content>
    </Wrapper>
  );
}

export default App;
