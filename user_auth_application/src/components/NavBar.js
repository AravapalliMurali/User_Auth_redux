import React from 'react'
import {Link , Route, withRouter}  from "react-router-dom"
import Account from './Account'
import Home from './Home'
import Login from './Login'
import Notes from './Notes'
import RegistrationForm from './RegistrationForm'

const NavBar = ({loggedIn , handleLogginedIn , history })=>{
    return(
        <div>
            <ul>
                <li><Link to ="/">Home</Link></li>
                { loggedIn ? (
                    <React.Fragment>
                        <li><Link to ="/account">MyAccount</Link></li>
                        <li><Link to ="/myNotes">My_Notes</Link></li>
                        <li><Link onClick={()=>{
                            //removing the token from the localstorage
                            localStorage.removeItem('token')
                            alert('you are successfully logged out ')
                            handleLogginedIn()
                            history.push('/')
                        }}>Logout</Link></li>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <li><Link to ='/register'>Registration</Link></li>
                        <li><Link to ='/login'>Login</Link></li>
                    </React.Fragment>
                )}

                <Route path ='/' component ={Home} exact = {true}/>
                <Route path = "/account" component = {Account}/>
                <Route path = "/myNotes"  component = {Notes}/>
                <Route path = "/login" render ={(props)=>{
                    return <Login {...props} handleLogginedIn = {handleLogginedIn}/>
                }}/>
                <Route path ="/register" component ={RegistrationForm}/>
            </ul>
        </div>
    )
}

export default withRouter(NavBar)