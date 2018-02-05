import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, TouchableOpacity, Image, Button, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import firebase, { database } from 'firebase';
import { actSendFriendshipRequest } from '../actions';
import { CardSection } from '../ortak';
import ProfileNonFriends from './ProfileNonFriends';

class ListItemRequestFriends extends Component {

    goProfile() {
        Actions.profilenonfriend();
    }

    sendFriendshipRequest(uid, name) {
        this.props.actSendFriendshipRequest(uid, name);
    }

    render() {
        const { requesterName, uid } = this.props.requester;
        //const { name } = this.props;
        console.log('ListItemRequestFriends e gelen veri-->');
        console.log(requesterName);
        console.log(uid);
        return (
            //<TouchableWithoutFeedback onPress={this.onPostClick.bind(this)}>
            <TouchableWithoutFeedback onPress={() => console.log("tiklama ulan")}>
                <View>
                <Text style={styles.headerStyle}> { requesterName } </Text>
                    <View style={styles.subContainerStyle} >
                        <Image source={require('../images/alikaanbaci.jpg')} style={{ borderRadius: 30, width: 70, height: 70 }} />
                        <Image source={require('../icons/winner.png')} style={{ width: 50, height: 50 }} />
                        <View style={styles.textContainerStyle}>
                        <Text style={styles.textStyle}>Kanser Türü:Lenfoma</Text>
                        <Text style={styles.textStyle}>Evre:3A</Text>
                        <Text style={styles.textStyle}>Yaş: 25</Text>
                        <Text style={styles.textStyle}>Şehir: Ankara</Text>
                        </View>
                        <TouchableOpacity onPress={() => this.goProfile()} style={styles.buttonStyle}>
                            <Image source={require('../icons/ekle.jpg')} style={{ alignSelf: 'center', width: 30, height: 30 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.sendFriendshipRequest(uid, name)} style={styles.buttonStyle}>
                            <Image source={require('../icons/star.png')} style={{ alignSelf: 'center', width: 30, height: 30 }} />
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
        width: 150,
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

const mapStateToProps = ({ nonFriendsResponse }) => { 
    /*const nonFriendsArray = _.map(nonFriendsResponse, ({ name }, uid) => {
        return { name, uid };
    });
    console.log("burasi ListItemDiscoverFriendsin mapstatetopropsu : ");
    console.log(nonFriendsArray);*/
    const a = "a";
    return { a };
};

export default connect(mapStateToProps, { actSendFriendshipRequest })(ListItemRequestFriends);
