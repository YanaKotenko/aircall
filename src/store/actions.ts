import axios from 'axios';
import { loginUrl, callsUrl } from '../api/config';
import {
  GET_CALLS,
  SAVE_TOKEN,
  PICK_CALL,
  CLEAR_CALL,
} from './const';
import { ICall, INote } from './types';

export const getToken = () => (dispatch: any) => {
  const body = {
    username: 'usernameYana',
    password: 'passwordKotenko',
  };
  axios.post(loginUrl, body).then((res) => {
    dispatch({ type: SAVE_TOKEN, token: res.data.access_token });
  });
};

export const getCalls = (token: string) => (dispatch: any) => {
  const headers = {
    headers: {
      'Authorization': `Bearer ${token}`,
    }
  };
  axios.get(callsUrl, headers).then((res) => {
    const callsList: Array<ICall> = res.data.nodes.map((call: any): ICall => ({
      id: call.id,
      direction: call.direction,
      from: call.from,
      to: call.to,
      duration: call.duration,
      isArchived: call.is_archived,
      callType: call.call_type,
      via: call.via,
      createdAt: call.created_at,
      notes: call.notes.map((note: any): INote => ({
        id: note.id,
        content: note.content,
      })),
    }));
    dispatch({ type: GET_CALLS, callsList });
  })
};

export const pickCall = (call: ICall) => (dispatch: any) => {
  dispatch({ type: PICK_CALL, call });
};

export const clearCall = () => (dispatch: any) => {
  dispatch({ type: CLEAR_CALL });
};