import {
  GET_CALLS,
  SAVE_TOKEN,
  PICK_CALL,
  CLEAR_CALL,
  SET_IS_ARCHIVED,
} from './const';
import { ICall, IState } from './types';

const initState = {
  callsList: [],
  callDetail: {
    id: '',
    direction: '',
    from: '',
    to: '',
    duration: 0,
    isArchived: false,
    callType: '',
    via: '',
    createdAt: '',
    notes: [{
      id: '',
      content: '',
    }]
  },
  token: '',
};

const callsReducer = (state: IState = initState, action: any) => {
  switch (action.type) {
    case GET_CALLS: {
      return {
        ...state,
        callsList: action.callsList,
      };
    }
    case SAVE_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
    case PICK_CALL: {
      return {
        ...state,
        callDetail: action.call,
      };
    }
    case CLEAR_CALL: {
      return {
        ...state,
        callDetail: initState.callDetail,
      };
    }
    case SET_IS_ARCHIVED: {
      const callsListCopy = [...state.callsList];
      const call = callsListCopy.find((callItem: ICall) => callItem.id === action.id);
      if (call) call.isArchived = action.isArchived;

      return {
        ...state,
        callsList: callsListCopy,
      };
    }

    default:
      return state;
  }
};

export default callsReducer;
