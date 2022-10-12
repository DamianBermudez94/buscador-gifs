import React from "react";
import { Link } from "wouter";
import { ListOfGifs } from "../searchResults"


export default function SearchResults(){
    return (
        <div>
            <ListOfGifs></ListOfGifs>
            <Link to="/gif/gohan"> Gifs de gohan</Link>
            <Link to="/gif/majinbu"> Gifs de gohan</Link>
            <Link to="/gif/vegeta"> Gifs de vegeta</Link>
        </div>
    )
}