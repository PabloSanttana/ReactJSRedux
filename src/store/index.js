import  { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './modules/rootReducer'
import rootSagas from './modules/rootSaga'

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware)

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSagas)

export default store