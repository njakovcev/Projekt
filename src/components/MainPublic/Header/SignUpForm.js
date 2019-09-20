import React from 'react'
import {PostData} from '../Post'

import './SignUpForm.css'



class SignUpForm extends React.Component {
    state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            
        })
    }

    signup() {
        if(this.state.firstName && this.state.lastName && this.state.password && this.state.email){
            PostData('signup', this.state).then(result => {
                let responseJson = result
                if(responseJson.userData){
                    sessionStorage.setItem('userData', JSON.stringify(responseJson))
                    this.setState({redirect: true})
                }
            })
        }
    }

    submitForm = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render(){
        
        return(
            <div className='container'>
                <form>
                    
                    {console.log(this.state)}
                    
                    <label/>Sign Up
                    
                    <input
                    name='userName' 
                    placeholder='Username'
                    onChange ={this.handleChange}
                    value={this.state.userName}
                    />
                    <input
                    name='firstName' 
                    placeholder='First Name'
                    onChange ={this.handleChange}
                    value={this.state.firstName}
                    />
                    
                    <input
                    name='lastName'
                    placeholder='Last Name'
                    onChange ={this.handleChange}
                    value={this.state.lastName}
                    />
                    
                    <input 
                    placeholder='Email' 
                    name='email'
                    onChange={this.handleChange}
                    value={this.state.email}
                    />
                    <input 
                    placeholder='Create Password'
                    name='password'
                    onChange={this.handleChange}
                    value={this.state.password}
                    />
                    <select
                    className='select' 
                    value={this.state.userType}
                    onChange={this.handleChange}>
                        <option value='0'>Select user type</option>
                        <option value='admin'>Admin</option>
                        <option value='receptionist'>Receptionist</option>
                        <option value='housekeeper'>Housekeeper</option>
                    </select>
                    <input className='submit' type="button" onClick={this.submitForm} value='submit' />
                </form>
                
            </div>
        )
    }
}

export default SignUpForm