import {call, put, SagaReturnType, takeLatest} from '@redux-saga/core/effects';
import {AxiosResponse} from 'axios';
import { AxiosProps, requestApi } from '../../ApiConfig/Axios';
import {albumSuccess, albumError, callAlbum} from '../slice';

function* albumList(): SagaReturnType<any> {
  try {
    const requestParams: AxiosProps = {
      type: 'GET',
      url: 'photos',
    };

    const response: AxiosResponse = yield call(requestApi, requestParams);

    const {data} = response;

    if (data) {
      yield put(albumSuccess(response.data));
    } else {
      yield put(albumError(response.data));
    }
  } catch (error) {
    yield put(albumError({error: 'Server Error'}));
  }
}

export default function* watchAlbumRequest() {
  yield takeLatest(callAlbum, albumList);
}
