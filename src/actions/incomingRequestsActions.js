import firebase  from 'firebase';
import { Actions } from 'react-native-router-flux';
import { INCOMING_REQUEST_LOAD } from './types';

export const actIncomingRequestLoad = () => {
    const database = firebase.database();
    const { currentUser } = firebase.auth();
    const arr = [];
    return (dispatch) => {
        database.ref('kullanicilar/' + currentUser.uid + '/incomingFriendshipRequest')
            .on('value', snapshot => {
                if (snapshot.val() === null)
                {
                    dispatch({ type: INCOMING_REQUEST_LOAD, payload: {} });
                }
                else {
                    snapshot.forEach((childSnapshot) => {
                        const gelen = childSnapshot.val();
                        console.log("requester uid");
                        console.log(gelen.requesterUid);
                        database.ref('kullanicilar/' + gelen.requesterUid + '/name')
                        .on('value', (snapshot2) => {
                        console.log("ACT INCOMING REQUEST LOAD gelen user:");
                        const element = {};
                        element.name = snapshot2.val();
                        console.log(element.name);
                        arr.push(element);
                    });
                });
                        console.log(arr);
                        dispatch({ type: INCOMING_REQUEST_LOAD, payload: arr });
            }
        });
    };
};
