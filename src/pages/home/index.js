import React, {useState} from "react";
import {Link, useLocation} from "wouter";

const POPULAR_GIFS = ["Matrix", "Messi","Code","Gamming"];


export default function Home(){
    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();
    const handleSubmit = event =>{
        event.preventDefault();
        console.log(keyword);
        // navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }
    const handleChanche = event =>{
        setKeyword(event.target.value);
    }
    return (
        <div>
            
            <form onSubmit={handleSubmit}>
                <input placeholder="Buscar gifs..." onChange={handleChanche} type="text" value={keyword} />
                <button>Buscar</button>
            </form>
        
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