import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import CameraRollPicker from 'react-native-camera-roll-picker';
import firebase from 'firebase';
import UUIDGenerator from 'react-native-uuid-generator';
import RNFetchBlob from 'react-native-fetch-blob';
import _ from 'lodash';
import { actPostLoad } from '../actions';
import ListItem from './ListItem';
import { Button } from '../ortak';
 
class GalleryForm extends Component {
    constructor(props) {
        super(props);
        this.state = { stSelectedImage: '' };
    }
    getSelectedImages = (selectedImages, currentImage) => {
        this.setState({ stSelectedImage: currentImage.uri });
      }
      selectedForNormal() {
        console.log(this.state.stSelectedImage);
        const image = this.state.stSelectedImage;  
        const Blob = RNFetchBlob.polyfill.Blob;
        const fs = RNFetchBlob.fs;
        window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
        window.Blob = Blob;
        UUIDGenerator.getRandomUUID().then((uuid) => {
            console.log("birinci");
            console.log(uuid);
            let uploadBlob = null;
            const { currentUser } = firebase.auth();
            const imageRef = firebase.storage().ref('user/' + currentUser.uid + '/profile').child(uuid);
            let mime = 'image/jpg';
            fs.readFile(image, 'base64')
            .then((data) => {
                return Blob.build(data, { type: `${mime};BASE64` });
            })
            .then((blob) => {
                uploadBlob = blob;
                return imageRef.put(blob, { contentType: mime });
            })
            .then(() => {
                uploadBlob.close();
                return imageRef.getDownloadURL();
            })
            .then((url) => {
            firebase.database().ref("kullanicilar/" + currentUser.uid + "/resimler/"+ uuid).set({
                url: url
            });
                console.log(url);
            })
            .catch((error) => {
                console.log(error);
            });
        });
      }
      selectedForProfile() {
        console.log(this.state.stSelectedImage);
        const image = this.state.stSelectedImage;  
        const Blob = RNFetchBlob.polyfill.Blob;
        const fs = RNFetchBlob.fs;
        window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
        window.Blob = Blob;
            console.log("birinci");
            //console.log(uuid);
            let uploadBlob = null;
            const { currentUser } = firebase.auth();
            const imageRef = firebase.storage().ref('user/' + currentUser.uid + '/profile').child('profile.jpg');
            let mime = 'image/jpg';
            fs.readFile(image, 'base64')
            .then((data) => {
                return Blob.build(data, { type: `${mime};BASE64` });
            })
            .then((blob) => {
                uploadBlob = blob;
                return imageRef.put(blob, { contentType: mime });
            })
            .then(() => {
                uploadBlob.close();
                return imageRef.getDownloadURL();
            })
            .then((url) => {
            firebase.database().ref("kullanicilar/" + currentUser.uid + "/profile").set({
                url: url
            });
                console.log(url);
            })
            .catch((error) => {
                console.log(error);
            });
      }
      render() {
        return (
        <View style={styles.container}>
            <CameraRollPicker callback={this.getSelectedImages} />
            <Button onPress={() => this.selectedForNormal(this.callback)} > Resmi Yükle </Button>
            <Button onPress={() => this.selectedForProfile(this.callback)} > Profil Resmi Yükle </Button>
        </View>
        );
      }
    }

const styles = StyleSheet.create(
    {
        mystil: {
            backgroundColor: 'red'
        },
        container: {
            marginTop: 55,
            flex: 1,
            //justifyContent: 'center',
            //alignItems: 'center',
            backgroundColor: 'white'
        },
        navBar: {
            height: 65,
            backgroundColor: 'white',
            elevation: 3
        }
    }
);

export default GalleryForm;
