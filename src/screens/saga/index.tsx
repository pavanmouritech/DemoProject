import watchAlbumRequest from "../../List/saga";
import {all, fork} from 'redux-saga/effects';


export default function* rootSaga(){
    yield all([fork(watchAlbumRequest),]);
}