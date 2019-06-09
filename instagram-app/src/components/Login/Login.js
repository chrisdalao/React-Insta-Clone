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
        localStorage.setItem('username', username.toLowerCase());
    }

    render() {
        return (
            <div className="login">
                <form action="login-form" className="login-form">
                    <img src="https://cdn2.downdetector.com/static/uploads/logo/Instagram_Logo_Large.png" alt="" />
                    <input
                        name='username'
                        type="text"
                        onChange={this.handleLoginChange}
                        className="username-input"
                        placeholder="Username"
                    />
                    <input
                        name='password'
                        type="password"
                        onChange={this.handleLoginChange}
                        className="password-input"
                        placeholder="Password"
                    />
                    <button onClick={this.login}>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login
