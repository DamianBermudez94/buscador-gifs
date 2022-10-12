import React from 'react';
import './App.css';
import ListOfGifs from './component/ListOfGifs/ListOfGifs';
import Home from './pages/home';
import SearchResults from './pages/searchResults';
import {Link, Route} from "wouter"


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
            path="/search/:keyword"
          />
          <Route
            component={ListOfGifs}
            path="/gif/:keyword"/>
          
         
      
      </section>
    </div>
  );
}

export default App;
