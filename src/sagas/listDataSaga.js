import { call, put, takeEvery } from "redux-saga/effects";
import { getListPostSuccess } from "../redux/action/productAction";
import axios from "axios";

function* getListPostSaga() {
  try {
    const data = yield call(
      axios,
      "http://606989d5e1c2a10017544a2f.mockapi.io/api/products"
    );
    yield put(getListPostSuccess(data));
  } catch (error) {
    //handle error
  }
}

export function* postsSaga() {
  yield takeEvery("GET_LIST_POST", getListPostSaga);
}
