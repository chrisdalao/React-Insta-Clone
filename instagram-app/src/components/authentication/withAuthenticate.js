import React from 'react';

const withAuthenticate = Comp => Auth =>
    class extends React.Component {

        constructor() {
            super();
            this.state = {
                loggedIn: false
            }
        }

        componentDidMount() {
            if (!localStorage.getItem('username')) {
                this.setState({ loggedIn: false });
            } else {
                this.setState({ loggedIn: true });
            }
        }

        render() {
            return this.state.loggedIn ? <Comp /> : <Auth />
        }
    };

export default withAuthenticate;
