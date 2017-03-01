import { fork } from 'redux-saga/effects';
import { watchCreateTodo } from './todoSaga';


export default function* sagas() {
  yield [
    fork(watchCreateTodo)
  ];
}