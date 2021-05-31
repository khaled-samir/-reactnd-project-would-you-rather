import React, { Component } from 'react';
import { connect } from 'react-redux';

class AnswerQuestion extends Component {
    render() {
        console.log(this.props);
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

export default connect((state) => ({
    store: state.store,
}))(AnswerQuestion);