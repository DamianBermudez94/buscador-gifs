import React from 'react';
import './App.css';
import ListOfGifs from './component/ListOfGifs';
import {link, Route} from "wouter"
function App() {


  return (
    <div className="App">
      <section className="App-content">
          <h1>Bienvenidos a la app de GIFS</h1>
         
          <link></link>
          <Route>
            <ListOfGifs keyword="messi argentina"/>
          </Route>
          
         
      
      </section>
    </div>
  );
}

export default App;
