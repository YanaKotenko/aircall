import React from 'react';

import { ICall } from '../../store/types';
import {
  CallDetailBox,
} from './styles';

interface IProps {
  callDetail: ICall
}

const CallDetail = (props: IProps) => {
  const { callDetail } = props;

  // const onDeleteMovie = (id) => {
  //   dispatch(deleteMovie(id));
  // }

  console.log(callDetail);

  return (
    <CallDetailBox>
      asd
    </CallDetailBox>
  );
}

export default CallDetail;
