import React,{useEffect, useState} from 'react';
import './App.css';
const gifsSanLorenzo = ['https://media4.giphy.com/media/3o6EhJmIWemmLprzWg/giphy.gif?cid=ecf05e47epxnzb2kdemtl0ucheh420vckxc7fgrtm7j6br2c&rid=giphy.gif&ct=g',
'https://media4.giphy.com/media/cApbWkxNxbGOgBI3O8/giphy.gif?cid=ecf05e47epxnzb2kdemtl0ucheh420vckxc7fgrtm7j6br2c&rid=giphy.gif&ct=g','https://media3.giphy.com/media/C3atGjpIijG4n2rMsa/giphy.gif?cid=ecf05e47nc5bdgepdnoxomobgudif2jwx2z2i87txtz3wwso&rid=giphy.gif&ct=g']

const gifsMessi= ['https://media2.giphy.com/media/JfxTdqnGXbRRHpsrdS/giphy.gif?cid=ecf05e47aj9b2dzh4yuzytyty2j6wpyriwg19nqqdvqodln2&rid=giphy.gif&ct=g','https://media3.giphy.com/media/l0IsHIEqZbGMPEdbO/giphy.gif?cid=ecf05e47ejy7tscd0osc6h28l0b8wjyvy0g7fgqze614g6b8&rid=giphy.gif&ct=g']

function App() {
  const [gifs,setGifs] = useState(gifsSanLorenzo);

  useEffect(function(){
    setGifs(gifsMessi)
  },[]);

  return (
    <div className="App">
      <section className="App-content">
      {
       gifs.map(singleGifs => <img src={singleGifs}/>)
      }      
      <button onClick={()=>setGifs(gifsMessi)}>Cambiar gifs</button>
      </section>
    </div>
  );
}

export default App;
