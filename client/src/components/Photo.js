import React from 'react';
import http from "../plugin/http";

const Photo = ({photo, setPhotos}) => {
    function deletePhoto() {
        const photoDelete = {
            id: photo.id
        }

        http.post(photoDelete, "/deletePhoto").then(data => {
            setPhotos(data)
        })
    }

    return (
        <div>
            <img src="" alt="photo.photo"/>
            <button onClick={deletePhoto}>Delete</button>
        </div>
    );
};

export default Photo;