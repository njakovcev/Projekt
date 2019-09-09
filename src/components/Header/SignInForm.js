import React from 'react'

class SignInForm extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
            
        }
        
        this.handleChange = this.handleChange.bind(this)
        
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            
        })
    }

    

    render(){
        
        return(

            <div>
                {console.log(this.state)}
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
                
                
                
            </div>
        )
    }
}

export default SignInForm