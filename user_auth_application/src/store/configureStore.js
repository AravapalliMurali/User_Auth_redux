import {createStore , combineReducers} from 'redux'
import userAuthReducer from '../reducers/userAuthReducer'

export default function configureStore(){
    const store = createStore(combineReducers({
        FormData : userAuthReducer
    }))
    return store
}