// import library
import React, { Component } from 'react';
import { View, Text } from 'react-native';

// create component
class Header extends Component {
    render() {
        return (
            <View style={style.header}>
                <Text style={style.text}>{this.props.title}</Text>
            </View>        
        );
    }
}

//style
const style = {
    header: {
        padding: 5,        
        justifyContent: "center",
        alignItems: "center",
    },
    view: {
        flex: 1,
    },
    text: {
        fontSize: 25,
        alignItems: "center",
        margin: 20
    }
}

// export
export default Header;
