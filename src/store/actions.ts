import { movies$ } from '../api/config';
import {
  GET_CALLS,
} from './const';

export const getCalls = () => (dispatch: any) => {
  movies$.then((res) => {
    dispatch({ type: GET_CALLS, callsList: res });
  });
};

// export const setCategories = (filteredCategories) => (dispatch) => {
//   dispatch({ type: SET_FILTERS_CATEGORIES, categories: filteredCategories });
// };