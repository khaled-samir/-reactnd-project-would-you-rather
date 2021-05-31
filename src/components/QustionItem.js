import React, { Component } from 'react';
import { connect } from 'react-redux';

class QustionItem extends Component {
    render() {
        return (
            <li className="list-group-item">
                <h3>Would you rather</h3>
                <h4>write JavaScript ... or</h4>
                <button className="btn btn-primary">Answer Poll</button>

            </li>
        );
    }
}

export default connect((state) => ({
    store: state.store,
}))(QustionItem);