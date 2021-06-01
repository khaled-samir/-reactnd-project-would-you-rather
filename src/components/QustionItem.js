import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class QustionItem extends Component {
    render() {
        const { question, users } = this.props
        const theAuthor = users[question.author]

        return (
            <li className="list-group-item">
                {/* {JSON.stringify(theAuthor)} */}
                <img
                    src={theAuthor.avatarURL ? theAuthor.avatarURL : "https://via.placeholder.com/20x20"}
                    alt=""
                    className="img-thumbnail"
                    width="100" />
                <h4>{theAuthor.name} asks:</h4>
                <h4>Would you rather</h4>
                <h4>{question.optionOne.text}... or</h4>
                {/* <h4>write JavaScript ... or</h4> */}
                <Link className="btn btn-primary" to={`/question/${question.id}`}>Answer Poll</Link>
                {/* <button className="btn btn-primary">Answer Poll</button> */}

            </li>
        );
    }
}

export default connect((state) => ({
    users: state.users,
    store: state.store,
}))(QustionItem);