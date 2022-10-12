import React,{useState} from 'react';
import './App.css';
const gifsSanLorenzo = ['https://media4.giphy.com/media/3o6EhJmIWemmLprzWg/giphy.gif?cid=ecf05e47epxnzb2kdemtl0ucheh420vckxc7fgrtm7j6br2c&rid=giphy.gif&ct=g',
'https://media4.giphy.com/media/cApbWkxNxbGOgBI3O8/giphy.gif?cid=ecf05e47epxnzb2kdemtl0ucheh420vckxc7fgrtm7j6br2c&rid=giphy.gif&ct=g','https://media3.giphy.com/media/C3atGjpIijG4n2rMsa/giphy.gif?cid=ecf05e47nc5bdgepdnoxomobgudif2jwx2z2i87txtz3wwso&rid=giphy.gif&ct=g']

const 

function App() {
  const [gifs,setGifs] = useState(GIFS);

  return (
    <div className="App">
      <section className="App-content">
      {
        gifsSanLorenzo.map(singleGifs => <img src={singleGifs}/>)
      }      
      <button onClick={()=>setGifs()}/>
      </section>
    </div>
  );
}

export default App;
