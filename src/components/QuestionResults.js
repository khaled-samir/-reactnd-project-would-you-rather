import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function QuestionResults(props) {
    // let history = useHistory();

    const { questions, users, authedUser } = props
    const qustion = questions[props.match.params.id]
    const theAuthor = users[qustion.author]
    const theAuthedUser = users[authedUser]
    if (qustion === undefined) {
        return "";
    }

    console.log(props)
    // history.push('/')
    console.log(questions)
    console.log(users)
    console.log('authedUser', authedUser)
    console.log('theAuthedUser', theAuthedUser)
    console.log('qustion', qustion)
    console.log('theAuthor', theAuthor)
    return (
        <div className="col-xs-offset-3 col-xs-6 text-center answer-questions">
            <h4>Results:</h4>
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

                <h3>{qustion.optionOne.text}</h3>
                <h4>{qustion.optionOne.votes.length} out of {qustion.optionOne.votes.length + qustion.optionTwo.votes.length} votes</h4>
                {/* <button className="btn btn-primary" onClick={() => {
                    const answerObject2 = { "authedUser": authedUser, "qid": qustionId, "answer": "optionOne" }
                    dispatch(handelSaveQuestionAnswer(answerObject2))
                    history.push('/resultsQuestions/' + qustionId)
                }}>{qustion.optionOne.text}</button> */}
                <h4>or</h4>

                <h3>{qustion.optionTwo.text}</h3>
                <h4>{qustion.optionTwo.votes.length} out of {qustion.optionOne.votes.length + qustion.optionTwo.votes.length} votes</h4>
                {/* <button className="btn btn-primary" onClick={() => {
                    const answerObject2 = { "authedUser": authedUser, "qid": qustionId, "answer": "optionTwo" }
                    dispatch(handelSaveQuestionAnswer(answerObject2))
                    history.push('/resultsQuestions/' + qustionId)
                }}>{qustion.optionTwo.text}</button> */}

            </div>
        </div>
    )


}

export default connect((state) => ({
    store: state.store,
    questions: state.questions,
    users: state.users,
    authedUser: state.authedUser,
}))(QuestionResults);