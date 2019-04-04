import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import axios from 'axios';

class Login extends Component {
    constructor(props){
        super();
        this.state = {
            email: '',
            password: ''
        }
        this.onChangeEmail = this.onChangeEmail.bind(this)
        this.onChangePass = this.onChangePass.bind(this)
    }
    onChangeEmail(e){
        console.log('onChangeEmail',e)
        this.setState({ email: e})
    }
    onChangePass(e){
        console.log('onChangePass',e)
        this.setState({ password: e})
    }
    onPress(){
        console.log(this.state)
        const url = 'http://128.199.240.120:9999/api/auth/login'
        axios.post(url, this.state)
            .then(response => {
                console.log('login', response.data.data.token)
            })
    }
    render() { 
        return (
                <View style = {{ padding: 20 }}>
                        <TextInput 
                            style={{ height: 40, fontSize: 20, padding: 10 }}
                            placeholder="Enter E-mail"
                            value = {this.state.email}
                            onChangeText = {this.onChangeEmail}
                        />
                        <TextInput 
                            secureTextEntry
                            style={{ height: 40, fontSize: 20, padding: 10 }}
                            placeholder="Enster Password"
                            value = {this.state.password}
                            onChangeText = {this.onChangePass}
                        />
                        <Button 
                            title="LOGIN"
                            onPress = {this.onPress.bind(this)}
                        />
                </View>
        );
    }
}

export default Login;