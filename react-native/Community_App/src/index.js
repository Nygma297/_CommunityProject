import React from 'react'
import { Provider } from 'react-redux'
import createStore from './store/create'
import Router from './scenes'
import data from './mock/data';

const Kernel = () => (
  <Provider store={createStore(data)}>
    <Router />
  </Provider>
)

export default Kernel
