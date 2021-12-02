import React from 'react';
import { useState } from "react";

export default function SearchBar(props){
    const [string, setString] = useState("")
    
    function handleSearch(event){
        console.log(event.target.value)
        setString(event.target.value);
        props.filterProduct(event.target.value)

    }

    return(
        <div>
                <label htmlFor="search">Search products</label>
        <input type="text" value={string} name="search" onChange={handleSearch}/>
    </div>
     
    )

}