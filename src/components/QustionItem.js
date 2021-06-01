import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class QustionItem extends Component {
    render() {
        const { question } = this.props
        // debugger
        return (
            <li className="list-group-item">
                <h3>Would you rather</h3>
                <h4>{question.optionOne.text}... or</h4>
                {/* <h4>write JavaScript ... or</h4> */}
                <Link className="btn btn-primary" to={`/question/${question.id}`}>Answer Poll</Link>
                {/* <button className="btn btn-primary">Answer Poll</button> */}

            </li>
        );
    }
}

export default connect((state) => ({
    store: state.store,
}))(QustionItem);