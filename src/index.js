import React from "react";
import ReactDOM from "react-dom";
import App from "./Components";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Store/Reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./Store";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
