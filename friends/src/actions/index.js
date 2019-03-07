import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export const FRIENDS_FETCHING = 'FRIENDS_FETCHING';
export const FRIENDS_SUCCESS = 'FRIENDS_SUCCESS';
export const FRIENDS_FAILURE = 'FRIENDS_FAILURE';

export const login = creds => dispatch => {

    dispatch({ type: LOGIN_START });
    return axios.post('http://localhost:5000/api/login', creds).then(res => {
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload });
        getData();
    });
};

export const getData = () => {
    axios
        .get('http://localhost:5000/api/friends', {
            headers: { Authorization: localStorage.getItem('token') }
        })
        .then(res => {
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        })
}

export const getFriends = () => dispatch => {

    dispatch({ type: FRIENDS_FETCHING });

    axios
        .get('http://localhost:5000/api/friends')
        .then(res => {
            dispatch({
                type: FRIENDS_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: FRIENDS_FAILURE,
                payload: err.response.data.error.message
            });
        });
}