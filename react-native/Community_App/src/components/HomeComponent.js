import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  StatusBar,
  Text,
  View,
  Animated,
  Image,
  TouchableHighlight,
  Modal
} from 'react-native';
// import t from 'tcomb-form-native'
import {bindActionCreators, dispatch} from 'redux';
// import Reactotron from 'reactotron';

import commonStyles from '../theme/common';
// import Container from '@components/Container';
// import Link from '@components/Link';
import { Actions } from 'react-native-router-flux'

var Dimensions = require('Dimensions');
var _ = require('lodash');
// import Swiper from 'react-native-swiper';
import * as visibilityActions from '../actions/visibilityActions';
import * as addVisibilityActions from '../actions/addVisibilityActions';
import * as todoActions from '../actions/todoActions';
import TitleBar from '../components/title-bar';
import TodoList from '../components/todo-list';
import AddTodo from '../components/add-todo';
import Filters from '../components/filters';
import Spinner from 'react-native-loading-spinner-overlay';
//import ListComponent from './ListComponent';
// import Line from './Line';

// var Form = t.form.Form;

// var todoItem  = t.struct({
//   text: t.String,      
// });

var options = {};

class HomeComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {todos, filter, dispatch, addModalVisible, loaderVisible} = this.props;
    return (
      <View style={styles.container}>
        <Spinner visible={loaderVisible} />
        <StatusBar hidden={true}/>
        <TitleBar
          activeFilter={this.props.filter}
          {...bindActionCreators(addVisibilityActions, dispatch)} />
        <TodoList
          activeFilter={this.props.filter}
          todos={this.props.todos}
          {...bindActionCreators(todoActions, dispatch)} />
        <Filters
          activeFilter={this.props.filter}
          {...bindActionCreators(visibilityActions, dispatch)} />
        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.props.addModalVisible}>
          <AddTodo
            {...bindActionCreators(todoActions, dispatch)}
            {...bindActionCreators(addVisibilityActions, dispatch)}
            />
        </Modal>
      </View>
    );
  }

  componentDidMount(){
  }
}

const dotSize = 15;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {

  },
  list: {
    flex: 1
  },
  add: {
    flex: 1
  },
  swiper: {
    
  },
  dot: {
    // borderColor:'#4D4D4D', 
    // width: dotSize, height: dotSize,
    // borderWidth: 1,
    // borderRadius: 15, 
    // marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,
  },
  activeDot: {
    // backgroundColor:'#4d4d4d', 
    // width: dotSize, height: dotSize,
    // borderRadius: 15, 
    // marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3,
  },
  slide: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // margin: 5
  },
  slideTitle: {
    // fontSize: 16,
    // fontWeight: 'normal',
    // color: '#4D4D4D',
    // textAlign: 'center'
  },
  image: {
    flex: 1
  },
  appArea: {
    flex: 8,
    //backgroundColor: '#F5FC00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

module.exports = HomeComponent;
