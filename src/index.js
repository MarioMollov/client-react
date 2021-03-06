import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import rootReducer from "./redux/reducers";
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";

import './scss/styles.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
