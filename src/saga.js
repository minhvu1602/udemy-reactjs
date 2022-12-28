import { all } from "redux-saga/effects";
import { postsSaga } from "./sagas/listDataSaga";
import { getOrderSaga } from "./sagas/listOrderSaga";
import { postOrderSaga } from "./sagas/postOrder";
import { removeOrderSaga } from "./sagas/removeOrderSaga";
import { updateOrderSaga } from "./sagas/updateOrderSaga";

export default function* rootSaga() {
  yield all([
    postsSaga(),
    postOrderSaga(),
    getOrderSaga(),
    removeOrderSaga(),
    updateOrderSaga(),
  ]);
}
