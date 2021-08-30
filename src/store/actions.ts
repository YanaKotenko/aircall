import apiFetcher from '../utils/apiFetcher';
import {
  loginUrl,
  callsUrl,
  archiveUrl,
  unarchiveUrl,
  noteUrl,
  refreshTokenUrl,
} from '../api/config';
import {
  GET_CALLS,
  SAVE_TOKEN,
  PICK_CALL,
  CLEAR_CALL,
  FILTER_CALLS,
  TOGGLE_FILTER_STATE,
  UPDATE_CALL,
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

export const getRefreshToken = (token: string) => (dispatch: any) => {
  apiFetcher.post(refreshTokenUrl, {}, token).then((res) => {
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
      isMissed: call.call_type === 'missed',
      isOutbound: call.direction === 'outbound',
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

export const archiveCall = (token: string, callId: string) => () => {
  apiFetcher.put(archiveUrl.replace(':id', callId), token);
};

export const unarchiveCall = (token: string, callId: string) => () => {
  apiFetcher.put(unarchiveUrl.replace(':id', callId), token);
};

export const sendNote = (token: string, callId: string, note: string) => () => {
  apiFetcher.post(noteUrl.replace(':id', callId), { content: note }, token);
};

export const pickCall = (call: ICall) => (dispatch: any) => {
  dispatch({ type: PICK_CALL, call });
};

export const clearCall = () => (dispatch: any) => {
  dispatch({ type: CLEAR_CALL });
};

export const filterCalls = () => (dispatch: any) => {
  dispatch({ type: FILTER_CALLS });
};

export const toggleFilterState = (id: number, isChecked: boolean) => (dispatch: any) => {
  dispatch({ type: TOGGLE_FILTER_STATE, id, isChecked });
};

export const updateCall = (callItem: any) => (dispatch: any) => {
  const call: ICall = {
    id: callItem.id,
    direction: callItem.direction,
    from: callItem.from,
    to: callItem.to,
    duration: callItem.duration,
    isArchived: callItem.is_archived,
    isMissed: callItem.call_type === 'missed',
    isOutbound: callItem.direction === 'outbound',
    callType: callItem.call_type,
    via: callItem.via,
    createdAt: callItem.created_at,
    notes: callItem.notes.map((note: any): INote => ({
      id: note.id,
      content: note.content,
    })),
  };
  dispatch({ type: UPDATE_CALL, call });
};