import React from 'react';
import { connect } from 'react-redux';

import Loader from 'react-loader-spinner';

import { FriendsList } from '../components';

class FriendsListView extends React.Component {

    componentDidMount() {
        this.props.getFriends();
    }
    
    render() {
        if (this.props.fetching) {
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
    fetching: state.friendsReducer.fetching,
    friends: state.friendsReducer.friends
});

export default connect(mapStateToProps, { getFriends })(FriendsListView);

    