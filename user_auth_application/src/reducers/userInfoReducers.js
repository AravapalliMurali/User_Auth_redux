
const userInfo = []

export default function userInfoReducers(state = userInfo , action ){
    switch(action.type){
        case "USER_INFO" : {
            return [...state , {...action.payload}]
       }

       case "CLEAR" :{
           return userInfo
       }
        default : {
            return [...state]
        }
    }
}