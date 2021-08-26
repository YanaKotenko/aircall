import {
  GET_CALLS,
} from './const';

const initState = {
  callsList: [],
};

const callsReducer = (state = initState, action: any) => {
  switch (action.type) {
    case GET_CALLS:
      return {
        ...state,
        callsList: action.callsList,
      };

    default:
      return state;
  }
};

export default callsReducer;
