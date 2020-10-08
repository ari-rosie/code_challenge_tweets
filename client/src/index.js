import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { watchClearContent } from "./sagas/saga";

import { Provider } from "react-redux";

import configureStore from "./store";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore(sagaMiddleware);

sagaMiddleware.run(watchClearContent);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
