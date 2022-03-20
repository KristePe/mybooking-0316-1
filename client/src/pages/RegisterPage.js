import {useRef} from 'react';


const RegisterUser = () => {
    const email = useRef()
    const pass1 = useRef()
    const pass2 = useRef()
    const adminCheck = useRef()

    function auth() {
        const regUser = {
            email: email.current.value,
            pass1: pass1.current.value,
            pass2: pass2.current.value,
            admin: adminCheck.current.checked,
        }

        const options = {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(regUser)
        }

        fetch("http://localhost:4000/register", options)
            .then(res=>res.json())
            .then(data=> console.log(data))

    }

    return (

    <div className="d-flex center">
        <div className="column d-flex card">
            <h3>REGISTER</h3>
            <input ref={email} type="text" placeholder="email"/>
            <input ref={pass1} type="text" placeholder="password 1"/>
            <input ref={pass2} type="text" placeholder="password 2"/>
            <div className="d-flex">
                <div>Is admin</div>
                <input ref={adminCheck} type="checkbox"/>
            </div>
        <button onClick={auth}>Register</button>
        </div>
    </div>


    );
};

export default RegisterUser;