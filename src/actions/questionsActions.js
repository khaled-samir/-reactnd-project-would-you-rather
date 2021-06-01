import { store } from "..";
import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../_DATA";
import { receiveUsersData } from "./usersActions";

export const INIT_QUESTIONS = 'INIT_QUESTIONS'
// export const SAVE_ANSWER_QUESTION = 'SAVE_ANSWER_QUESTION'

export function receiveDataQuestions(questions) {
    return {
        type: INIT_QUESTIONS,
        questions,
    }
}

export function handelInitialDataQuestions() {
    return (dispatch) => {
        return Promise.all([
            _getQuestions(),
        ]).then(([questions]) => {

            //console.log('questions', questions)
            dispatch(receiveDataQuestions(questions))
            // console.log('Goals', goals)
        })

    }
}

export function handelAddNewQuestion(newQuestionObject) {

    return (dispatch) => {

        let { users, authedUser, questions } = store.getState()

        // console.log(newQuestionObject)
        return _saveQuestion(newQuestionObject).then((formattedQuestion) => {
            questions = {
                ...questions,
                [formattedQuestion.id]: formattedQuestion
            }

            users = {
                ...users,
                [authedUser]: {
                    ...users[authedUser],
                    questions: users[authedUser].questions.concat([formattedQuestion.id])
                }
            }
            dispatch(receiveDataQuestions(questions))
            dispatch(receiveUsersData(users))
        })
    }
}

export function handelSaveQuestionAnswer(answerObject) {

    return (dispatch) => {
        let { users, authedUser, questions } = store.getState()
        let { qid, answer } = answerObject

        // console.log('*************************************** handelSaveQuestionAnswer ****************************************')
        // console.log('users', users)
        // console.log('authedUser', authedUser)
        // console.log('questions', questions)
        // console.log('*************************************** handelSaveQuestionAnswer ****************************************')

        users = {
            ...users,
            [authedUser]: {
                ...users[authedUser],
                answers: {
                    ...users[authedUser].answers,
                    [qid]: answer
                }
            }
        }

        questions = {
            ...questions,
            [qid]: {
                ...questions[qid],
                [answer]: {
                    ...questions[qid][answer],
                    votes: questions[qid][answer].votes.concat([authedUser])
                }
            }
        }
        dispatch(receiveDataQuestions(questions))
        dispatch(receiveUsersData(users))
        return _saveQuestionAnswer(answerObject)
    }
}


