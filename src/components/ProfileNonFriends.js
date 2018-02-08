import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import { actPostLoad } from '../actions';
import ListItem from './ListItem';
import { CardSection,Button } from '../ortak/index';
import PostListForm from './PostListForm';
import ContentNonFriend from './ContentNonFriend';


 
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
      }

      goAbout() {
        this.setState({ postlarigetir:'hayir' });
        console.log('Userin hakkindasi yuklendi');
      }

      renderRow() {
        console.log('Profile Nonfreindeseki renderRow fonksiyonu calisti');
        if (this.state.postlarigetir === 'hayir') {
            //return <Text> Hakkinda sayfasi </Text>;
            return <ContentNonFriend user={this.props.propuser} userDisase={this.props.userDisase} />;
        }                
        if (this.state.postlarigetir === 'evet') {
            //return <Text> Postlar sayfasi </Text>;
            return <PostListForm user={this.props.propuser} />;
        }
      }


    render() {
        console.log("ProfileNonFriendse gelen user propsu:");
        const { name } = this.props.propuser;
        let disase;
        if (this.props.userDisase === undefined){
             disase = {};
        } else {
             disase = this.props.userDisase;
        }
        console.log(disase);
        console.log(name);
        console.log(this.props.propuser);
        return (
            <ScrollView style={styles.container}>
                <View style={styles.subContainerStyle} >
                    
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={styles.profileNameStyle} > {this.props.propuser.name} </Text>
                        <Text></Text>
                        <Button onPress={() => this.setState({ durum: 'İSTEK GÖNDERİLDİ' })}> {this.state.durum} </Button>
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
                          onPress={() => this.goAbout()}> 
                          <Text style={{ flex:2 }}>HAKKINDA</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={{ backgroundColor:'#4af083' , justifyContent:'center' }} 
                          onPress={() => this.goPosts()}> 
                          <Text style={{ flex:2 }}>POSTLAR</Text>
                        </TouchableOpacity>
                </View>
                <View>
                        {this.renderRow()}
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
