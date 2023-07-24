import { useState } from "react"
import getGifs from "../helpers/getGifs";

export const useFecthcGifs = (category) =>{
    const [state, setstate] = useState({
        data: [],
        loading: true
    });
    useState(() =>{
        getGifs(category)
            .then(img =>setstate({
                data: img,
                loading: false
            }));
    },[category])
    return state;
}