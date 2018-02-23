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
        console.log("on calisti");
        if (snapshot.val() === null)
        {   
            console.log("if calisti");
            dispatch({ type: FRIENDS_LOAD, payload: {} });
        }
        else {
            //Buraya sonradan bak.
            snapshot.forEach((childSnapshot) => {
                const gelen = childSnapshot.val();
                console.log("friends uid");
                console.log(gelen.friendsUid);
                const database2 = firebase.database();
                database2.ref('kullanicilar/' + gelen.friendsUid)
                .on('value', (snapshot2) => {
                console.log("FRIENDS LOAD gelen user:");
                console.log(snapshot2.val());
                const element = {};
                element.name = snapshot2.val().name;
                element.age = snapshot2.val().age;
                element.province = snapshot2.val().province;
                element.disase = snapshot2.val().disaseInfo;
                element.friendsUid = gelen.friendsUid;
                element.url = snapshot2.val().profile.url;
                //console.log(element.name);
                //console.log(element.friendsUid);

                arr.push(element);
                //console.log(arr);
                //dispatch({ type: FRIENDS_LOAD, payload: arr });
            });
        });
               console.log(arr);
               dispatch({ type: FRIENDS_LOAD, payload: arr });
    }
});
        };
};
