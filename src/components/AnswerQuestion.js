import React, { Component } from 'react';
import { connect } from 'react-redux';


class AnswerQuestion extends Component {
    render() {

        const { questions, users, authedUser } = this.props
        // debugger
        console.log(this.props.match.params);
        console.log(questions);
        console.log(users);
        console.log(authedUser);
        return (
            <div className="answer-questions">

                <div className="input-group">
                    <h3>Would you rather</h3>
                    <button className="btn btn-primary">write JavaScript</button>
                    <h4>or</h4>
                    <button className="btn btn-primary">CSS</button>

                </div>
            </div>
        );
    }
}

// authedUser: state.authedUser
// authedUser: state.authedUser,
// questions: state.questions,
// users: state.users,
function mapStateToProps({ authedUser, questions, users }) {
    // const question = questions[id]
    return {
        questions,
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(AnswerQuestion);