import {useContext, useRef, useState} from 'react';
import MainContext from "../context/mainContext";
import PhotoPlace from "../components/PhotoPlace";
import http from "../plugin/http";
import {useNavigate} from "react-router-dom";

const UploadPage = () => {

    const {user, apartments,setApartments} = useContext(MainContext)

    const [photos, setPhotos] = useState([])

    // const photos = useRef()
    const description = useRef()
    const city = useRef()
    const price = useRef()

    function upload() {
        const newApartment = {
            photos: photos.current.value,
            description: description.current.value,
            city: city.current.value,
            price: price.current.value,
            owner: user.email
        }


        const options = {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(newApartment)
        }

        fetch("http://localhost:4000/upload", options)
            .then(res=>res.json())
            .then(data=> {
                console.log(data)
                setApartments([...apartments, data.apartment])
            })

    }
    return (

        <div className="d-flex center">
            <div className="apartmentCard">
                <input ref={photos} type="text" placeholder="photo"/>
                <input ref={description} type="text" placeholder="description"/>
                <input ref={city} type="text" placeholder="city"/>
                <input ref={price} type="text" placeholder="price"/>
                <button onClick={upload}>Upload</button>
            </div>
        </div>





    );
};

export default UploadPage;