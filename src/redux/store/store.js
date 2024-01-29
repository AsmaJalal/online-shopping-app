import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reducer from "../reducers";
import { watcherSaga } from "../sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
	reducer,
	middleware
});

sagaMiddleware.run(watcherSaga);
export default store;
