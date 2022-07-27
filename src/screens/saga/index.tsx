import watchAlbumRequest from "../../redux/saga";
import {all, fork} from 'redux-saga/effects';


export default function* rootSaga(){
    yield all([fork(watchAlbumRequest),]);
}