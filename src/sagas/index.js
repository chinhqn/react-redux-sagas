import { all, takeEvery, put, call, take } from 'redux-saga/effects';

import imagesSaga from './imagesSaga';
// import statsSaga from './statsSaga';

// export default function* rootSaga() {
//     yield all(imagesSaga());
// }

export default imagesSaga;