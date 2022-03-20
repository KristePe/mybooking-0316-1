import React, {useContext} from 'react';
import MainContext from "../context/mainContext";

const MainPage = () => {

    const {apartments} = useContext(MainContext)

    return (
        <div className="d-flex center">
            <h1>MAIN PAGE</h1>

            <div className="card">
                <p>If you have an account</p>
                <div>LOGIN</div>
            </div>
            <p>or</p>
            <div className="card">
                <p>If you don't have an account</p>
                <div>REGISTER</div>
            </div>
            {apartments.map((x, i) =>
                <div className="apartmentCard" key={i}>{x.price}</div>
            )}

        </div>
    );
};

export default MainPage;