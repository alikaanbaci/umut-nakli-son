import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { actPostLoad } from '../actions';
import ListItem from './ListItem';
import { CardSection, Button } from '../ortak/index';
 
class ProfileForm extends Component {

    render() {
        console.log('post list form render oldu');
        console.log(this.props.postArray);
        return (
            <ScrollView style={styles.container}>
                <View style={styles.subContainerStyle} >
                    <Image source={require('../profiles/profile-ufuk.jpg')} style={{ width: 100, height: 100 }} />
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={styles.profileNameStyle} >Ufuk Armağan Özgür</Text>
                        <View>
                        <Text style={styles.profileNameStyle} >15 Gönderi</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.subContainerStyle} >
                    <Text style={styles.profileStroyStyle} >Ufuk Armağan Özgüraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                    aaaaaaaaaaaaa</Text>
                </View>
                <View style={styles.subContainerStyle} >
                    <Text style={styles.profileStroyStyle} >Fotoğraflarım</Text>
                </View>
                <View style={styles.subContainerStyle} >
                    <Image source={require('../profiles/profile-ufuk.jpg')} style={{ width: 100, height: 100 }} />
                    <Image source={require('../profiles/profile-ufuk.jpg')} style={{ width: 100, height: 100 }} />
                    <Image source={require('../profiles/profile-ufuk.jpg')} style={{ width: 100, height: 100 }} />
                </View>
                <View style={styles.subContainerStyle} >
                    <TextInput style={styles.inputStyle} placeholder="Kullanıcı Adı" />
                </View>
                <View style={styles.subContainerStyle} >
                    <TextInput style={styles.inputStyle} placeholder="Kanser Türü" />
                </View>
                <View style={styles.subContainerStyle} >
                    <TextInput style={styles.inputStyle} placeholder="Evre" />
                </View>
                <View style={styles.subContainerStyle} >
                    <TextInput style={styles.inputStyle} placeholder="Durum" />
                </View>
                <View style={styles.subContainerStyle} >
                    <TextInput style={styles.inputStyle} placeholder="Yaş" />
                </View>
                <View style={styles.subContainerStyle} >
                    <TextInput style={styles.inputStyle} placeholder="Şehir" />
                </View>
                <View style={styles.subContainerStyle} >
                    <Button> GÜNCELLE </Button>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create(
    {
        profileNameStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            //fontFamily: 'Comic Sans MS',
        },
        profileStroyStyle: {
            fontSize: 15,
            //fontFamily: 'Comic Sans MS',
        },
        mystil: {
            backgroundColor: 'red'
        },
        container: {
            marginTop: 55,
            marginBottom: 55,
            flex: 1,
            //justifyContent: 'center',
            //alignItems: 'center',
            backgroundColor: '#f0f5f5'
        },
        navBar: {
            height: 65,
            backgroundColor: 'white',
            elevation: 3
        },
        subContainerStyle: {
            borderBottomWidth: 1,
            padding: 5,
            backgroundColor: '#fff',
            justifyContent: 'center',
            flexDirection: 'row',
            borderColor: '#ddd',
            position: 'relative'
      },
      inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
      },
    }
);

export default ProfileForm;
