import React from 'react';
import './App.css';
import ListOfGifs from './component/ListOfGifs';
import {Link, Route} from "wouter"


export function App() {
  return (
    <div className="App">
      <section className="App-content">
          <h1>Bienvenidos a la app de GIFS</h1>
         
          <Link></Link>
          <Route
            component={ListOfGifs}
            path="/gif/:keyword"/>
          
         
      
      </section>
    </div>
  );
}

export default App;
