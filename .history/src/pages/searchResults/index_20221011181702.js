import React, {useState, useEffect} from "react";
import ListOfGifs from "../../component/ListOfGifs";
import getGifs from "../../api/urlApi";
import Spinner from "../../component/spinner";

export default function searchResults ({params}){
    const {keyword} = params;
    const [loading,setLoading] = useState(false);
    const [gifs, setGifs] = useState([]) 

    useEffect(function(){
        setLoading(true);
        getGifs({keyword}).then(gifs=>{
            setGifs(gifs)
            setLoading(false)
        })
    },[keyword])

    return <div>
        {loading
            ?<Spinner />
            :<ListOfGifs gifs={gifs} />   
        }
            
        
    </div>
    
}