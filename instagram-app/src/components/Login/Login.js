import React from 'react';
import './Login.scss';

class Login extends React.Component {

    state = {
        username: '',
        password: ''
    }

    handleLoginChange = e => this.setState({ [e.target.name]: e.target.value });

    login = () => {
        const username = this.state.username;
        localStorage.setItem('username', username);
        window.location.reload();
    }

    render() {
        return (
            <form action="">
                <div>
                    <input
                        name='username'
                        type="text"
                        onChange={this.handleLoginChange}
                    />
                    <input
                        name='password'
                        type="text"
                        onChange={this.handleLoginChange}
                    />
                    <button onClick={this.login}>Log In</button>
                </div>
            </form>
        )
    }
}

export default Login
