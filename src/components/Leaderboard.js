import React, { Component } from 'react';
import { connect } from 'react-redux';

class Leaderboard extends Component {
    render() {
        const { users } = this.props

        return (
            <div>
                {Object.entries(users).map(([usersKey, usersValue]) => {

                    const answeredQuestions = Object.keys(usersValue.answers).length
                    const createdQuestions = usersValue.questions.length




                    return <div key={usersValue.id} className="col-sm-6 col-md-4">
                        <div className="thumbnail">
                            <img src={usersValue.avatarURL} width="100" alt="" />
                            <div className="caption">
                                <h4>{usersValue.name}</h4>
                                <p>Answered questions: {answeredQuestions}</p>
                                <p>Created questions: {createdQuestions}</p>
                                <p>Score: {answeredQuestions + createdQuestions}</p>
                            </div>
                        </div>
                    </div>
                })}


                {/* <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src="https://via.placeholder.com/200x200" alt="..." />
                        <div className="caption">
                            <h3>Thumbnail label</h3>
                            <p>and save to reload.</p>
                            <p>
                                <a href="#" className="btn btn-primary" role="button">Button</a>
                                <a href="#" className="btn btn-default" role="button">Button</a></p>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6 col-md-4">
                    <div className="thumbnail">
                        <img src="https://via.placeholder.com/200x200" alt="..." />
                        <div className="caption">
                            <h3>Thumbnail label</h3>
                            <p>and save to reload.</p>
                            <p>
                                <a href="#" className="btn btn-primary" role="button">Button</a>
                                <a href="#" className="btn btn-default" role="button">Button</a></p>
                        </div>
                    </div>
                </div> */}
            </div>
        );
    }
}

export default connect((state) => ({
    users: state.users,
    store: state.store,
}))(Leaderboard);