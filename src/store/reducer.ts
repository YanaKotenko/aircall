import {
  GET_CALLS,
  SAVE_TOKEN,
  PICK_CALL,
  CLEAR_CALL,
  FILTER_CALLS,
  TOGGLE_FILTER_STATE,
  UPDATE_CALL,
} from './const';
import { ICall, IFilterProp, INote, IState } from './types';

const initState = {
  callsList: [],
  filteredCalls: [],
  filterProps: [{
    id: 111,
    title: 'Archived',
    value: 'isArchived',
    isChecked: false,
  }, {
    id: 222,
    title: 'Missed',
    value: 'isMissed',
    isChecked: false,
  }, {
    id: 333,
    title: 'Outbound',
    value: 'isOutbound',
    isChecked: false,
  }],
  callDetail: {
    id: '',
    direction: '',
    from: '',
    to: '',
    duration: 0,
    isArchived: false,
    isMissed: false,
    isOutbound: false,
    callType: '',
    via: '',
    createdAt: '',
    notes: [],
  },
  token: '',
  hasNextPage: false,
};

const callsReducer = (state: IState = initState, action: any) => {
  switch (action.type) {
    case GET_CALLS: {
      return {
        ...state,
        callsList: action.callsList,
        hasNextPage: action.hasNextPage,
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
    case TOGGLE_FILTER_STATE: {
			const copyStateFilter = [...state.filterProps];
			const selectedFilters = copyStateFilter.find((filter: IFilterProp) => filter.id === action.id);
      if (selectedFilters) selectedFilters.isChecked = action.isChecked;
        
      return {
        ...state,
        filterProps: copyStateFilter,
      };
    }

    case FILTER_CALLS: {
      let filteredCalls: Array<ICall> = [];
      const copyStateCallsList = [...state.callsList];
      const checkedFilterProps = state.filterProps
        .filter((prop: IFilterProp) => prop.isChecked)
        .map((prop: IFilterProp) => prop.value);

      const anyFilterIsChecked = state.filterProps.some((prop: IFilterProp) => prop.isChecked);
      if (anyFilterIsChecked) {
        checkedFilterProps.forEach((prop: string) => {
          filteredCalls = copyStateCallsList.filter((call: any) => call[prop]);
        })
      } else {
        filteredCalls = [];
      }
        
      return {
        ...state,
        filteredCalls: filteredCalls,
      };
    }

    case UPDATE_CALL: {
      let copyStateCallDetail = { ...state.callDetail };
      const copyStateCallsList = [ ...state.callsList ];
      const call = copyStateCallsList.find((callItem: ICall) => callItem.id === action.call.id);
      if (call) {
        call.id = action.call.id;
        call.direction = action.call.direction;
        call.from = action.call.from;
        call.to = action.call.to;
        call.duration = action.call.duration;
        call.isArchived = action.call.isArchived;
        call.isMissed = action.call.callType === 'missed';
        call.isOutbound = action.call.direction === 'outbound';
        call.callType = action.call.callType;
        call.via = action.call.via;
        call.createdAt = action.call.createdAt;
        call.notes = action.call.notes;
      };
      if (copyStateCallDetail.id.length > 0) {
        copyStateCallDetail = action.call;
      }
        
      return {
        ...state,
        callsList: copyStateCallsList,
        callDetail: copyStateCallDetail,
      };
    }

    default:
      return state;
  }
};

export default callsReducer;
