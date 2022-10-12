import React,{useEffect, useState} from 'react';
import './App.css';
 const apiUrl = 'https://api.giphy.com/v1/gifs/search?api_key=LDHQy3B5eXnoLmRUgOvJtQdKXcdcfCrc&q=messi&limit=10&offset=0&rating=g&lang=en'
function App() {
  const [gifs,setGifs] = useState([]);

  useEffect(function(){
    
    fetch(apiUrl).then(res => res.json()).then(response =>{
      const { data } = response;
      const gifs = data.map(image => image.images.downsized_medium.url);
      setGifs(gifs)
    })
    

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
