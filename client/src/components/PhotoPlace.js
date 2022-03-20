import React from 'react';
import Photo from "./Photo";

const PhotoPlace = ({photos, setPhotos}) => {

    return (
        <div className="photoBox">
            {photos.map((x, i) => <Photo setPhotos={setPhotos} photo={x} key={i} />)}
        </div>
    );
};

export default PhotoPlace;