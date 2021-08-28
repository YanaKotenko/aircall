import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import './index.css';
import App from './App';
import store from './app/createStore';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer hideProgressBar pauseOnHover autoClose={5000} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
