import React,{useState} from 'react'
import {useDispatch} from 'react-redux'

export default function Login(props){
    const dispatch = useDispatch()
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const handleInput = (e)=>{
        const input  = e.target.name
        if(input === "email"){
            setEmail(e.target.value)
        } else if(input ==="password"){
            setPassword(e.target.value)
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const formData = {
            email : email,
            password : password
        }

        dispatch()
        
    }

    return (
        <div>
            <h2>Login Form</h2>
            <form onSubmit ={handleSubmit}>
                <input type = "email" placeholder ="email" name ="email" value ={email} onChange ={handleInput}/> <br/>

                <input type ="password" placeholder ="password" name ="password" value ={password} onChange ={handleInput}/> <br/>

                <input type = 'submit' value ="submit"/>
            </form>
        </div>
    )
}