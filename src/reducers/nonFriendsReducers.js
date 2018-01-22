import { NONFRIENDS_LOAD } from '../actions/types';

const INITIAL_STATE = {
    name: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NONFRIENDS_LOAD:
            console.log('nonFriendsList reduceri çalıştı. Giden obje : ');
            
            /*const obj = { name: action.payload };
            console.log(obj);*/
            return action.payload;
            
        default:
            return state;
    }      
};
