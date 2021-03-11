import {createStore , combineReducers , applyMiddleware} from 'redux'
import userAuthReducer from '../reducers/userAuthReducer'
import thunk from 'redux-thunk'
import userInfoReducers from '../reducers/userInfoReducers'

export default function configureStore(){
    //const userDetails  = JSON.parse(localStorage.getItem("userDetails"))
    const store = createStore(combineReducers({
        FormData : userAuthReducer,
        userINFO : userInfoReducers

    }),applyMiddleware(thunk))
    return store
}