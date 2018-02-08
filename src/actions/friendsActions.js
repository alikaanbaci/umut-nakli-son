import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { FRIENDS_LOAD } from './types';

export const actFriendsLoad = () => {
    console.log("actFriendsLoad calisti");
    const { currentUser } = firebase.auth();
    const database = firebase.database();
    const arr = [];
    return (dispatch) => {
        database.ref('kullanicilar/' + currentUser.uid + '/friends')
    .on('value', snapshot => {
        if (snapshot.val() === null)
        {
            dispatch({ type: FRIENDS_LOAD, payload: {} });
        }
        else {
            //Buraya sonradan bak.
            snapshot.forEach((childSnapshot) => {
                const gelen = childSnapshot.val();
                console.log("friends uid");
                console.log(gelen.friendsUid);
                const database2 = firebase.database();
                database2.ref('kullanicilar/' + gelen.friendsUid + '/name')
                .on('value', (snapshot2) => {
                console.log("FRIENDS LOAD gelen user:");
                const element = {};
                element.name = snapshot2.val();
                element.friendsUid = gelen.friendsUid;
                console.log(element.name);
                console.log(element.friendsUid);
                arr.push(element);
            });
        });
                console.log(arr);
                dispatch({ type: FRIENDS_LOAD, payload: arr });
    }
});
        };
};
