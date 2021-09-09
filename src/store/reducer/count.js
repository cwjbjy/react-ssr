import * as types from '../action-types'

const initState = {
    count: 0,
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case types.INCREMENT:
            return {
                count: state.count + action.value
            }
            case types.DECREMENT:
                return {
                    count: state.count - action.value
                }
                default:
                    return state
    }
}

export default reducer