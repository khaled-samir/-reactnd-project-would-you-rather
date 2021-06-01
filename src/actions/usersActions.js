import { _getUsers } from "../_DATA"

export const RECEIVE_DATA = 'RECEIVE_DATA'

export function receiveUsersData(users) {
    return {
        type: RECEIVE_DATA,
        users,
    }
}


export function handelInitialUsersData() {
    return (dispatch) => {
        return Promise.all([
            _getUsers(),
        ]).then(([users]) => {

            //console.log('users', users)
            dispatch(receiveUsersData(users))
            // console.log('Goals', goals)
        })


    }
}

