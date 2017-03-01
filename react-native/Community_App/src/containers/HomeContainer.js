  /* @flow */
import React, { Component } from 'react'
import { Platform } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
// import Reactotron from 'reactotron'
// import Container from '../components/Container'

import HomeComponent from '../components/HomeComponent'
// import {viewDoc} from '../reducers/docs';
// import {actions as authActions} from '../reducers/auth';
import {VisibilityFilters} from '../actions/actionTypes';
// import * as sele from '../selectors/todoFilter'
import { todoFilter } from '../selectors/todoFilter';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.ALL:
      return todos;
    case VisibilityFilters.COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.INCOMPLETE:
      return todos.filter(t => !t.completed);
  }
}


const mapStateToProps = (state) => {    
    var mapped = {
        ...state,
        ...state.common,
        filter:state.filterReducer,
        addModalVisible:state.addModalReducer.visible,
        // todos: todoFilter(state)
        todos: getVisibleTodos(state.todo, state.filterReducer)

    };
    return mapped;
}

// function mapDispatchToProps(dispatch) {
  // const creators = Map()
  //         .merge(...actions)
  //         .filter(value => typeof value === 'function')
  //         .toObject();

  const actions = {
    // onDocSelect: function(doc){
    //   // Reactotron.log("--DOC SELECTED--");
    //   // Reactotron.log(doc);
    //   dispatch(viewDoc(doc));
	   //  Actions.document();
    // },
    // onLogout: function(){
    //   dispatch(authActions.logout())
    // },
    // onSettingSelect: function(){
    //   Actions.setting();
    // }
  };
// }

export default connect(mapStateToProps, actions)(HomeComponent);
