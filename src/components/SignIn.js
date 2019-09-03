import React from 'react'

class SignIn extends React.Component {
    constructor(){
        super()
        this.state = {
            isHidden: true
        }

        this.toggleHidden = this.toggleHidden.bind(this)
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
            
            
        });
    }

    render(){
        return(
            <div>
               <button onClick={this.toggleHidden}>Sign in</button>
               {!this.state.isHidden && <SignInForm />} 
            </div>
        )
    }
}

const SignInForm = () => {
    return(
        <div>
            <input placeholder='Username' ></input>
            <input placeholder='Password'></input>
            <button>Submit</button>
        </div>
    )
}

export default SignIn