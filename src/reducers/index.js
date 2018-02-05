import { combineReducers } from 'redux';
import authenticationReducers from './AuthenticationReducers';
import postListReducers from './PostListReducers';
import registerReducers from './RegisterReducers';
import nonFriendsReducers from './nonFriendsReducers';
import friendshipRequestReducers from './friendshipRequestReducers';
import incomingRequestReducers from './incomingRequestReducers';

export default combineReducers({
    //kimlikDogrulamaReducerstan return edilen deger neyse kimlikDogrulamaResponsea atılıyor.
   authenticationResponse: authenticationReducers,
   postListResponse: postListReducers,
   registerResponse: registerReducers,
   nonFriendsResponse: nonFriendsReducers,
   friendshipRequestResponse: friendshipRequestReducers,
   incomingRequestResponse: incomingRequestReducers
});
