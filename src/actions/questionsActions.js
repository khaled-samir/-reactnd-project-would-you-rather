import { _getQuestions } from "../_DATA";

export const INIT_QUESTIONS = 'INIT_QUESTIONS'

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

            console.log('questions', questions)
            dispatch(receiveDataQuestions(questions))
            // console.log('Goals', goals)
        })


    }
}


