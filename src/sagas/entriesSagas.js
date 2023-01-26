import { call, put, take } from "redux-saga/effects";
import entriesTypes from "../actions/entries.actions";
import axios from 'axios';

export function* getAllEntries(){
  yield take(entriesTypes.GET_ENTRY);
  const result = yield call(axios, 'http://localhost:3001/entries');
  console.log(result);
  yield put({type: entriesTypes.POPULATE_ENTRY, payload: result.data})
}