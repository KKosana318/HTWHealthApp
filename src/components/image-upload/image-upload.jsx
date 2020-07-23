import React, {Component} from 'react';
import firebase from '../../firebase/firebase.utils';

class ImageUpload extends Component{
    constructor(props){
        super(props);
        this.state={
            files:null
        }
    }
    
    handleChange = (files) => {
        this.setState({
            files:files
        })
    }

    handleSave = () => {
        let bucketName = 'profilePictures'
        let file = this.state.files[0]
        let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`)
        let uploadTask = storageRef.put(file)
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, 
            () => {
                // eslint-disable-next-line
                let downloadURl = uploadTask.snapshot.downloadURL
            })
    }

    showImage = () => {
        let storageRef = firebase.storage().ref()
        // eslint-disable-next-line
        let spaceRef = storageRef.child('profilePictures/' + this.state.files[0].name)
        storageRef.child('profilePictures/' + this.state.files[0].name).getDownloadURL().then((url)=> {
            document.getElementById('new-img').src = url
        })
    }

    render() {
        return (
            <div>
                <input type="file" onChange={(e) => {this.handleChange(e.target.files)}} />
                <button onClick={this.handleSave}>Upload Your Profile</button>
                <button onClick>Show Image</button>
                {/*eslint-disable-next-line*/}
                <img id="new-img"/>
            </div>
        )
    }
}

export default ImageUpload;