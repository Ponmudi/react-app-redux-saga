import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Reducer from './redux/Reducer';
import {watchAgeUp} from './sagas/saga';
import createSagaMiddleWare from 'redux-saga';

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(Reducer, applyMiddleware(sagaMiddleWare));
sagaMiddleWare.run(watchAgeUp)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

