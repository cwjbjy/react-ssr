import { createStore } from 'redux'
import rootReducer from './reducer'

const getStore = ()=>{
    return createStore(rootReducer)
}

export default getStore