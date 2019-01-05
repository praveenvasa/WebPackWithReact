import { put, takeLatest, all } from 'redux-saga/effects';
import * as actionTypes from '../constants/actionTypes';

function* takeData(action){

 if(action.payload !== '')
  {
     const json = yield fetch(action.payload)
        .then(response => response.json());    
     yield put({type:actionTypes.CHANGE, payload: json.items});
  }
  else{
     yield put({type:actionTypes.NOTHING_SELECTED, payload: []});
  }

}
function* actionTracker() {
    
     yield takeLatest(actionTypes.LOADING, takeData);
}

export default function* sagaRoot(){

  yield all([actionTracker()]);
}