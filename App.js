import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Student from './Student'

function App()
{
  const [name,setName]=useState("Anil")
    return (

  <div className="App">
  <h1>Props in React :)</h1>
     <Student name={name} />
    <button onClick={()=>{setName("Singh")}}>Update Name</button>
   </div>
   );
}
export default App;