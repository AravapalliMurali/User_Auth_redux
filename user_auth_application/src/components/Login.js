import React,{useState} from 'react'
import axios from 'axios'

export default function Login(props){
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
        axios.post('http://dct-user-auth.herokuapp.com/users/login', formData)
            .then((response)=>{
                const result  = response.data
                if(Object.keys(result).includes('error')){
                    alert(result.error)
                } else {
                    alert('successfully logged in ')
                    // here we are storing the token in the local storage 
                    localStorage.setItem('token',result.token)
                    props.history.push('/')// redirecting to home component page 
                    props.handleLogginedIn()
                }
            })
        
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