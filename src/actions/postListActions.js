import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { POST_CHANGED, POST_CREATE, POST_LOAD, OTHER_POST_LOAD } from './types';

export const actPostChanged = ({ stPost }) => {
    console.log('actPostChanged metodu calıştı.----' + stPost);
    return (dispatch) => {
      dispatch({
          type: POST_CHANGED,
          payload: stPost 
      });
    };
};

export const actPostCreate = ( { prPost } ) => {
    console.log('actPostCreate metodu calıştı.');
    console.log( { prPost } );
    
    console.log("current user");
    console.log(currentUser.uid);

      //push fonksiyonu ikinci parametre almadığı için önce push ettiğimiz postun referansı alınıyor.
      const ref = firebase.database().ref('/postlar').push();
      console.log(ref.key);
      
      //ardndan bu referansın id'si kullanılarak o nodeun altına post ile ilgili bilgiler giriliyor.
      //aslında push ile bir prPost eklemiştik ama override oldu o. yani push(prPost) iken de üzerine 
      //yazdı sıkıntı olmadı. ama yine de ne olur ne olmaz pushun içini boş bırakalım.
      firebase.database().ref('postlar/' + ref.key).set({
        owner: currentUser.uid,
        post: prPost 
      });


    return (dispatch) => {
        firebase.database().ref(`/kullanicilar/${currentUser.uid}/postlar`)
            .push({ prPost })
                .then(() => {
                    dispatch({ type: POST_CREATE });
                    Actions.pop();
                });
    }
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

export const actPostLoad = ({ user }) => {
    console.log('actPostLoad metodu çalıştı, gelen user');
    console.log(user);
    const { currentUser } = firebase.auth();
    let uid;
    if (user.uid === undefined) {
        if (user.friendsUid === undefined){
            uid = currentUser.uid;
        }
        else {
            uid = user.friendsUid;
        } 
    }
    else {
        uid = user.uid;
    }
    
    console.log('firebase.auth sonucu :' + currentUser);
    return (dispatch) => {
        firebase.database().ref('/kullanicilar/' + uid + '/postlar')
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

export const actOtherPostsLoad = () => {
    console.log('actOtherPostLoad metodu çalıştı');
    return (dispatch) => {
       firebase.database().ref('postlar')
       .on('value', snapshot => {
           if(snapshot.val() === null)
           {
            dispatch({ type: OTHER_POST_LOAD, payload: {} });
           }
           else {
            dispatch({ type: OTHER_POST_LOAD, payload: snapshot.val() });
           }

       }); 
    };
};
