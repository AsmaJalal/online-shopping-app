import { call, put, takeLatest } from "redux-saga/effects";
import { GET_CATEGORIES, setCategories } from "../actions";
import { fetchCategories } from "../../api/handler";

function* handleGetCategories() {
	try {
		const response = yield call(fetchCategories);
		yield put(setCategories(response.data.slice(0, 7)));
	} catch (err) {
		console.log(err);
	}
}

export function* categoriesSaga() {
	yield takeLatest(GET_CATEGORIES, handleGetCategories);
}
