import React from 'react';
import { useDispatch } from 'react-redux';

// import { deleteMovie } from '../../store/actions';

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
  call: ICall
}

const Call = (props: IProps) => {
  const dispatch = useDispatch();
  const { call } = props;

  // const onDeleteMovie = (id) => {
  //   dispatch(deleteMovie(id));
  // }

  console.log(call);

  return (
    <CallBox>
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
        <CallDate>{call.createdAt}</CallDate>
        <CallPhone />
      </CallCol>
    </CallBox>
  );
}

export default Call;
