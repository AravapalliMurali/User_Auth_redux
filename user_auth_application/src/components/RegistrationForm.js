import React,{useState } from 'react'
import {useDispatch} from 'react-redux'
import {startGetData} from '../Actions/usersAction'

export default function RegistrationForm(props){
    const dispatch = useDispatch()
    const [userName , setUserName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const handleInput =(e)=>{
        const input = e.target.name
        if(input === "name"){
            setUserName(e.target.value)
        } else if(input === 'email'){
            setEmail(e.target.value)
        } else if(input === 'password'){
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const formData={
            username : userName,
            email : email,
            password : password
        }

        dispatch(startGetData(formData))

        // reset form 
        setUserName('')
        setEmail('')
        setPassword('')
    }

    return(
        <div>
            <h2>User Registration Form</h2>
            <form onSubmit ={handleSubmit}>
                <input type = "text" placeholder = "userName" name = "name" value ={userName} onChange ={handleInput} /> <br/>

                <input type = "email" placeholder ="email" name ="email" value ={email} onChange ={handleInput}/> <br/>

                <input type ="password" placeholder ="password" name ="password" value ={password} onChange ={handleInput}/> <br/>

                <input type = 'submit' value ="submit"/>
            </form>
        </div>
    )
}
