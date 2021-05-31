import { RECEIVE_DATA } from "../actions/usersActions"



export function users(state = [], action) {
    console.log(state)
    switch (action.type) {
        case RECEIVE_DATA: {
            return action.users
        }
        // case REMOVE_GOAL:
        //     return state.filter((goal) => goal.id !== action.id)
        // case TOGGLE_GOAL:
        //     return state.map((goal) => goal.id !== action.id ? goal :
        //         Object.assign({}, goal, { complete: !goal.complete })
        //     )
        // case RECEIVE_DATA:
        //     return action.goals
        default:
            return state

    }

}
