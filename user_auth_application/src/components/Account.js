import React,{useEffect} from 'react'
import {useSelector , useDispatch} from 'react-redux'
import { startGetUserInfo } from '../Actions/usersAction'

export default function Account(){
    const dispatch = useDispatch()
    const data = useSelector((state)=>{
        return state.userINFO
    })

    useEffect(()=>{
        dispatch(startGetUserInfo())
    },[])
    
    return (
        <div>
            <h2>User Account details </h2>
            {data.map((ele,i)=>{
                return(
                    <div key = {i}>
                        <h5>User Name :{ele.username}</h5>
                        <h5>User email :{ele.email}</h5>
                    </div>
                )
            })}

        </div>
    )
}