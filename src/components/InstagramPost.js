// Imports
import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
// import cloudinary from 'cloudinary';
const { REACT_APP_SERVER_URL } = process.env;

 /**
   * Generate an Instagram post component
   * @param username - state as a string
   * @param setUsername - function that update username state
   * @param email - state as a string
   * @param setEmail - function that update email state
   * @param caption - state as a string
   * @param setCaption - function that update caption state
   * @param image - state as a string
   * @param setImage - function that update image state
   * @param handleUsername - function that updates the username
   * @param handleEmail - function that updates the email
   * @param handleCaption - function that updates the caption
   * @param handleImage - function that updates the image
   * @param handleSubmit - function that creates a new IG post
   * @return {*}
   */

const InstagramPost = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState('');

    const handleUsername = (e) => {
        setUsername(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleCaption = (e) => {
        setCaption(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault(); // at the beginning of a submit function
        // add any logic beforehand that you want to do before making a post to your API
        const newIGPost = {
            username: username,
            caption: caption,
            comments: [{ content: 'Yoooo'}],
            imageUrl: 'url here'
        }
        axios.post(`${REACT_APP_SERVER_URL}/instagram`, newIGPost)
        .then(response => {
            // console.log('===> Yay, new user');
            console.log(response);
            // setRedirect(true);
        })
        .catch(error => console.log('===> Error in Signup', error));
    }

    return (
        <div className="row mt-4">
            <div className="col-md-7 offset-md-3">
                <div className="card card-body">
                    <h2 className="py-2">Signup</h2>
                    <form onSubmit={handleSubmit} encType="multipart/form-data">

                        <div className="form-group">
                            <label htmlFor="name">Image</label>
                            <input type="file" name="image" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={username} onChange={handleUsername} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} onChange={handleEmail} className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Caption</label>
                            <input type="text" name="caption" value={caption} onChange={handleCaption} className="form-control"/>
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InstagramPost;