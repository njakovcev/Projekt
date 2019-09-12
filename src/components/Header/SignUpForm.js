import React from 'react'
import {PostData} from '../Post'
import {Redirect} from 'react-router-dom'

class SignUpForm extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            redirect: false
            
        }
        
        this.handleChange = this.handleChange.bind(this)
        this.signup = this.signup.bind(this)
        
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


    render(){
        if(this.state.redirect || sessionStorage.getItem('userData')){
            return(<Redirect to={'/Profile'}/>)
        }

        return(
            <div>
                {console.log(this.state)}
                <input
                name='firstName' 
                placeholder='First Name'
                onChange ={this.handleChange}
                value={this.state.firstName}
                >
                </input>
                <input
                name='lastName'
                placeholder='Last Name'
                onChange ={this.handleChange}
                value={this.state.lastName}
                >
                </input>
                <input 
                placeholder='Email' 
                name='email'
                onChange={this.handleChange}
                value={this.state.email}
                ></input>
                <input 
                placeholder='Create Password'
                name='password'
                onChange={this.handleChange}
                value={this.state.password}
                ></input>
                <select 
                value={this.state.userType}
                onChange={this.handleChange}>
                    <option value='admin'>Admin</option>
                    <option value='receptionist'>Receptionist</option>
                    <option value='housekeeper'>Housekeeper</option>
                </select>
                <button onClick={this.signup}>Submit</button>
                
            </div>
        )
    }
}

export default SignUpForm