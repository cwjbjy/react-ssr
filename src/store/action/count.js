import * as types from '../action-types'

const INCREMENT = (value) => {
    return {
        type: types.INCREMENT,
        value
    }
}

const DECREMENT = (value) => {
    return {
        type: types.DECREMENT,
        value
    }
}

export {INCREMENT,DECREMENT}