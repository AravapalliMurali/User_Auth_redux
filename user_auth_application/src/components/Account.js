import React,{useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { startGetUserInfo } from '../Actions/usersAction'

export default function Account(){
    const dispatch = useDispatch()
    const data = useSelector((state)=>{
        return state.FormData
    })

    useEffect(()=>{
        dispatch(startGetUserInfo())
    },[])

    return (
        <div>
            <h2>User Account details </h2>
             <h5> User Name : {data.username} </h5>
             <h5> email : {data.email} </h5>
            
        </div>
    )
}