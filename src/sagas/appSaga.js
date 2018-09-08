import ACTIONS from '../constants/actionTypes';
import { take, call, put, select, all } from 'redux-saga/effects';
import axios from 'axios';
import localforage from 'localforage';
import { appActionCreator } from '../actions';

function getData(API_URL) {
  return axios({
    method: 'get',
    url: API_URL,
  }).catch(err => err);
}

function* getDataWatcher() {
  while (true) {
    const action = yield take(ACTIONS.REQUEST_HEIRARCHY);
    try {
      // const API_URL = yield select(state => state.config.API_URL);
      const API_URL = 'https://kf6xwyykee.execute-api.us-east-1.amazonaws.com/production/tree/';
      const result = yield call(getData, API_URL);
      let data;
      console.log('received heirarchy', result);
      if(!result.data){
        data = yield localforage.getItem('data')
        yield put(appActionCreator.receiveHeirarchy(data));
      }else{
        data = result.data;
        yield localforage.setItem('data',data);
      }
      yield put(appActionCreator.receiveHeirarchy(data));
    } catch (err) {
      console.log('get data watcher error', err);
    }
  }
}

export default function* appSaga() {
  yield all([
    getDataWatcher()
  ]);
}
