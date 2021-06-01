import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handelSaveQuestionAnswer, saveQuestionAnswerAction } from '../actions/questionsActions';
import { _saveQuestionAnswer } from '../_DATA';


class AnswerQuestion extends Component {
    render() {

        const { questions, users, authedUser, dispatch } = this.props
        // console.log(this.props.match.params);
        const qustion = questions[this.props.match.params.id]
        if (qustion === undefined) {
            return "";
        }

        const theAuthor = users[qustion.author]
        const qustionId = qustion.id
        const qustionOptionOne = qustion.optionOne.text

        // console.log(qustion);
        // console.log(users);
        // console.log(authedUser);


        return (
            <div className="col-xs-offset-3 col-xs-6 text-center answer-questions">
                {/* <h3> {JSON.stringify(theAuthor)}</h3>
                <hr />
                <h3> {JSON.stringify(qustionId)}</h3> */}
                <div className="input-group width-100">
                    <img
                        src={theAuthor.avatarURL ? theAuthor.avatarURL : "https://via.placeholder.com/20x20"}
                        alt=""
                        className="img-thumbnail"
                        width="150" />
                    <h4>{theAuthor.name} asks:</h4>
                    <h4>Would you rather</h4>
                    <button className="btn btn-primary" onClick={() => {
                        const answerObject2 = { "authedUser": authedUser, "qid": qustionId, "answer": "optionOne" }
                        dispatch(handelSaveQuestionAnswer(answerObject2))
                    }}>{qustion.optionOne.text}</button>
                    <h4>or</h4>
                    <button className="btn btn-primary" onClick={() => {
                        const answerObject2 = { "authedUser": authedUser, "qid": qustionId, "answer": "optionTwo" }
                        dispatch(handelSaveQuestionAnswer(answerObject2))
                    }}>{qustion.optionTwo.text}</button>

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