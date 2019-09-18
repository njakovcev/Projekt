import React from 'react'
import axios from 'axios'
import './UploadImg.css'


class UploadImg extends React.Component{
    constructor(){
        super()
        this.state = {
            image: null
        }
        this.selectedFile = this.selectedFile.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
    }

    selectedFile(e){
        this.setState({
            image: e.target.files
        })
    
    }

    handleUpload(){
        const data = new FormData()
        data.append('image', this.state.image, this.state.image.name)
        axios.post('url', data)
        .then(res => console.log(res))
    } 



    render(){
        return(
            <div>
                    <div>
                        <label onClick={this.handleUpload} className="uploadLabel" for="uploadBtn">  Upload</label>
                        <input 
                        type='file' 
                        onChange={this.selectedFile}
                        name='file'
                        value={this.state.image}
                        className='uploadLabel'
                        id='uploadBtn'
                        />
                        
                    </div>
               
                
            </div>
        )
    }
}


export default UploadImg