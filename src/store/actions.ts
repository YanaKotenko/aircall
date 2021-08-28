import apiFetcher from '../utils/apiFetcher';
import { loginUrl, callsUrl, archiveUrl, unarchiveUrl, noteUrl } from '../api/config';
import {
  GET_CALLS,
  SAVE_TOKEN,
  PICK_CALL,
  CLEAR_CALL,
  SET_IS_ARCHIVED,
} from './const';
import { ICall, INote } from './types';

export const getToken = () => (dispatch: any) => {
  const body = {
    username: 'usernameYana',
    password: 'passwordKotenko',
  };
  apiFetcher.post(loginUrl, body).then((res) => {
    dispatch({ type: SAVE_TOKEN, token: res?.data.access_token });
  });
};

export const getCalls = (token: string, offset: string) => (dispatch: any) => {
  const filter = `?offset=${offset}&limit=10`;
  apiFetcher.get(`${callsUrl}${filter}`, token).then((res) => {
    const callsList: Array<ICall> = res?.data.nodes.map((call: any): ICall => ({
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
    dispatch({
      type: GET_CALLS,
      callsList,
      hasNextPage: res?.data.hasNextPage,
    });
  });
};

export const archiveCall = (token: string, callId: string) => (dispatch: any) => {
  apiFetcher.put(archiveUrl.replace(':id', callId), token).then((res) => {
    dispatch({
      type: SET_IS_ARCHIVED,
      id: res?.data.id,
      isArchived: res?.data.is_archived,
    });
  });
};

export const unarchiveCall = (token: string, callId: string) => (dispatch: any) => {
  apiFetcher.put(unarchiveUrl.replace(':id', callId), token).then((res) => {
    dispatch({
      type: SET_IS_ARCHIVED,
      id: res?.data.id,
      isArchived: res?.data.is_archived,
    });
  });
};

export const sendNote = (token: string, callId: string, note: string) => (dispatch: any) => {
  const body = {
    content: note,
  };
  apiFetcher.post(noteUrl.replace(':id', callId), body, token).then((res) => {
    console.log('note added', res);
  });
};

export const pickCall = (call: ICall) => (dispatch: any) => {
  dispatch({ type: PICK_CALL, call });
};

export const clearCall = () => (dispatch: any) => {
  dispatch({ type: CLEAR_CALL });
};