
import './App.css'
import { useState,useEffect } from 'react'
import * as API from "./services/launches"


export function App() {

 const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    API.getAllLaunches().then(data => 
      setCharacters(data.results));
   
  },[]);

  return (
    <>
    
    <div className='flexed'>
      {characters.map(item=>(
        <div key={item.id} >
          <div className='row'>
            <img src={item.image} alt="" />
            <h5>{item.name}</h5>
            <h6>{item.gender}</h6>
          </div>
        </div>
      ))}
      </div>
    </>
    
  )
}

