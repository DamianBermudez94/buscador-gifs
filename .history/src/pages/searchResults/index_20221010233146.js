import React, {useState, useEffect} from "react";
import ListOfGifs from "../../component/ListOfGifs";
import getGifs from "../../api/urlApi";

export default function searchResults ({params}){
    const {keyword} = params;
    const [setLoading] = useState(false);
    const [gifs, setGifs] = useState([]) 

    useEffect(function(){
        setLoading(true);
        getGifs({keyword}).then(gifs=>{
            setGifs(gifs)
            setLoading(false)
        })
    },[keyword])

    return <>

     <ListOfGifs gifs={gifs} />
        
    </>
    
}