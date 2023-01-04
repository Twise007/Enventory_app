import React from 'react';
import { BiSearch } from "react-icons/bi";

const Search = ({value, onChange}) => {
  return (
    <div className="form-control " style={{color:"var(--color-black)", border:".5px solid var(--color-green)", borderRadius:"8px"}}>
        <div className="input-group">
            <input type="text" placeholder="Search…" value={value} onChange={onChange} className="input" style={{background:"var(--color-l-green)"}}/>
            <button className="btn btn-square" style={{background:"var(--color-green)", color:"var(--color-white)"}}>
                <BiSearch />
            </button>
        </div>
    </div>
  )
}

export default Search