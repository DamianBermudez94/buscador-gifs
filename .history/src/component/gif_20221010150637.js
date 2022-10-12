import React from "react";


export default function Gif ({title, url}){
    return <div>
    <span>{title}</span>
    <img alt={title} src={url}/>
  </div>
}