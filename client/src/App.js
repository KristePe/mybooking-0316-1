import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import Toolbar from "./components/Toolbar";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import SingleViewPage from "./pages/SingleViewPage";
import ReservationsPage from "./pages/ReservationsPage";
import UploadPage from "./pages/UploadPage";
import {useState} from "react";
import MainContext from "./context/mainContext";
import AuthPage from "./pages/AuthPage";




function App() {

    const [user, setUser] = useState({})
    const [apartments, setApartments] = useState([])
    const [posts, setPosts] = useState([])
    const [error, setError] = useState(null)

  return (
    <div className="background">
    <MainContext.Provider value={{user, setUser, apartments, setApartments, error, setError, posts, setPosts}}>
          <BrowserRouter>
            <Toolbar/>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/singlepost" element={<SingleViewPage/>}/>
                <Route path="/reservations" element={<ReservationsPage/>}/>
                <Route path="/upload" element={<UploadPage/>}/>
                <Route path="/authorisation" element={<AuthPage/>}/>

            </Routes>
          </BrowserRouter>
    </MainContext.Provider>

    </div>
  );
}

export default App;
