import React from 'react'

export default function Login(props){

    return (
        <div>
            <form>
                <input type = "email" placeholder ="email" name ="email" value ={email} onChange ={handleInput}/> <br/>

                <input type ="password" placeholder ="password" name ="password" value ={password} onChange ={handleInput}/> <br/>

                <input type = 'submit' value ="submit"/>
            </form>
        </div>
    )
}