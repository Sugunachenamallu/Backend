import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0)
 let baseURL = "http://localhost:3000";

  const fetchData=()=>{
    axios.get(`${baseURL}/get-students`)
    .then((result)=>console.log(result.data))
    .catch((error)=>console.log(error));
  };
  let myuser={
    name:"thub",
    roll:"123"
  };
  const addStudent=()=>{
    axios.post(`${baseURL}/add-students`,myuser)
    .then((result)=>console.log(result.data))
    .catch((error)=>console.log(error));
  }

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h1>Hello this from frontend</h1>
      <button onClick={fetchData}>fetchdata</button>
         <button onClick={addStudent}>AddStudent</button>
    </>
  )
}

export default App
