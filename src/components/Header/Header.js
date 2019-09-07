import React from 'react'
import SignIn from './SignIn&SignUp'



class Header extends React.Component{
    

    render(){
        return(
            <div>
                <header>
                    <ul>
                        <button>HR/ENG</button>
                        <button>Theme</button>
                        < SignIn />
                        
                        
                    </ul>
                </header>     
            </div>
        )
    }
}







export default Header