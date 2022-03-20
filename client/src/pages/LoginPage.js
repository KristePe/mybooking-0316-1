import React, {useContext, useRef} from 'react';
import MainContext from "../context/mainContext";


const LoginUser = () => {
    const email = useRef()
    const pass1 = useRef()

    const {setUser} = useContext(MainContext)

    function auth() {
        const logUser = {
            email: email.current.value,
            pass1: pass1.current.value,

        }

        const options = {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(logUser)
        }

        fetch("http://localhost:4000/login", options)
            .then(res=>res.json())
            .then(data=> {
                console.log(data)
                setUser ({
                    email: email.current.value,
                    isAdmin: data.admin,
                    id: data.userId
                })
            })

    }

    return (

        <div className="d-flex center">
            <div className="column d-flex card center">
                <h3>LOGIN</h3>
                <input ref={email} type="text" placeholder="email"/>
                <input ref={pass1} type="text" placeholder="password 1"/>

                <button onClick={auth}>Login</button>
            </div>
        </div>



    );
};

export default LoginUser;