import React from 'react';
import { connect } from 'react-redux';

class Login extends React.Component {
    state = {
        credentials: {
            username: '';
            password: '';
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.login}>
                    <input 
                        type='text' 
                        name='username' 
                        value={this.state.credentials.username} 
                        onChange={this.handleChange} 
                    />
                    <input 
                        type='password' 
                        name='password' 
                        value={this.state.credentials.password} 
                        onChange={this.handleChange} 
                    />
                    <button>Log in</button>
                </form>
            </div>
        );
    }
}

export default connect(null, { login })(Login)