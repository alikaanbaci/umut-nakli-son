import React, { Component } from 'react';
import { Text, View } from 'react-native';

class ContentNonFriend extends Component {

    render() {
        return (
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
        );
    }

}

export default ContentNonFriend;

