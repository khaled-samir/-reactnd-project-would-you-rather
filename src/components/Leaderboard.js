import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
    render() {
        const { users } = this.props

        return (
            <div>
                {Object.entries(users).sort((a, b) => {
                    // console.log(a[1])
                    // console.log(b[1])
                    const answeredQuestionsB = Object.keys(b[1].answers).length
                    const createdQuestionsB = b[1].questions.length
                    const scoreB = answeredQuestionsB + createdQuestionsB
                    const answeredQuestionsA = Object.keys(a[1].answers).length
                    const createdQuestionsA = a[1].questions.length
                    const scoreA = answeredQuestionsA + createdQuestionsA
                    return scoreB - scoreA
                }).map(([usersKey, usersValue]) => {

                    const answeredQuestions = Object.keys(usersValue.answers).length
                    const createdQuestions = usersValue.questions.length
                    const score = answeredQuestions + createdQuestions

                    return <div key={usersValue.id} className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={usersValue.avatarURL} width="100" alt="" />
                            <div className="caption">
                                <h4>{usersValue.name}</h4>
                                <p>Answered questions: {answeredQuestions}</p>
                                <p>Created questions: {createdQuestions}</p>
                                <p>Score: {score}</p>
                            </div>
                        </div>
                    </div>
                })}

            </div>
        );
    }
}

export default connect((state) => ({
    users: state.users,
    store: state.store,
}))(Leaderboard);