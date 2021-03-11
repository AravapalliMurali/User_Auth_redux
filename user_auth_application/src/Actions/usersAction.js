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