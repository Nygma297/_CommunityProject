import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  ListView,
  Platform,
  Switch
} from 'react-native';
import api from './api';

export default class Community_App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ``,
      result: [`Bro!`],
      names: `Didn't render`
    };
  }
  componentWillMount() {
    api.getData() .then((response => {
      this.setState({
        result: response.results,
        names: response.results[0].name
      })
    }));
  }
  render() {
    console.log("People: ", this.state.results);
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({ text })}
        />
        <ScrollView>
          <Text style={{ padding: 10, fontSize: 22 }}>
            {this.state.text}
          </Text>
          <Text>{this.state.names}</Text>
          <Switches />
          <ListViews />
        </ScrollView>
      </View>
    );
  }
}

class Switches extends React.Component {
  state = {
    trueSwitchIsOn: true,
    falseSwitchIsOn: false,
  };

  render() {
    return (
      <View>
        <Switch
          onValueChange={(value) => this.setState({ falseSwitchIsOn: value })}
          style={{ marginBottom: 10 }}
          value={this.state.falseSwitchIsOn} />
      </View>
    );
  }
}


class ListViews extends Component {
  // Initialize the hardcoded data
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      data: ds.cloneWithRows([
        'John', 'Jack', 'Harry', 'Ronald', 'Enigma', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View style={{ flex: 1, paddingTop: 22 }}>
        <ListView
          dataSource={this.state.data}
          renderRow={(rowData) => <Text>{rowData}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Community_App', () => Community_App);
