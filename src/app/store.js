import { combineReducers } from 'redux';
import movieReducer from '../store/reducer';

const reducers = {
  movies: movieReducer,
};

const rootReducer = combineReducers(reducers);
export default rootReducer;
