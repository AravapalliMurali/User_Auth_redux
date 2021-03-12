const notesInitialvalue = []

export default function notesReducers( state = notesInitialvalue , action ){

    switch(action.type){
        case "GET_NOTES" :{
            return [...action.payload]
        }
        
        case "ADD_NOTES" : {
            return [...state , {...action.payload}]
        }

        default : {
            return [...state]
        }
    }
}