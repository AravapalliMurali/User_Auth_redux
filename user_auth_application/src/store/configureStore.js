import {createStore , combineReducers , applyMiddleware} from 'redux'
import userAuthReducer from '../reducers/userAuthReducer'
import thunk from 'redux-thunk'
import userInfoReducers from '../reducers/userInfoReducers'
import notesReducers from '../reducers/notesReducers'

export default function configureStore(){
    //const userDetails  = JSON.parse(localStorage.getItem("userDetails"))
    const store = createStore(combineReducers({
        FormData : userAuthReducer,
        userINFO : userInfoReducers , 
        notes: notesReducers

    }),applyMiddleware(thunk))
    return store
}