import React from "react";
import {Link} from "wouter";
import ListOfGifs from "./component/ListOfGifs"

const POPULAR_GIFS = ["Matrix", "Messi","Code","Gamming"];

export default function SearchResults(){
    return (
        <div>
           <ListOfGifs></ListOfGifs>
        </div>
    )
}