import React from 'react'
import {PostData} from '../Post'
import {Redirect} from 'react-router-dom'
import './SignUpForm.css'

class SignInForm extends React.Component {
    state = {
        username: '',
        password: '',
        redirect: false  
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            
        })
    }

    login = () => {
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

    

    submitForm = e => {
        e.preventDefault()
        console.log(this.state)
    }


    

    render(){
        const {redirect} = this.state

        if(redirect){
            return(<Redirect to={'/Profile'} />)
        }

        if(sessionStorage.getItem('userData')){
            return (<Redirect to={'/Profile'} />)
        }
        
        return(
            

            <div className='container'>
                <div className='signin'>
                    {console.log(this.state)}
                    <label/>Sign In <br/>
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
                    <input className='submit' type="button" onClick={this.submitForm} value='submit' />
                </div>
            </div>

        )
    }
}

export default SignInForm