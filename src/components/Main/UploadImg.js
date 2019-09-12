import React from 'react'
/*import axios from 'axios'*/


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

    /*handleUpload(){
        const data = new FormData()
        data.append('image', this.state.image, this.state.image.name)
        axios.post('url', data)
        .then(res => console.log(res))
    } */



    render(){
        return(
            <div>
                    <div>
                        <input type='file' onChange={this.selectedFile}></input>
                    </div>
                <button onClick={this.handleUpload}>Upload</button>
            </div>
        )
    }
}


export default UploadImg