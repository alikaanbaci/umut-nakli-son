import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import _ from 'lodash';
import { actIncomingRequestLoad } from '../actions';
import ListItemIncomingRequestFriends from './ListItemIncomingRequestFriends';
import ListItemRequestFriends from './ListItemRequestFriends';

 
class IncomingRequests extends Component {

    componentWillMount() {
        console.log("INCOMING REQUEST LOAD DAN ONCE");
        this.props.actIncomingRequestLoad();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ incomingRequestArray }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(incomingRequestArray);
    }

    renderRow(name) {
        console.log("List item discoer friends'den oncesi");
        console.log(name);
        return <ListItemIncomingRequestFriends requester={name} /*uid={uid}*/ />;
    }
    goSendedRequest() {
        Actions.sendedrequests();
    }
    goIncomingRequest() {
        Actions.incomingrequests();
    }
    render() {
        console.log('incoming request form render oldu');
        console.log(this.props.incomingRequestArray);
        return (
            <View style={styles.container}>
                <View style={styles.subContainerStyle}>
                        <TouchableOpacity
                          style={{ backgroundColor:'cyan' , justifyContent:'center', padding: 5}} 
                          onPress={() => console.log('HAKKINDAya basıldı')}> 
                          <Text style={{padding: 5}} >ARKADAŞ BUL</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={{ backgroundColor:'#4af083' , justifyContent:'center', padding: 5 }} 
                          onPress={() => this.goSendedRequest()}> 
                          <Text style={{padding: 5}} > GONDERİLENDER </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                          style={{ backgroundColor:'purple' , justifyContent:'center', padding: 5 }} 
                          onPress={() => this.goIncomingRequest()}> 
                          <Text style={{padding: 5}} > GELENLER </Text>
                        </TouchableOpacity>
                </View>
                <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
                
            </View>
        );
        
        /*return (
            <View style={styles.container}>
               <View style={styles.navBar}>
                  <Image source={require('../images/logomuz.jpg')} style={{width: 70, height: 70 }} />
               </View>    
            </View>
        );*/
    }
}

const mapStateToProps = ({ incomingRequestResponse }) => { 
    /*const incomingRequestArray = _.map(incomingRequestResponse, ({ name }) => {
        return { name };
    });*/
   const incomingRequestArray = incomingRequestResponse;
    console.log("burasi REQUEST mapstatetopropsu : ");
    console.log(incomingRequestResponse);
    return { incomingRequestArray };
};

const styles = StyleSheet.create(
    {
        subContainerStyle: {
            borderBottomWidth: 1,
            padding: 5,
            backgroundColor: '#fff',
            justifyContent: 'center',
            flexDirection: 'row',
            borderColor: '#ddd',
            position: 'relative'
      },
        mystil: {
            backgroundColor: 'red'
        },
        container: {
            marginTop: 55,
            flex: 1,
            justifyContent: 'center',
            backgroundColor: '#f0f5f5'
        },
        navBar: {
            height: 65,
            backgroundColor: 'white',
            elevation: 3
        }
    }
);

export default connect(mapStateToProps, { actIncomingRequestLoad })(IncomingRequests);
