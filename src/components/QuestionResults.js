import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

function QuestionResults(props) {
    // let history = useHistory();

    const { questions, users, authedUser, question } = props
    // debugger
    // if(question === undefined){
    const theQuestion = question || questions[props.match.params.id]

    // }
    const theAuthor = users[theQuestion.author]
    const theAuthedUser = users[authedUser]

    const theAuthedUserAnswer = theAuthedUser.answers[theQuestion.id]

    if (theQuestion === undefined || theAuthedUserAnswer === undefined) {
        return "";
    }

    // console.log(props)
    // // history.push('/')
    // console.log(questions)
    // console.log(users)
    // console.log('authedUser', authedUser)
    // console.log('theAuthedUser', theAuthedUser)
    // console.log('theQuestion', theQuestion)
    // console.log('theAuthor', theAuthor)
    return (
        <div className="col-xs-offset-3 col-xs-6 text-center answer-questions">
            <h4>Results:</h4>

            <div className="input-group width-100">
                <img
                    src={theAuthor.avatarURL ? theAuthor.avatarURL : "https://via.placeholder.com/20x20"}
                    alt=""
                    className="img-thumbnail"
                    width="150" />
                <h4>{theAuthor.name} asks:</h4>
                <h4>Would you rather</h4>
                <h3>{theQuestion.optionOne.text}</h3>
                <h4>{theQuestion.optionOne.votes.length} out of {theQuestion.optionOne.votes.length + theQuestion.optionTwo.votes.length} votes</h4>
                <span className='bg-primary text-warning'>{theAuthedUserAnswer === "optionOne" ? "You Voted for this option" : ''}</span>

                <h4>or</h4>

                <h3>{theQuestion.optionTwo.text}</h3>
                <h4>{theQuestion.optionTwo.votes.length} out of {theQuestion.optionOne.votes.length + theQuestion.optionTwo.votes.length} votes</h4>
                <span className='bg-primary text-warning'>{theAuthedUserAnswer === "optionTwo" ? "You Voted for this option" : ''}</span>

                <hr />
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