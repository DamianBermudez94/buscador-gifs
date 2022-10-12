import React,{useEffect, useState} from 'react';
import getGifs from './api/urlApi';
import './App.css';

function App() {
  const [gifs,setGifs] = useState([]);

  useEffect(function(){
    
    
    getGifs().then(gifs => setGifs(gifs))

  },[]);

  return (
    <div className="App">
      <section className="App-content">
      {
       gifs.map(singleGifs => <img src={singleGifs}/>)
      }      
      <button onClick={()=>setGifs()}>Cambiar gifs</button>
      </section>
    </div>
  );
}

export default App;
