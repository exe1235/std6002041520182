import React, { Component } from 'react';
import { View } from 'react-native';
import Header from './Header.js';
import Card from './Card.js';
import Login from './Login.js';
export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Header title="- LOGIN -"></Header>
        <Login />
        
      </View>
    );
  }
}
/*
<Text style = {{ paddingLeft: 10}}>Mr.Apisak Kairkhachonbamrung #TCT-RA27 GGEZ 62</Text>
*/
/*//Import libaryß
import React from 'react';
import { View, Text } from 'react-native';

//Write component
class App extends React.Compenent {
    render() {
        return(
            <View>
                <Text>Mr.Apisak Kairkhachonbamrung 6002041520182</Text>
            </View>
            //Component
        );
    }
}
//Export
export default App;
*/