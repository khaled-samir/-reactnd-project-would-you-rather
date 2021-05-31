import { _getUsers } from "../_DATA"

export const RECEIVE_DATA = 'RECEIVE_DATA'

export function receiveData(users) {
    return {
        type: RECEIVE_DATA,
        users,
    }
}


export function handelInitialData() {
    return (dispatch) => {
        return Promise.all([
            _getUsers(),
        ]).then(([users]) => {
            // debugger
            console.log('users', users)
            dispatch(receiveData(users))
            // console.log('Goals', goals)
        })


    }
}

