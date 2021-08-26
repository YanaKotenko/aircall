import {
  GET_CALLS,
} from './const';

const initState = {
  callsList: [],
  callDetail: {
    id: 2,
    direction: 'outbound',
    from: '+551234234',
    to: '+7669342432',
    duration: 786867,
    isArchived: true,
    callType: 'voicemail',
    via: '+00066699888',
    createdAt: 'date 2',
    notes: [{
      id: 2223333,
      content: 'Hhhhhh fw jhg fhgfwfg',
    }]
  }
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
