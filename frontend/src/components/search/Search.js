import React from 'react';
import { BiSearch } from "react-icons/bi";

const Search = ({value, onChange}) => {
  return (
    <div>
      <div className='flex items-center justify-center'>
        <input
          type="text"
          placeholder="Search…"
          value={value}
          onChange={onChange}
          className="w-full px-2 text-black rounded-none outline-none input"
          style={{ background: "var(--color-l-green)" }}
        />
        <button
          className="hover:bg-[#f5f5f5] p-4 rounded-r-xl text-white"
          style={{
            background: "var(--color-green)",
          }}
        >
          <BiSearch />
        </button>
      </div>
      
    </div>
  );
}

export default Search