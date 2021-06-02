import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class GenericNotFound extends Component {
    render() {
        return (
            <h1>
                Not Found 404
                <Link to="/"> Go Home</Link>
            </h1>
        );
    }
}

export default GenericNotFound;