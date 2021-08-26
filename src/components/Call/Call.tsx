import React from 'react';
import { useDispatch } from 'react-redux';

// import { deleteMovie } from '../../store/actions';

import { ICall } from '../../store/types';
import { CallBox } from './styles';

interface IProps {
  call: ICall
}

const Call = (props: IProps) => {
  const dispatch = useDispatch();
  const { call } = props;

  // const onDeleteMovie = (id) => {
  //   dispatch(deleteMovie(id));
  // }

  return (
    <CallBox>{call.id}</CallBox>
  );
}

export default Call;
