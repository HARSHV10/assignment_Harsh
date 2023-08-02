import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import server from '../server'

function App() {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(null);
  const handleFileChange=(e)=>{
    setFile(e.target.files[0])
  }
  const handleFileUpload= async()=>{
    if(!file) return ;
    try{
      const formData=new FormData();
      formData.append('file',file);
      const data = await server.post('/uploadfile',formData,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      if(data.status==200){
        alert("file updated")
      }
      else{
        alert("oops error occured")
      }
      setFile(null);
    }
    catch(e){
      console.log(e);
      alert("oops error occured")
    }
  }

  return (
    <div className="App">
    <div>
    <h2>Upload Excel File</h2>
    <input type="file" accept=".xlsx" onChange={handleFileChange} />
    <button onClick={handleFileUpload}>Upload</button>
  </div>
    </div>
  )
}

export default App
