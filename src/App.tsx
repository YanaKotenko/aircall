import React, { useEffect, useState, ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pusher from 'pusher-js';
import { TRootStoreState } from './app/store';

import { pusherUrl } from './api/config';
import { ICall, IFilterProp } from './store/types';

import {
  getCalls,
  getToken,
  pickCall,
  clearCall,
  unarchiveCall,
  archiveCall,
  sendNote,
  filterCalls,
  toggleFilterState,
} from './store/actions';

import Call from './components/Call';
import CallDetail from './components/CallDetail';

import {
  GlobalStyle,
  Body,
  Wrapper,
  Content,
  CallPagination,
  CallPaginationPrev,
  CallPaginationNext,
  Checkboxes,
  Checkbox,
  CheckboxWrap,
} from './styles/global';

const App = (): ReactElement => {
  const dispatch = useDispatch();
  const {
    callsList, callDetail, token, hasNextPage, filteredCalls, filterProps,
  } = useSelector((store: TRootStoreState) => store.calls);
  const [callDetailIsVisibile, setCallDetailVisibility] = useState(false);
  const [paginationOffset, setPaginationOffset] = useState(1);
  const calls = filteredCalls.length === 0 ? callsList : filteredCalls;

  useEffect(() => {
    dispatch(getToken());
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(getCalls(token, paginationOffset.toString()));


      // const pusher = new Pusher('d44e3d910d38a928e0be', {
      //   cluster: 'eu',
      //   authEndpoint: pusherUrl,
      // });
      // const channel = pusher.subscribe('private-aircall');
      // console.log(channel);
      // channel.bind('update-call', (data: any) => {
      //   console.log(data);
      //   return data;
      //   // add new price into the APPL widget
      // });
    }
  }, [token]);

  useEffect(() => {
    if (token) {
      dispatch(getCalls(token, paginationOffset.toString()));
    }
  }, [paginationOffset]);

  useEffect(() => {
    dispatch(filterCalls());
  }, [filterProps, callsList]);

  const onPickCall = (call: ICall): void => {
    dispatch(pickCall(call));
    setCallDetailVisibility(true);
  };

  const onCloseDetail = (): void => {
    dispatch(clearCall());
    setCallDetailVisibility(false);
  };

  const onArchive = (callId: string): void => {
    dispatch(archiveCall(token, callId));
  };

  const onUnarchive = (callId: string): void => {
    dispatch(unarchiveCall(token, callId));
  };

  const onSendNote = (callId: string, note: string): void => {
    dispatch(sendNote(token, callId, note));
  };

  const onClickPrev = (): void => {
    if (paginationOffset > 1) setPaginationOffset(paginationOffset - 1);
  };

  const onClickNext = (): void => {
    if (hasNextPage) setPaginationOffset(paginationOffset + 1);
  };

  const onToggleChecked = (id: number, isChecked: boolean): void => {
    dispatch(toggleFilterState(id, isChecked));
  };

  return (
    <Body>
      <GlobalStyle />
      {calls.length > 0 && (
        <Wrapper>
          <Content>
            <Checkboxes>
              {filterProps.map((prop: IFilterProp) => (
                <CheckboxWrap key={prop.id}>
                  <Checkbox
                    active={prop.isChecked}
                    onClick={() => onToggleChecked(prop.id, !prop.isChecked)}
                  >
                    {prop.title}
                  </Checkbox>
                </CheckboxWrap>
              ))}
            </Checkboxes>
            <div>
              {calls.map((call: ICall) => (
                <Call
                  key={call.id}
                  call={call}
                  onClickCall={(): void => onPickCall(call)}
                  onArchive={(): void => onArchive(call.id)}
                  onUnarchive={(): void => onUnarchive(call.id)}
                />
              ))}
            </div>
            <CallDetail
              open={callDetailIsVisibile}
              callDetail={callDetail}
              onCloseDetail={onCloseDetail}
              onSendNote={onSendNote}
              onArchive={onArchive}
              onUnarchive={onUnarchive}
            />
            <CallPagination>
              <CallPaginationPrev onClick={onClickPrev} disabled={paginationOffset === 1} />
              <CallPaginationNext onClick={onClickNext} disabled={!hasNextPage} />
            </CallPagination>
          </Content>
        </Wrapper>
      )}
    </Body>
  );
}

export default App;
