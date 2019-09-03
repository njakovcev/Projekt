import React from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'


class Header extends React.Component{

    render(){
        return(
            <div>
                <header>
                    <ul>
                        <button>HR/ENG</button>
                        <button>Theme</button>
                        <SignIn />
                        <SignUp />
                    </ul>
                </header>     
            </div>
        )
    }
}







export default Header