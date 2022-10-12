import React,{useEffect, useState} from 'react';
import getGifs from './api/urlApi';
import './App.css';
import Gif from './component/gif';
import ListOfGifs from './component/ListOfGifs';

function App() {
  const [gifs,setGifs] = useState([]);

  useEffect(function(){
    
    
    getGifs({keyword:'goku'}).then(gifs => setGifs(gifs))

  },[]);

  return (
    <div className="App">
      <section className="App-content">
         {
          <ListOfGifs gifs={gifs}/>
         }
      <button onClick={()=>setGifs()}>Cambiar gifs</button>
      </section>
    </div>
  );
}

export default App;
