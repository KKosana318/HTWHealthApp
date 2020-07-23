import React, {Component} from 'react';
import storage from '../firebase/firebase.utils';

class ImageUpload extends Component{
    constructor(props) {
        super(props);
        this.state = {
            image: null,
            url: '',
            progress: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }
    handleChange = e => {
        if(e.target.files[0]){
            const {image} = e.target.files[0];
            this.setState(() => ({image}));
        }
    }

    handleUpload = () => {
        const {image} = this.state;
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on('state_changed', 
        (snapshot) => {
            //progress function
            const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)
            this.setState({progress});
        }, 
        (error) => {
            console.log(error);
        }, 
        (complete) => {
            //complete function
            storage.ref('images').child(image.name).getDownloadURL().then(url => {
                this.setState({url});
            })
        });
    }

    render() {
        return (
            <div style={imup}>
                <progress value={this.state.progress} max="100"/>

                <input type="file" onChange={this.handleChange}/>
                <button onClick={this.handleUpload}>Upload Profile Picture</button>
                <br/>
                <img src={this.state.url} alt = "Uploaded Image" height='100' width='100'></img>
            </div>
        )
    }
}

export default ImageUpload;