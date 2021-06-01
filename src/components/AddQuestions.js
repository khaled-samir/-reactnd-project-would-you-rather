import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { handelAddNewQuestion } from '../actions/questionsActions';

function AddQuestions(props) {
    let history = useHistory();
    function handelAddNewQuestionOnSubmit(e, author) {
        e.preventDefault();
        let optionOneElement = e.currentTarget.elements.optionOne,
            optionTwoElement = e.currentTarget.elements.optionTwo;
        let optionOneText = optionOneElement.value,
            optionTwoText = optionTwoElement.value;
        if (optionOneText.trim() === '' || optionTwoText.trim() === '') {
            return;
        }

        props.dispatch(handelAddNewQuestion({ optionOneText, optionTwoText, author }))
        history.push('/')
        // console.log(optionOneText, optionTwoText, author)
    }

    const authedUser = props.authedUser;
    return (
        <div className="col-xs-offset-4 col-xs-4 add-questions">

            <h3>Add question</h3>

            <div className="input-group width-100">
                <form onSubmit={(e) => { handelAddNewQuestionOnSubmit(e, authedUser) }}>
                    <label className="width-100">Would you rather...
                        <input className="form-control" name="optionOne" type="text" />
                    </label>
                    <label className="width-100">
                        or
                        <input className="form-control" name="optionTwo" type="text" />
                    </label>
                    <button type="submit" className="btn btn-primary">  Add</button>
                </form>
            </div>

        </div >
    );

}

export default connect((state) => ({
    store: state.store,
    dispatch: state.dispatch,
    authedUser: state.authedUser,
}))(AddQuestions);