import { combineReducers } from 'redux';
import callsReducer from '../store/reducer';

const reducers = {
  calls: callsReducer,
};
const rootReducer = combineReducers(reducers);
export type TRootStoreState = ReturnType<typeof rootReducer>

export default rootReducer;
