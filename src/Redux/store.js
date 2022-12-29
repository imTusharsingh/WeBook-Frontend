import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./rootReducer"
import rootSaga from "./rootSaga"
import { composeWithDevTools } from "redux-devtools-extension"

import { persistStore } from 'redux-persist'


const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
const persistor = persistStore(store)
sagaMiddleware.run(rootSaga)



export default store;
export { persistor }