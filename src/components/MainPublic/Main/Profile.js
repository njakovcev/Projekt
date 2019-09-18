import React from 'react'
import CreateListing from './CreateListing'
import UploadImg from './UploadImg'
import './Profile.css'


class Profile extends React.Component{
    constructor(){
        super()
        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            phoneNumber: ''
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
                <form  onSubmit={this.handleSubmit}>
                    <label/>Edit Profile
                    <input
                    placeholder='First Name'
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    ></input>
                    <input
                    placeholder='Last Name'
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    >
                    </input>
                    <input
                    placeholder='Address'
                    value={this.state.address}
                    onChange={this.handleChange}
                    ></input>
                    <input
                    placeholder='Phone Number'
                    value={this.state.phoneNumber}
                    onChange={this.handleChange}
                    type='number'
                    >
                    </input>
                    <UploadImg />
                </form>
                {<button>Create Listing</button> && <CreateListing />}
                
            </div>
        )
    }
}

export default Profile