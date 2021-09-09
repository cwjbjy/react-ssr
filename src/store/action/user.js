import * as types from '../action-types'

export const GETUSER = (value) => {
    return dispatch =>{
        fetch('http://localhost:4001/api/users').then((res) => res.json())
        .then((res) => {
            dispatch({
                type:types.GETUSER,
                value:res
            })
        });
    }
}

