import React, { Component } from 'react';
import { Text, View, TouchableWithoutFeedback, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection,Button } from '../ortak';

class ListItemOtherPosts extends Component {

    /*onPostClick() {
        Actions.post_detay({ clickedPost: this.props.post });
    }*/

    render() {
        const { post } = this.props.post;
        console.log("ListItemOtherPosts gelen post propsu boyle gorunuyor");
        console.log(this.props.post);
    
        return (
            //<TouchableWithoutFeedback onPress={this.onPostClick.bind(this)}>
                <View style={{ borderColor: '#ddd',borderWidth: 2,borderRadius: 30, }} >
                <Text style={styles.textStyle}> Ali Kaan Baci </Text>
                    <CardSection>
                        <Image source={require('../images/alikaanbaci.jpg')} style={{borderRadius:30, flex:1, /*width: 70,*/ height: 70 }} />
                        <Text style={styles.postStyle} > {post} </Text>
                        <Button onPress={() => Actions.post_detay({ clickedPost: this.props.post })}>
                          Gönderi Detayı </Button>        
                    </CardSection>
                </View>
            //</TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    postStyle: {
        //height: 'auto',
        //width: 350,
        flex: 4,
        fontSize: 20,
        color:'purple',
        //fontWeight: 'bold',
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
    textStyle: {
        flex:3,
        color:'#007aff',
        height: 'auto',
        width: 150,
        fontSize: 20,
        fontWeight: 'bold',
        //fontFamily: 'Comic Sans MS'
    }
});


export default ListItemOtherPosts;
