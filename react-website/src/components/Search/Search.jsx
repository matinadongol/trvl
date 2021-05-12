import React, { useState } from 'react';
import './Search.css';
import Sresult from './Sresult';

const Search = () => {

    const [img, setImg] = useState("");

    const inputdata = (event) => {
        const data = event.target.value;
        setImg(data);
        console.log(data);
    };

    return (
        <>
        <div className="searchbar">
            <input type="text" placeholder="Search Anything" onChange={inputdata} value={img}/>
            <br/>
            {img === ""? null : <Sresult name={img}/>}
        </div>
           
        </>
    )
}

export default Search
