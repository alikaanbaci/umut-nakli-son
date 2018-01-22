import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { actNonFriendsLoad } from '../actions';
import ListItemDiscoverFriends from './ListItemDiscoverFriends';
 
class ListDiscoverFriends extends Component {

    componentWillMount() {
        this.props.actNonFriendsLoad();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }

    createDataSource({ nonFriendsArray }) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(nonFriendsArray);
    }

     renderRow(name) {
         console.log("KULLANACAGIM RENDER ROW:");
         console.log(name);
        return <ListItemDiscoverFriends name={name} />;
    }

    render() {
        console.log('nonfriendslist form render oldu');
        console.log(this.props.nonFriendsArray);
        return (
            <View style={styles.container}>
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

const mapStateToProps = ({ nonFriendsResponse }) => { 
    const nonFriendsArray = _.map(nonFriendsResponse, ({ name }, uid) => {
        return { name, uid };
    });
    console.log("burasi ListDiscoverFriendsin mapstatetopropsu : ");
    console.log(nonFriendsArray);
    return { nonFriendsArray };
};

const styles = StyleSheet.create(
    {
        mystil: {
            backgroundColor: 'red'
        },
        container: {
            marginTop: 55,
            flex: 1,
            justifyContent: 'center',
            //alignItems: 'center',
            backgroundColor: '#f0f5f5'
        },
        navBar: {
            height: 65,
            backgroundColor: 'white',
            elevation: 3
        }
    }
);

export default connect(mapStateToProps, { actNonFriendsLoad })(ListDiscoverFriends);
