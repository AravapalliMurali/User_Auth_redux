import axios from 'axios'

// registration form action creators 
export function startGetData(formData ,navigate){
    return(dispatch)=>{
        axios.post('http://dct-user-auth.herokuapp.com/users/register',formData)
            .then((response)=>{
                const result = response.data
                if(result.hasOwnProperty('errors')){
                    alert(result.message)
                } else {
                    alert('successfully created an account')
                    dispatch(setData(result))
                    navigate('/login')
                }
            })
            .catch((err)=>{
                console.log(err.message)
            })
    }
}

export function setData(data){
    return{
        type : "POST_DATA",
        payload : data
    }
}

// users details action creators

export function startGetUserInfo(id){
    return (dispatch)=>{
        axios.get('http://dct-user-auth.herokuapp.com/users/account',{
        headers:{
            "x-auth":localStorage.getItem('token')
        }
    })
        . then((response)=>{
            const result = response.data
            //console.log('id:',result._id)
            dispatch(getUser(result))
        })
        .catch((err)=>{
            console.log(err.message)
        })
    }
}

export function getUser(id){
    return {
        type : "USER_INFO",
        payload : id
    }
}

// clearing the store of userInfo

export const startClearStore=()=>{
    return (dispatch)=>{
        dispatch(clearStore())
    }
}

export const clearStore=()=>{
    return {
        type : "CLEAR"
    }
}

// adding notes action creator 
export const startGetAddNotes= (formData) =>{
    return (dispatch)=>{

        axios.post('http://dct-user-auth.herokuapp.com/api/notes',formData ,{
            headers :{
                "x-auth" : localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result  = response.data
            if(Object.keys(result).includes('errors')){
                alert(result.message)
            } else{
                alert(`${result.title} notes  is successfully saved`)
                dispatch(addNotes(result))
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
    }
}
export const addNotes=(data)=>{
    return {
        type : "ADD_NOTES" , 
        payload : data
    }

}

// get notes action creator 

export const startGetNotse = ()=>{
    return (dispatch)=>{
        axios.get('http://dct-user-auth.herokuapp.com/api/notes',{
            headers : {
                "x-auth":localStorage.getItem('token')
            }
        })
        .then((response)=>{
            const result = response.data
            dispatch(getNotes(result))
        })
        .catch((err)=>{
            console.log('catch error:',err.message)
        })
    }
}

export const getNotes=(notes)=>{
    return {
        type : "GET_NOTES" ,
        payload : notes
    }
}