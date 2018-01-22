import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, TouchableOpacity, Image, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from '../ortak';

class ListItemFriends extends Component {

    goProfile2() {
        Actions.profilefriend();
    }

    render() {
        //const { prPost } = this.props.post;
        return (
            //<TouchableWithoutFeedback onPress={this.onPostClick.bind(this)}>
            <TouchableWithoutFeedback onPress={() => console.log("tiklama ulan")}>
                <View>
                <Text style={styles.headerStyle}> Yağmur Pehlivan </Text>
                    <View style={styles.subContainerStyle} >
                        <Image source={require('../images/kanserhastasi1.png')} style={{borderRadius:30, width: 70, height: 70 }} />
                        <Image source={require('../icons/warrior.png')} style={{ width: 50, height: 50 }} />
                        <View style={styles.textContainerStyle}>
                        <Text style={styles.textStyle}>Kanser Türü:Kemik Kanseri</Text>
                        <Text style={styles.textStyle}>Evre:2B</Text>
                        <Text style={styles.textStyle}>Yaş: 21</Text>
                        <Text style={styles.textStyle}>Şehir: Karabük</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.goProfile2()} style={styles.buttonStyle}>
                            
                            <Image source={require('../icons/ekle.jpg')} style={{ alignSelf: 'center', width: 30, height: 30 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    headerStyle: {
        flex:4,
        color:'#007aff',
        height: 'auto',
        width: 200,
        fontSize: 20,
        fontWeight: 'bold',
        //fontFamily: 'Comic Sans MS'
    },
    buttonStyle: {
        flex: 1,
        justifyContent:'center',
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        marginLeft: 10,
        marginRight: 5
      },
    buttonTextStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
      },
    textStyle: {
        flex:4,
        color:'purple',
        height: 'auto',
        width: 150,
        fontSize: 12,
        fontWeight: 'bold',
        //fontFamily: 'Comic Sans MS'
    },
    subContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        borderWidth: 2,
        borderRadius: 30,
        position: 'relative'
  },
  textContainerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    borderColor: '#ddd',
    position: 'relative'
}
});


export default ListItemFriends;
