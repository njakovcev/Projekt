import React from 'react'
import {BrowserRouter,  Route,  Switch} from 'react-router-dom'
import Profile from './Main/Profile'


const Routes = () => {
    <BrowserRouter>
        <Switch>
            <Route exact path = '/Main/Profile' component={Profile} />



        </Switch>
    
    
    
    
    </BrowserRouter>
}

export default Routes