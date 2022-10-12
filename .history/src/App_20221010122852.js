import React,{useEffect, useState} from 'react';
import './App.css';

function App() {
  const [gifs,setGifs] = useState([]);

  useEffect(function(){
    
    
    

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
