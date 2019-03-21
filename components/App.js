import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Mr.Apisak Kairkhachonbamrung #TCT-RA27 GGEZ</Text>
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