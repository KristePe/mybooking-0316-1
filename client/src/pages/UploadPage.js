import {useContext, useRef, useState} from 'react';
import MainContext from "../context/mainContext";
import PhotoPlace from "../components/PhotoPlace";
import http from "../plugin/http";
import {useNavigate} from "react-router-dom";

const UploadPage = () => {

    const {user, apartments,setApartments, error, setError, setPosts} = useContext(MainContext)

    const [photos, setPhotos] = useState([])

    const photoUrl = useRef()
    const description = useRef()
    const city = useRef()
    const price = useRef()

    const nav = useNavigate()

    function addPhoto() {
        const photo = {
            photo: photoUrl.current.value,
            userId: localStorage.getItem("userId")
        }

        http.post(photo, "/uploadPhoto").then(data => {
            if (!data.success) {
                setError(data.message)
            } else {
                setError(null)
                setPhotos(data.photos)
            }
        })
    }

    function upload() {
        const newApartment = {
            photos: photos.current.value,
            description: description.current.value,
            city: city.current.value,
            price: price.current.value,
            owner: user.email
        }

/////////////////////////

        http.post(newApartment, "/uploadPost").then(data => {
            console.log(data)
            if (!data.success) {
                setError(data.message)
            } else {
                setError(null)
                setPosts(data.posts)
                nav("/")
            }
        })


        //////////////////////////

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
                <div>
                    <PhotoPlace photos={photos} setPhotos={setPhotos}/>
                    <input ref={photoUrl} type="text" placeholder="photo"/>
                    <button onClick={addPhoto}>Add</button>
                </div>

                <input ref={description} type="text" placeholder="description"/>
                <input ref={city} type="text" placeholder="city"/>
                <input ref={price} type="text" placeholder="price"/>
                <button onClick={upload}>Upload</button>
                {error && <h3>{error}</h3>}
            </div>
        </div>





    );
};

export default UploadPage;