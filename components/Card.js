// import library
import React, { Component } from 'react';
import { View, Image, Text, Button } from 'react-native';
import CardSection from './CardSection.js';

class Card extends Component {
    render() {
        return ( 
            <View style = {styles.view}>
                <CardSection>
                <View style = {styles.right}>
                <Image style={styles.pdright}
                source={{uri: 'https://images.unsplash.com/photo-1529257414772-1960b7bea4eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'}}
                />
                <View style={{ marginTop: 10, marginLeft: 10}}>
                <Text>ไม่ให้เธอไป</Text>
                <Text>POTATO</Text>
                </View>
                </View>
                </CardSection>

                <CardSection>
                <View style={styles.center}>
                <Image style={styles.stretch}
                source={{uri: 'https://images.unsplash.com/photo-1507984211203-76701d7bb120?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80'}}
                />
                </View>
                </CardSection>

                <CardSection> 
                    <View style={styles.bt}>
                        <View style={{ width: 150 }}>
                            <Button title = "Buy" />
                        </View>
                    </View>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    stretch: {
        width: 390,
        height: 400,
        borderRadius: 8,
    },
    pdright: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    bt: {
        paddingTop: 10,
        alignItems: "center",
    },
    right: {
        margin: 10,
        flexDirection: 'row'
    },
    center: {
        alignItems: "center",
        margin: 10,
    }
  };

export default Card;
