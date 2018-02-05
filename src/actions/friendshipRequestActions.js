import firebase  from 'firebase';
import { Actions } from 'react-native-router-flux';
import { FRIENDSHIP_REQUEST_LOAD } from './types';

export const actFriendshipRequestLoad = () => {
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        database.ref('kullanicilar/' + currentUser.uid + '/friendshipRequest')
            .on('value', snapshot => {
                //console.log('AAA VERİLER GELDİ-------');
                //console.log(snapshot.val());
                //snapshot.forEach((childSnapshot) => {
                    //console.log(childSnapshot.key);
                    //console.log(childSnapshot.val());
                if (snapshot.val() === null)
                {
                    dispatch({ type: FRIENDSHIP_REQUEST_LOAD, payload: {} });
                }
                else {
                    snapshot.forEach((childSnapshot) => {
                        const gelenuser = childSnapshot.val();
                        console.log("FRIENDSHIP REQUEST action :");
                        console.log(snapshot.val());
                        dispatch({ type: FRIENDSHIP_REQUEST_LOAD, payload: snapshot.val() });
                    });
                }
            });
    };
};