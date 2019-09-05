import React from 'react'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'


class SignIn extends React.Component {
    constructor(){
        super()
        this.state = {
            isSignInOpen: false,
            isSignUpOpen: false
        }
        

        this.showSignIn = this.showSignIn.bind(this)
        this.showSignUp = this.showSignUp.bind(this)
        
    }

    showSignIn() {
        this.setState({
            isSignInOpen: true,
            isSignUpOpen: false
        })
    }

    showSignUp() {
        this.setState({
            isSignInOpen: false,
            isSignUpOpen: true
        })
    }

   

    

    render(){
        return(
            <div>
               <button onClick={this.showSignIn}>Sign in</button>
               {this.state.isSignInOpen && <SignInForm />}
               <button onClick={this.showSignUp}>Sign up</button>
               {this.state.isSignUpOpen && <SignUpForm />}
               
               
               
                
            </div>
        )
    }
}




export default SignIn