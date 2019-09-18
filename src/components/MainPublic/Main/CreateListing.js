import React from 'react'
import UploadImg from './UploadImg'

class CreateListing extends React.Component{
    constructor(){
        super()
        this.state = {
            name: '',
            description: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render(){
        return(
            <div>
                <form>
                    <input
                    name='name'
                    placeholder='Name your listing'
                    onChange={this.handleChange}
                    ></input>
                    <textarea
                    name='description'
                    placeholder='Describe your place'
                    onChange={this.handleChange}
                    ></textarea>
                    <UploadImg/>
                </form>
            </div>
        )
    }
}

export default CreateListing