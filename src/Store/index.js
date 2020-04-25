import { takeEvery, put, call } from "redux-saga/effects";
import { getImages } from "../api";
import allActions from "./Actions";

function* workerSaga() {
  try {
    const { data: images } = yield call(getImages);
    yield put(allActions.imagesActions.successFetchImages(images));
  } catch (e) {
    yield put(allActions.imagesActions.failFetchImages(e));
  }
}

function* rootSaga() {
  yield takeEvery("FETCH_IMAGES", workerSaga);
}

export default rootSaga;
