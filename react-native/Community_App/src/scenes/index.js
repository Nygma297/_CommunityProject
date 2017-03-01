/* @flow */

import React, { Element } from 'react'
import { Router } from 'react-native-router-flux'
import scenes from './app'
import { connect } from 'react-redux';
import { DEFAULT_BACKGROUND_COLOR, TEXT_COLOR } from '../theme/colors'

const RouterWithRedux = connect()(Router);

const getSceneStyle = () => ({
  flex: 1,
  backgroundColor: DEFAULT_BACKGROUND_COLOR,
  //color: TEXT_COLOR,
  shadowColor: 'black',
  shadowOffset: { width: 2, height: 4 },
  shadowOpacity: 0.5,
  shadowRadius: 3,
})

export default (): Element => (
  <RouterWithRedux
    scenes={scenes}
    getSceneStyle={getSceneStyle}
  />
)
