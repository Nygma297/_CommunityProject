import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import reduxThunkMiddleware from 'redux-thunk'
// import Reactotron from 'reactotron'
// import createLogger from 'redux-logger'
// import R from 'ramda'
import * as reducers from '../reducers/index'
import { AsyncStorage, Platform } from 'react-native'
import {persistStore, autoRehydrate} from 'redux-persist'
import devTools from 'remote-redux-devtools';
import { Actions } from 'react-native-router-flux';
import createSagaMiddleware from 'redux-saga';
import sagas from '../sagas/index';
import * as todoActions from '../actions/todoActions';
// import {reducer as formReducer} from 'redux-form';

// Reactotron.connect({
//   enabled: __DEV__,
// })

// const logger = createLogger({
//   predicate: (getState, { type }) => true, //USE_LOGGING && R.not(R.contains(type, SAGA_LOGGING_BLACKLIST)),
//   stateTransformer: (state) => R.map((v) => v.asMutable({deep: true}), state)
// })
const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(
  autoRehydrate(),
  applyMiddleware(
    sagaMiddleware,
    reduxThunkMiddleware,
    // Reactotron.reduxMiddleware
  ),
  devTools({
    name: Platform.OS,
    hostname: 'localhost',
    port: 5678
  })
)

export default function configureStore(initialState): Store {

  const store = createStore(
    combineReducers({ ...reducers }),
    initialState,
    enhancer
  )
  sagaMiddleware.run(sagas);
  // persistStore(store, {storage: AsyncStorage,whitelist:['auth']}, () => {
  //   let storeData = store.getState();
  //   console.log('restored');
  //   if(storeData.auth.loggedIn){
  //      Actions.home();
  //   }
  // });
  // Reactotron.addReduxStore(store)
  // store.subscribe(function(){
  //   Reactotron.log(store.getState());
  // })
  store.dispatch(todoActions.addTodo('Foo Bar'));
  store.dispatch(todoActions.addTodo('Hello World'));
  return store;
}