import React,{useEffect} from 'react'
import NotesForm from './NotesForm'
import {useDispatch} from 'react-redux'
import {startGetNotse} from "../../Actions/usersAction"



export default function Notes(){
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(startGetNotse())
    },[])
    
    return (
        <div>
            <h2>MY_Notes components </h2>
            <NotesForm/>
        </div>
    )
}