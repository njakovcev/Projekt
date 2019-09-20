import React from 'react'
import './Listing.css'
import axios from 'axios'


const api_url = 'http://jsonplaceholder.typicode.com'



class Listings extends React.Component {
   
    state = {
            users: []
        }
    
    componentDidMount() {
    const url = `${api_url}/users/` 
    axios.get(url).then(response => response.data)
    .then(data=> {
        this.setState({users : data})
        console.log(this.state.users)
    })
}

    

    render(){
        return(
            <div className='listing'>
                {this.state.users.map((user) => (
                    <div>
                        <h5 key={user.id}>Name: {user.name}</h5>
                        <h5 key={Date.now()}>Email: {user.email}</h5>
                        <h5 key={Date.now()}>Address: {user.address.city}</h5>
                    </div>
                ))}
                
            </div>
        )

        
    }
}

export default Listings