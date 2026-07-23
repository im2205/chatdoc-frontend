import {useEffect, useState} from "react";


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
    <main className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          ChatDoc
        </h1>
        <p className="mt-5">
          {status}
        </p>
      </div>
    </main>
  );

}

export default App;