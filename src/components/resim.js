import firebase from 'firebase';
import React, { Component } from 'react';
import { Image,View } from 'react-native';

class resim extends Component {
    state = { yol: '' };
    componentWillMount() {
        const storage = firebase.storage();
        const { currentUser } = firebase.auth();
        const gomisRef = gomisRef.child('images/gomis.jpg');
        const resimYolu = gomisRef.fullPath;
        this.setState({ yol: resimYolu });
    }

    resimgetir() {

    }

    render() {
         return (
             <View>
                   <Image
                        style={{width: 50, height: 50}}
                        source={{uri: {this.state.yol}}}
                   />
            </View>
         );
    }
}

export default resim;