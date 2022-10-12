import React from 'react';
import './App.css';
import ListOfGifs from './component/ListOfGifs';
import Home from './pages/home';
import {Link, Route} from "wouter"
//import SearchResults from './pages/searchResults';


export function App() {
  return (
    <div className="App">
      <section className="App-content">
          <h1>Bienvenidos a la app de GIFS</h1>
          <Link to="/">
                <button>GIFS</button>
          </Link>
          <Route
          component={Home}
          path="/"
          />
          <Route
            component={ListOfGifs}
            path="/search/:keyword"/>
          
         
      
      </section>
    </div>
  );
}

export default App;
