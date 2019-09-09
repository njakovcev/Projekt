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
        this.closeButton = this.closeButton.bind(this)
        
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

    closeButton(){
        this.setState({
            isSignInOpen: false,
            isSignUpOpen: false
        })
    }

   

    

    render(){
        if(this.state.isSignInOpen || this.state.isSignUpOpen){
            return(
                <div>
                    <button>Sign in</button>
                    {this.state.isSignInOpen && <SignInForm /> }
                    <button onClick={this.closeButton}>X</button>
                    {this.state.isSignInOpen && this.state.isSignUpOpen}
                    <button>Sign up</button>
                    {this.state.isSignUpOpen && <SignUpForm />}
                    
                </div>
            )
        }
        return(
            <div>
               <button onClick={this.showSignIn}>Sign in</button>
               {this.state.isSignInOpen && <SignInForm /> }
               <button onClick={this.showSignUp}>Sign up</button>
               {this.state.isSignUpOpen && <SignUpForm />}
               
               
               
                
            </div>
        )
    }
}




export default SignIn