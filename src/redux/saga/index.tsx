import {call, put, SagaReturnType, takeLatest} from '@redux-saga/core/effects';
import {AxiosResponse} from 'axios';
import { AxiosProps, requestApi } from '../../ApiConfig/Axios';
import { setAlbumData } from '../../realmdb/AccountsController';
import {albumSuccess, albumError, callAlbum} from '../slice';

function* albumList(): SagaReturnType<any> {
  
  try {
    const requestParams: AxiosProps = {
      type: 'GET',
      url: 'orders',
    };

    const response: AxiosResponse = yield call(requestApi, requestParams);

    const {data} = response;
    
    if (data) {
      //console.log(response.data)
        console.log({setAlbumData},response.data);
      yield put(albumSuccess(response.data));
    } else {
      yield put(albumError(response.data));
    }
  } catch (error) {
    //console.log(error);
    yield put(albumError({error: 'Server Error'}));
  }
}

export default function* watchProductRequest() {
  yield takeLatest(callAlbum, albumList);
}
