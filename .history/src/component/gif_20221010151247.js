import React from "react";


export default function Gif ({title, url, id}){
    return <div>
    <span>{title}</span>
    <img alt={title} src={url}/>
  </div>
}