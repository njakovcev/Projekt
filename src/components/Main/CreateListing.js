import React from 'react'
import UploadImg from './UploadImg'

class CreateListing extends React.Component{
    render(){
        return(
            <div>
                <form>
                    <input
                    name='name'
                    placeholder='Name your listing'
                    ></input>
                    <textarea
                    name='description'
                    placeholder='Describe your place'
                    ></textarea>
                    <UploadImg/>
                </form>
            </div>
        )
    }
}

export default CreateListing