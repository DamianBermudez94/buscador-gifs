import React from 'react';
import './App.css';
import ListOfGifs from './component/ListOfGifs';
import Home from './pages/home';
import {Link, Route} from "wouter"
import SearchResults from './pages/searchResults';


export function App() {
  return (
    <div className="App">
      <section className="App-content">
          <h1>Bienvenidos a la app de GIFS</h1>
          <Route
          component={Home}
          path="/"
          />
          <Route
            component={SearchResults}
            path="/search/:keyword"/>
          
         
      
      </section>
    </div>
  );
}

export default App;
