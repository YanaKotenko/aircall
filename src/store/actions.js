import { movies$ } from '../api/config';
import {
  GET_MOVIES,
  DELETE_MOVIE,
  SET_FILTERS_CATEGORIES,
  TOGGLE_CATEGORY_STATE,
  EVOLUATE_MOVIE,
  FILTER_MOVIES,
  SET_AMOUNT_SELECTED,
} from './const';

export const getMovies = () => (dispatch) => {
  movies$.then((res) => {
    dispatch({ type: GET_MOVIES, moviesList: res });
  });
};

export const getCategories = (moviesList) => (dispatch) => {
  const categories = moviesList.map((movie) => ({
    id: movie.id,
    title: movie.category,
    checked: false,
  }));
  const titles = categories.map((cat) => cat.title);
  const filteredCategories = categories.filter(({title}, index) => !titles.includes(title, index + 1));

  dispatch({ type: SET_FILTERS_CATEGORIES, categories: filteredCategories });
};

export const setCategories = (filteredCategories) => (dispatch) => {
  dispatch({ type: SET_FILTERS_CATEGORIES, categories: filteredCategories });
};

export const deleteMovie = (id) => (dispatch) => {
  dispatch({ type: DELETE_MOVIE, id });
};

export const toggleCategoryState = (id) => (dispatch) => {
  dispatch({ type: TOGGLE_CATEGORY_STATE, id });
};

export const evoluateMovie = (id, action) => (dispatch) => {
  dispatch({ type: EVOLUATE_MOVIE, id, action });
};

export const filterMovies = (checkedCategories) => (dispatch) => {
  dispatch({ type: FILTER_MOVIES, checkedCategories });
};

export const setAmountSelected = (amount) => (dispatch) => {
  dispatch({ type: SET_AMOUNT_SELECTED, amount });
};