import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { POST_CHANGED, POST_CREATE, POST_LOAD } from './types';

export const actPostChanged = ({ stPost }) => {
    console.log('actPostChanged metodu calıştı.----' + stPost);
    return (dispatch) => {
      dispatch({
          type: POST_CHANGED,
          payload: stPost 
      });
    };
};

export const actPostCreate = ({ prPost }) => {
    console.log('actPostCreate metodu calıştı.');
    console.log({prPost });
    const { currentUser } = firebase.auth();
    return (dispatch) => {
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/postlar`)
            .push({ prPost })
                .then(() => {
                    dispatch({ type: POST_CREATE });
                    Actions.pop();
                });
    };
};

/*export const actTextInputPress = ({ stPressed }) => {
    console.log('TextInputa basılınca calisan action calisti');
     return (dispatch) => {
        dispatch({
            type: TEXTINPUTPRESSED,
            payload: stPressed
        });
     };
};*/

export const actPostLoad = () => {
    console.log('actPostLoad metodu çalıştı');
    const { currentUser } = firebase.auth();
    console.log('firebase.auth sonucu :' + currentUser);
    return (dispatch) => {
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/postlar`)
            .on('value', snapshot => {
                if (snapshot.val() === null)
                {
                    dispatch({ type: POST_LOAD, payload: {} });
                }
                else {
                    dispatch({ type: POST_LOAD, payload: snapshot.val() });
                }
               
            });
    };
};
