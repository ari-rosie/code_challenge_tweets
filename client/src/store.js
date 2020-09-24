import { createStore, applyMiddleware } from "redux";

import reducer from "./reducers";

export default function configureStore(sagaMiddleware) {
  const store = createStore(reducer, applyMiddleware(sagaMiddleware));

  return store;
}
