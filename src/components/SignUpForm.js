import React from 'react'

class SignUpForm extends React.Component {
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
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
                <select>
                    <option value='admin'>Admin</option>
                    <option value='receptionist'>Receptionist</option>
                    <option value='housekeeper'>Housekeeper</option>
                </select>
                <button onClick={this.handleChange}>Submit</button>
                
            </div>
        )
    }
}

export default SignUpForm