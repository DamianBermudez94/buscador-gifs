import React from "react";
import "gifs.css"


export default function Gif ({title, url, id}){
    return <div className="gif">
    <span>{title}</span>
    <img alt={title} src={url}/>
  </div>
}