import firebase  from 'firebase';
import { Actions } from 'react-native-router-flux';
import { NONFRIENDS_LOAD } from './types';

export const actNonFriendsLoad = () => {
    const database = firebase.database();
    //const storage = firebase.storage();

    console.log('actNonFriendsLoad metodu çalıştı');
    /*database.ref('kullanicilar').on('value', snapshot => {
        snapshot.forEach((childSnapshot) => {
            console.log('AHAAAAAAA VERİLER GELDİ LA');
            //console.log(childSnapshot.key);
            console.log(childSnapshot.val());
            const adaminismi = childSnapshot.val();
            console.log('ADAMIN İSMİ-->');
            console.log(adaminismi.name);
            console.log('-------------------------------');
        });
    })*/

    return (dispatch) => {
        database.ref(`kullanicilar`)
            .on('value', snapshot => {
                //console.log('AAA VERİLER GELDİ-------');
                //console.log(snapshot.val());
                //snapshot.forEach((childSnapshot) => {
                    //console.log(childSnapshot.key);
                    //console.log(childSnapshot.val());
                if (snapshot.val() === null)
                {
                    dispatch({ type: NONFRIENDS_LOAD, payload: {} });
                }
                else {
                    snapshot.forEach((childSnapshot) => {
                        const gelenuser = childSnapshot.val();
                        dispatch({ type: NONFRIENDS_LOAD, payload: snapshot.val() });
                    });
                }
            });
    };
};
/*
export const actSendFriendshipRequest = () => {
    const database = firebase.database();
    console.log("REQUEST ACTION CALISTI");
    return (dispatch) => {
        database.ref(`kullanicilar`)
            .on('value', snapshot => {
                //console.log('AAA VERİLER GELDİ-------');
                //console.log(snapshot.val());
                //snapshot.forEach((childSnapshot) => {
                    //console.log(childSnapshot.key);
                    //console.log(childSnapshot.val());
                if (snapshot.val() === null)
                {
                    dispatch({ type: NONFRIENDS_LOAD, payload: {} });
                }
                else {
                    snapshot.forEach((childSnapshot) => {
                        const gelenuser = childSnapshot.val();
                        dispatch({ type: NONFRIENDS_LOAD, payload: snapshot.val() });
                    });
                }
            });
    };
};
*/
