import React from "react";
import Gif from "./gif";
export default function ListOfGifs({gifs}){
    return  gifs.map(singleGifs => 
        <Gif
        key={singleGifs.id} 
        title={singleGifs.title} 
        url={singleGifs.url} />)
       

}