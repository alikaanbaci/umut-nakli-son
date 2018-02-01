import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { actPostLoad } from '../actions';
import ListItem from './ListItem';
import { CardSection,Button } from '../ortak/index';
import PostListForm from './PostListForm';
import { Actions } from 'react-native-router-flux';
 
class ProfileNonFriends extends Component {
    
    constructor(props) {
        super(props);
        this.state = {durum: 'BAĞLANTI KUR', postlarigetir:'hayir' };
    
        // Toggle the state every second
        /*setInterval(() => {
          this.setState({ showText: !this.state.durum });
        }, 1000);*/
      }

      goPosts() {
          this.setState({ postlarigetir:'evet' });
          console.log('Userin postları yuklendi');
          this.loadPosts();
      }

      loadPosts(){
          console.log('loadPosts() fonksiyonu calisti');
      }


    render() {
        console.log('post list form render oldu');
        console.log(this.props.postArray);
        return (
            <ScrollView style={styles.container}>
                <View style={styles.subContainerStyle} >
                    
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={styles.profileNameStyle} >Ufuk Armağan Özgür</Text>
                        <Text></Text>
                        <Button onPress={() => this.setState({ durum:'İSTEK GÖNDERİLDİ' })}> {this.state.durum} </Button>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                        <Text></Text>
                    </View>
                    <Image source={require('../images/alikaanbaci.jpg')} style={{ width: 100, height: 100 }} />
                </View>
                <View style={styles.subContainerStyle}>
                        <TouchableOpacity
                          style={{ backgroundColor:'cyan' , justifyContent:'center'}} 
                          onPress={() => console.log('HAKKINDAya basıldı')}> 
                          <Text style={{ flex:2 }}>HAKKINDA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={{ backgroundColor:'#4af083' , justifyContent:'center' }} 
                          onPress={() => this.goPosts()}> 
                          <Text style={{ flex:2 }}>POSTLAR</Text>
                        </TouchableOpacity>
                </View>
                <View>
                        <Text></Text>
                        <Text style={{ fontSize:20 }}> Kanser Türü: Lenfoma</Text>
                        <Text></Text>
                        <Text style={{ fontSize:20 }}> Yaş: 25 </Text>
                        <Text></Text>
                        <Text style={{ fontSize:20 }}> Şehir: Ankara </Text>
                        <Text></Text>
                        <Text></Text>
                        <Text style={{ fontSize:20, color:'blue', fontStyle:'italic'  }}> Kişinin fotoğraflarını görmek, hikayesini okumak ve onunla konuşmak için bağlantı kurmanız gerekmektedir </Text>
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
            backgroundColor: 'white'
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

export default ProfileNonFriends;
