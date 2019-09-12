import React from 'react'
import CreateListing from './CreateListing'
import UploadImg from './UploadImg'

class Profile extends React.Component{
    render(){
        return(
            <div>
                <CreateListing />
                <UploadImg />
            </div>
        )
    }
}

export default Profile