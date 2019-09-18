import React from 'react'
import {PostData} from '../Post'
import {Redirect} from 'react-router-dom'
import './SignUpForm.css'

class SignInForm extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
            redirect: false
            
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.login = this.login.bind(this)
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            
        })
    }

    login(){
        if(this.state.username && this.state.password){
            PostData('login', this.state).then(result => {
                let responseJson = result
                if(responseJson.userData){
                    sessionStorage.setItem('userData', JSON.stringify(responseJson))
                    this.setState({redirect: true})
                }
            })
        }
    }

    

    render(){

        if(this.state.redirect){
            return(<Redirect to={'/Profile'} />)
        }

        if(sessionStorage.getItem('userData')){
            return (<Redirect to={'/Profile'} />)
        }
        
        return(
            

            <div className='container'>
                <form>
                    {console.log(this.state)}
                    <label/>Sign In
                    <input
                    name='username' 
                    placeholder='Username'
                    onChange ={this.handleChange}
                    value={this.state.username}
                    >
                    </input>
                    <input
                    name='password'
                    type='password' 
                    placeholder='Password'
                    onChange ={this.handleChange}
                    value={this.state.password}
                    >
                    </input>
                    <button onClick={this.handleChange}>Submit</button>
                    
                
                </form>
            </div>

        )
    }
}

export default SignInForm