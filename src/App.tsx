import {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {

  const [status,setStatus] = useState("Checking backend...");

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(()=>{
    fetch(`${API_URL}/health`)

    .then(response=>response.json())

    .then(()=>{

      setStatus(
        "Backend OK"
      );

    })


    .catch(error=>{

      setStatus(
        `Backend error: ${error.message}`
      );

    });


  },[API_URL]);



  return (
    <div className="bg-white">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App;