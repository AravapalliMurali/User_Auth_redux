import React,{useState} from 'react'
import {startGetAddNotes} from '../../Actions/usersAction'
import {useDispatch} from 'react-redux'

export default function NotesForm(){
    const dispatch = useDispatch()
    const [title , setTitle] = useState('')
    const [body , setBody] = useState('')

    const handleInput =(e)=>{
        const input  = e.target.name
        if(input === "title"){
            setTitle(e.target.value)
        } else if(input === "body"){
            setBody(e.target.value)
        }
    }
const handleSubmit =(e)=>{
    e.preventDefault()

    const formData = {
        title : title,
        body : body
    }

    dispatch(startGetAddNotes(formData))
    
}


    return(
        <div>
            <h2>Notes Form</h2>
            <form onSubmit ={handleSubmit}>
                <input type='text' placeholder ="notes title" name = "title" value ={title} onChange = {handleInput}/> 
                <br/> <br/>
                <textarea type = "text" placeholder ="write notes here ..." name ='body' value ={body} onChange={handleInput}/>
                <br/>
                <input type = "submit" value ="Add"/>
            </form>
        </div>
    )
}