import axios from 'axios';
import { movies$ } from '../api/config';
import {
  GET_CALLS,
} from './const';

export const getCalls = () => (dispatch: any) => {
  movies$.then((res) => {
    dispatch({ type: GET_CALLS, callsList: res });
  });

  // getAccessToken.then((res) => {
  //   console.log(res);
  // })
};

export const getToken = () => {
  // const config = {
  //   headers: { Authorization: `Bearer ${window.token}` }
  // };
  const body = {
    username: 'Yana2',
    password: 'Yana2',
  }
  axios.post(`https://frontend-test-api.aircall.io/auth/login`, body)
    .then((res) => {
      console.log(res);
      // window.token = res.data.access_token;
      // axios.post(`https://frontend-test-api.aircall.io/auth/refresh-token`)
      //   .then((res) => {
      //     console.log('refresh', res);
      //   })
      // const headers = {
      //   'Content-Type': 'application/json',
      //   Authorization: `Bearer ${res.data.access_token}`,
      // };
      axios.get(`https://frontend-test-api.aircall.io/calls`, {
        headers: {
          'Authorization': `Bearer ${res.data.access_token}`
        }
      })
        .then((res) => {
          console.log('calls', res);
          
        })
    })
}

// export const setCategories = (filteredCategories) => (dispatch) => {
//   dispatch({ type: SET_FILTERS_CATEGORIES, categories: filteredCategories });
// };