import React from 'react'
import Listings from './Listings';
import SearchBar from './SearchBar'
import Profile from './Profile'
import {BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Calendar from 'react-calendar'
import SignUpForm from '../Header/SignUpForm';
import SignInForm from '../Header/SignInForm';
import '../Header/Header.css'



class Main extends React.Component{
   
    render(){
        
        return(
            <Router>
                <header>
                <Route path='/'/>
                <Link to='/'>
                <button id='home'>Home</button>
                </Link>
                <Link to='/SignUp'><button>Sign up</button></Link>
                <Link to='/SignIn'><button>Sign In</button></Link>
                <Link to='/Profile'>Profile</Link>
                </header>
                
                <Route exact path='/'component={SearchBar} />
                <Listings />
                <Route exact path='/'component={Calendar} />
                <Route path='/SignUp' exact component={SignUpForm} />
                <Route exact path='/Profile' component={Profile}/>
                <Route exact path='/SignIn' component={SignInForm} />
                
            </ Router>
        )
    }
}


export default Main