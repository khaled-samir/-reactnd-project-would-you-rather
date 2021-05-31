import { SET_AUTHED_USER } from "../actions/authedUser"


export function authedUser(state = "", action) {
    console.log(state)
    switch (action.type) {
        case SET_AUTHED_USER: {
            return action.user
        }
        // case REMOVE_GOAL:
        //     return state.filter((goal) => goal.id !== action.id)
        // case TOGGLE_GOAL:
        //     return state.map((goal) => goal.id !== action.id ? goal :
        //         Object.assign({}, goal, { complete: !goal.complete })
        //     )
        // case SET_AUTHED_USER:
        //     return action.goals
        default:
            return state

    }

}
