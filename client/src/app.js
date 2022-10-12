import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routers/AppRouter';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import reducers from './reducers';
import "normalize.css/normalize.css";
import "./styles/styles.scss";


const store = createStore(reducers, compose(applyMiddleware(thunk)))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
