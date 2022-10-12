import React from 'react';
import './App.css';
import ListOfGifs from './component/ListOfGifs';
import {Link, Route} from "wouter"


export function App() {
  return (
    <div className="App">
      <section className="App-content">
          <h1>Bienvenidos a la app de GIFS</h1>
          <Link to="/">Home</Link>
          <Link to="/gif/gohan"> Gifs de gohan</Link>
          <Link to="/gif/majinbu"> Gifs de gohan</Link>
          <Link to="/gif/vegeta"> Gifs de vegeta</Link>
          <Route
            component={ListOfGifs}
            path="/gif/:keyword"/>
          
         
      
      </section>
    </div>
  );
}

export default App;
