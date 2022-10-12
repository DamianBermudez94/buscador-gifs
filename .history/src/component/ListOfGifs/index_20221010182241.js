import React,{useEffect,useState} from "react";
import Gif from "../Gif";
import getGifs from "../../api/urlApi";

export default function SearchResults({params}){
    const {keyword} = params
    const [loading, setLoading] = useState(false)

    const [gifs,setGifs] = useState([]);

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