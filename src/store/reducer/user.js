import * as types from '../action-types'

const initState = {
    users: [],
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.GETUSER:
            return Object.assign({},state,{users:action.value})
        default:
            return state
    }
}

export default reducer