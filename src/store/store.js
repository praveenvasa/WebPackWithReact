import "regenerator-runtime/runtime";
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';
import createSagaMiddleware from 'redux-saga'
import sagaRoot from '../saga/flowsaga';

const sagaMiddleware = createSagaMiddleware();
const configureStore = createStore(rootReducer,applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(sagaRoot)

export default configureStore;