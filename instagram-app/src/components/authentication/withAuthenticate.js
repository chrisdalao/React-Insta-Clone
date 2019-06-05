import React from 'react';

const withAuthenticate = Comp =>
    class extends React.Component {
        render() {
            return (
                <Comp />
            )
        }
    };

export default withAuthenticate;
