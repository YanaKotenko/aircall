import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import axios from 'axios';
import { TRootStoreState } from './app/store';

import { ICall } from './store/types';

import {
  getCalls,
  getToken,
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
    // axios.get(`https://jsonplaceholder.typicode.com/users`)
    // axios.get(`https://frontend-test-api.aircall.io`)
    //   .then((res) => {
    //     console.log(res);
    //   })

    // const body = {
    //   username: 'Yana',
    //   password: 'Yana',
    // }
    // axios.post(`https://frontend-test-api.aircall.io/auth/login`, body)
    //   .then((res) => {
    //     console.log(res);
    //   })
    getToken();
  }, []);

  return (
    <Wrapper>
      <Content>
        {callsList.map((call: ICall) => (
          <Call key={call.id} call={call} />
        ))}
        <CallDetail callDetail={callDetail} />
      </Content>
    </Wrapper>
  );
}

export default App;
