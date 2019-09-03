import React from 'react'

class SignUp extends React.Component{
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
                <button onClick={this.toggleHidden}>Sign up</button>
                {!this.state.isHidden && <SignUpForm />}

            </div>
        )
    }
}

const SignUpForm = () => {
    return(
        <div>
            <form>
                <input placeholder='First Name' ></input>
                <input placeholder='Last Name'></input>
                <input placeholder='Email' ></input>
                <input placeholder='Create Password'></input>
                <select>
                    <option value='admin'>Admin</option>
                    <option value='receptionist'>Receptionist</option>
                    <option value='housekeeper'>Housekeeper</option>
                </select>
                <button>Submit</button>
            </form>

        </div>
    )
}

export default SignUp