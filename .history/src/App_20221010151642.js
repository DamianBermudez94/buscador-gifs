import React,{useEffect, useState} from 'react';
import getGifs from './api/urlApi';
import './App.css';
import Gif from './component/gif';

function App() {
  const [gifs,setGifs] = useState([]);

  useEffect(function(){
    
    
    getGifs({keyword:'code'}).then(gifs => setGifs(gifs))

  },[]);

  return (
    <div className="App">
      <section className="App-content">
      {
       gifs.map(singleGifs => 
       <Gif
       key={singleGifs.id} 
       title={singleGifs.title} 
       url={singleGifs.url} />)
      }      
      <button onClick={()=>setGifs()}>Cambiar gifs</button>
      </section>
    </div>
  );
}

export default App;
