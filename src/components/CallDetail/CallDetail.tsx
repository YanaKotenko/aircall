import React from 'react';

import { ICall } from '../../store/types';
import {
  CallDetailBox,
  CallDetailClose,
} from './styles';

interface IProps {
  callDetail: ICall;
  onClickClose(): void;
}

const CallDetail = (props: IProps) => {
  const { callDetail, onClickClose } = props;

  return (
    <CallDetailBox>
      <CallDetailClose onClick={onClickClose} />
      asd
    </CallDetailBox>
  );
}

export default CallDetail;
