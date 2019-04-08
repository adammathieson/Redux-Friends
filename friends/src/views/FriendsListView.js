import React from 'react';
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner';

import { FriendsList } from '../components';

import { getFriends } from '..actions';

class FriendsListView extends React.Component {

    componentDidMount() {
        this.props.getFriends();
    }
    
    render() {
        if (this.props.fetchingFriends) {
            return (
                <Loader type='Ball-Triangle' color='#00bfff' height='90' width='60' />
            )
        }
        
        return (
            <div className='friendsList-wrapper'>
                <FriendsList friends={this.props.friends} />
            </div>
        )
    }
} 

const mapStateToProps = state => ({
    fetchingFriends: state.friendsReducer.fetchingFriends,
    friends: state.friendsReducer.friends
});

export default connect(mapStateToProps, { getFriends })(FriendsListView);

    