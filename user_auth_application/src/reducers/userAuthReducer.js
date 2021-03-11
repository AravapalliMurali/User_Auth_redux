const formInitaialValue = []

export default function userAuthReducer(state = formInitaialValue , action){
     switch(action.type){
          case "POST_DATA" : {
               return [...state , {...action.payload}]
          }
          case "USER_INFO" : {
               return state.find(ele=> ele._id === action.payload)
          }

          default :{
               return [...state]
          }
     }
}