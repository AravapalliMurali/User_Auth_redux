import axios from 'axios'

export function startGetData(formData){
    return(dispatch)=>{
        axios.post('http://dct-user-auth.herokuapp.com/users/register',formData)
            .then((response)=>{
                const result = response.data
                dispatch(setData(result))
            })
    }
}

export function setData(data){
    return{
        type : "POST_DATA",
        payload : data
    }
}