import { FRIENDS_FETCHING, FRIENDS_SUCCESS, FRIENDS_FAILURE } from '../actions';

const initialState = {
    fetchingFriends: false,
    error: '',
    friends: []
}

export const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case FRIENDS_FETCHING:
            return {
                ...state,
                error: '',
                fetchingFriends: true
            };
        case FRIENDS_SUCCESS:
            return {
                ...state,
                error: '',
                fetchingFriends: false,
                friends: action.payload
            }
        case FRIENDS_FAILURE:
            return {
                ...state,
                error: action.payload,
                fetchingFriends: false,
            }
        default:
            return state;
    }
}