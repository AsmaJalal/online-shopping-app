import { all } from "redux-saga/effects";
import { productsSaga } from "./products";
import { categoriesSaga } from "./categories";

export function* watcherSaga() {
	yield all([productsSaga(), categoriesSaga()]);
}
