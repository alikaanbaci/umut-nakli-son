import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';
import _ from 'lodash';
import { actProfileLoad, actFriendsLoad } from '../actions';
import ListItem from './ListItem';
import { CardSection, Button } from '../ortak/index';
 
class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.state = { stName: '' };
        this.state = { stEmail: '' };
        this.state = { stAge: '' };
        this.state = { stProvince: '' };
        this.state = { stDisaseType: '' };
        this.state = { stDisaseStage: '' };
        this.state = { stCureNumber: '' };   
        this.state = { stHospital: '' };
    }
    componentWillMount() {
        this.props.actProfileLoad();
        console.log("Willl mount calıstı");
        console.log(this.props.profile.name);
        console.log(this.state.stHospital);
    }
    componentDidMount() {
        console.log("Willl didmount calıstı");
    }

    clicked() {
        const database = firebase.database();
        const { currentUser } = firebase.auth();
        let name, 
        age, 
        province, 
        email,
        disaseType,
        disaseStage,
        cureNumber,
        hospital;
        if (this.state.stName !== undefined) {
            name = this.state.stName;
        } else {
            name = this.props.profile.name;
        }
        if (this.state.stAge !== undefined) {
            age = this.state.stAge;
        } else {
            age = this.props.profile.age;
        }
        if (this.state.stProvince !== undefined) {
            province = this.state.stProvince;
        } else {
            province = this.props.profile.province;
        }
        if (this.state.stEmail !== undefined) {
            email = this.state.stEmail;
        } else {
            email = this.props.profile.email;
        }
        if (this.state.stDisaseType !== undefined) {
            disaseType = this.state.stDisaseType;
        } else {
            disaseType = this.props.profile.disaseInfo.disaseType;
        }
        if (this.state.stDisaseStage !== undefined) {
            disaseStage = this.state.stDisaseStage;
        } else {
            disaseStage = this.props.profile.disaseInfo.disaseStage;
        }
        if (this.state.stCureNumber !== undefined) {
            cureNumber = this.state.stCureNumber;
        } else {
            cureNumber = this.props.profile.disaseInfo.cureNumber;
        }
        if (this.state.stHospital !== undefined) {
            hospital = this.state.stHospital;
        } else {
            hospital = this.props.profile.disaseInfo.hospital;
        }
        database.ref("kullanicilar/" + currentUser.uid).update({
            name: name,
            age: age,
            province: province,
            email: email,
            disaseInfo: {
                disaseType: disaseType,
                disaseStage: disaseStage,
                cureNumber: cureNumber,
                hospital: hospital,
                profileType: this.props.profile.disaseInfo.profileType 
            }
        });
        console.log("clicked");
            console.log(this.props.profile.name);
            console.log(this.state.stName);
    }

    render() {
        console.log('PROFILE FORM render oldu');
        console.log(this.props.profile.name);
        console.log(this.state.stName);
        console.log(this.state.stEmail);
        console.log(this.state.stAge);
        console.log(this.state.stProvince);
        console.log(this.state.stDisaseType);
        console.log(this.state.stDisaseStage);
        console.log(this.state.stCureNumber);
        console.log(this.state.stHospital);
        return (
            <ScrollView style={styles.container}>
                <View style={styles.subContainerStyle} >
                    <Image source={require('../profiles/profile-ufuk.jpg')} style={{ width: 100, height: 100 }} />
                    <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={styles.profileNameStyle}>{this.props.profile.name}</Text>
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
                    <TextInput style={styles.inputStyle}
                     placeholder={this.props.profile.name}
                     value={this.state.stName}
                     onChangeText={degisen => this.setState({stName: degisen })}  
                    />
                </View>
                <View style={styles.subContainerStyle} >
                    <TextInput style={styles.inputStyle} 
                    placeholder={this.props.profile.email} 
                    value={this.state.stEmail}
                    onChangeText={degisen => this.setState({stEmail: degisen })}  
                    />
                </View>
                <View style={styles.subContainerStyle} >
                    <TextInput style={styles.inputStyle} 
                    placeholder={this.props.profile.age} 
                    value={this.state.stAge}
                    onChangeText={degisen => this.setState({stAge: degisen })}  
                    />
                </View>
                <View style={styles.subContainerStyle} >
                    <TextInput style={styles.inputStyle} 
                    placeholder={this.props.profile.province} 
                    value={this.state.stProvince}
                    onChangeText={degisen => this.setState({stProvince: degisen })}  
                    />
                </View>
                <View style={styles.subContainerStyle} >
                    <TextInput style={styles.inputStyle}
                     placeholder={this.props.disase.disaseType} 
                     value={this.state.stDisaseType}
                     onChangeText={degisen => this.setState({stDisaseType: degisen })}  
                    />
                </View>
                <View style={styles.subContainerStyle} >
                    <TextInput style={styles.inputStyle} 
                    placeholder={this.props.disase.disaseStage}
                    value={this.state.stDisaseStage}
                    onChangeText={degisen => this.setState({stDisaseStage: degisen })}  
                    />
                </View>
                <View style={styles.subContainerStyle} >
                    <TextInput style={styles.inputStyle} 
                    placeholder={this.props.disase.cureNumber} 
                    value={this.state.stCureNumber}
                    onChangeText={degisen => this.setState({stCureNumber: degisen })}  
                    />
                </View>
                <View style={styles.subContainerStyle} >
                    <TextInput style={styles.inputStyle} 
                    placeholder={this.props.disase.hospital} 
                    value={this.state.stHospital}
                    onChangeText={degisen => this.setState({stHospital: degisen })}  
                    />
                </View>
                <View style={styles.subContainerStyle} >
                    <Button onPress={() => this.clicked(this.state)}> GÜNCELLE </Button>
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

const mapStateToProps = ({ profileResponse }) => {
    const profile = profileResponse;
    console.log("PROFILE FORM MAPSTATETOPROPS profileResponse");
    console.log(profile);
    console.log(profileResponse);
    let disase;
    if (profileResponse.disaseInfo === undefined){
         disase = {};
    } else {
         disase = profileResponse.disaseInfo;
    }
    return { profile, disase };
 };
 
 export default connect(mapStateToProps, { actProfileLoad })(ProfileForm);
//export default ProfileForm;
