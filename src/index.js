import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import App from "./samples/App/App";
import { Provider } from 'react-redux'
import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import * as reducers from "./redux";
import thunk from "redux-thunk";

const appReducer = combineReducers({
  ...reducers
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById("root"));

module.hot.accept();
