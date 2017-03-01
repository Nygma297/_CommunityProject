import React, { Component } from  'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text
} from 'react-native';

function capitalize (word) {
  if(word){ 
    var lower = word.toLowerCase();
    return lower.slice(0, 1).toUpperCase() + lower.slice(1);
  }else{
    return word;
  }
}

class TitleBar extends Component {
  render() {
    var {activeFilter, showModal} = this.props;
    return (
      <View style={styles.toolbar}>
        <Text style={styles.button}></Text>
        <Text style={styles.title}>{capitalize(activeFilter)} Todos</Text>
        <TouchableOpacity style={styles.button} onPress={showModal}>
          <Text style={styles.text}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#81c04d',
    marginTop: 100,
    paddingTop: 30,
    paddingBottom: 10,
    flexDirection: 'row'
  },
  button: {
    width: 50
  },
  text: {
    color: '#fff',
    textAlign: 'center'
  },
  title: {
    flex: 1,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold'
  }
});

export default TitleBar;
