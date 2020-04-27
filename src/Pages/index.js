import React from "react";
import ReactDOM from "react-dom";
import rootReducer from "./redux/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { Provider, useDispatch } from "react-redux";
import thunk from "redux-thunk";
import App from "./App";
export default {
  Signup,
  Login,
  Home,
};

const store = createStore(rootReducer, applyMiddleware(thunk));
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
