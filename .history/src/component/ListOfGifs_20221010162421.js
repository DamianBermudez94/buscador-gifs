import React,{useEffect,useState} from "react";
import Gif from "./gif";
import getGifs from "../api/urlApi";

export default function ListOfGifs({params}){
    const {keyword} = params
    const [gifs,setGifs, loading , setLoading] = useState([]);

    useEffect(function(){
        setLoading(true)
      getGifs({keyword}).then(gifs => {
        setGifs(gifs)
        setLoading(false)
      })
    },[keyword]);
    if(loading) return <i>Cargando....</i>
    return  gifs.map(singleGifs => 
        <Gif
        key={singleGifs.id} 
        title={singleGifs.title} 
        url={singleGifs.url} />)
       

}