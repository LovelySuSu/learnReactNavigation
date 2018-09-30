/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from 'react-navigation'



type Props = {};
class Hello extends  Component{
  constructor(props){
    super(props);
    this.state={
      title: ''
    }
  }
  componentDidMount() {
    let s = this.props.navigation.state.params.title
      this.setState({
          title: s
      })
  }
  render(){
    return <Text>{this.state.title}</Text>
  }
}
const arr = ['Ios','Java','Android']
let obj = {}
arr.forEach(function(val){
  obj[val]={
    screen:Hello,
    navigationOptions:function(res) {
        res.navigation.state.params={title: val}
      }
  }
})
const TopTabView = createMaterialTopTabNavigator(obj)
export default class App extends Component<Props> {
  render() {
    return (
      <TopTabView/>
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
