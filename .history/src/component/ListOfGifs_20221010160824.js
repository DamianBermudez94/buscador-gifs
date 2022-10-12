import React,{useEffect,useState} from "react";
import Gif from "./gif";
import getGifs from "../api/urlApi";

export default function ListOfGifs({props}){
    console.log(props);
    const keyword = ""
    const [gifs,setGifs] = useState([]);

    useEffect(function(){
      
      
      getGifs({keyword}).then(gifs => setGifs(gifs))
  
    },[keyword]);

    return  gifs.map(singleGifs => 
        <Gif
        key={singleGifs.id} 
        title={singleGifs.title} 
        url={singleGifs.url} />)
       

}