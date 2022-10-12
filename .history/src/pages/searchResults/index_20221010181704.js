import React from "react";
import {Link} from "wouter";

const POPULAR_GIFS = ["Matrix", "Messi","Code","Gamming"];

export default function SearchResults(){
    return (
        <div>
            <h3 className="App-title">Los gifs mas populares</h3>
            <ul>
                {POPULAR_GIFS.map((popularesGifs)=>{
                    <li key={popularesGifs}>
                        <Link to={`/search/${popularesGifs}`}>Gifs de {popularesGifs}</Link>
                    </li>
                })}
            </ul>
        </div>
    )
}