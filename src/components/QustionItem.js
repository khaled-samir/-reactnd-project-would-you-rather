import React, { Component } from 'react';

class QustionItem extends Component {
    render() {
        return (
            <li class="list-group-item">
                <h3>Would you rather</h3>
                <h4>write JavaScript ... or</h4>
                <button className="btn btn-primary">Answer Poll</button>

            </li>
        );
    }
}

export default QustionItem;