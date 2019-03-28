import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Header from './Header.js';
import Card from './Card.js';
export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Header title="Albums"></Header>
        <Text style = {{ paddingLeft: 10}}>Mr.Apisak Kairkhachonbamrung #TCT-RA27 GGEZ</Text>
        <Card />
      </View>
    );
  }
}
/*//Import libary
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