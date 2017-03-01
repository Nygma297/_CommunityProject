// import { call, cancel, fork, put, take } from 'redux-saga/effects';
// import { takeEvery } from 'redux-saga';
// import addTodo from '../actions/addTodo';


// export function* addTodoItem(action) {
//   console.log("addTodo");
//   // yield put(addTodo(todoId,todoTxt));

// }

// export function* watchCreateTodo() {
//     yield* takeEvery('ADD_TODO',addTodoItem);
//     // console.log("todo");
// }

// // export const todoSaga = [
// //   fork(watchCreateTodo)
// // ];



import { call, cancel, fork, put, take } from 'redux-saga/effects';
import { takeEvery,takeLatest,delay } from 'redux-saga';
import * as actions from '../actions/actionTypes';
import * as todoActions from '../actions/todoActions';
import * as commonActions from '../actions/common';


export function* addTodoItem(action) {
  console.log("addTodo",action);
  yield put(commonActions.showLoader());
  yield delay(1000);
  yield put(todoActions.addActionUsingdelay(action.todo.name,action.todo.completed));
  yield delay(1000);
  yield put(commonActions.hideLoader());
}

export function* watchCreateTodo() {
    yield* takeLatest('DummyAddToDo',addTodoItem);
}

// export const todoSaga = [
//   fork(watchCreateTodo)
// ];

