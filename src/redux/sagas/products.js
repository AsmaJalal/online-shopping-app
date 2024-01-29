import { put, takeLatest, call, delay } from "redux-saga/effects";
import { GET_PRODUCTS, setLoading, setProducts } from "../actions";
import { fetchProducts } from "../../api/handler";

function* handleGetProducts(arg) {
	yield put(setLoading(true));
	try {
		const response = yield call(fetchProducts, arg.param);
		yield put(setProducts(response.data.products));
	} catch (err) {
		console.log(err);
	}
	yield delay(800);
	yield put(setLoading(false));
}

export function* productsSaga() {
	yield takeLatest(GET_PRODUCTS, handleGetProducts);
}
