import React, {useState} from 'react';
import {BsArrowLeftCircle, BsChevronDown} from "react-icons/bs";

import { TfiBookmarkAlt } from "react-icons/tfi"
import { Link } from 'react-router-dom';
import menu from "../../data/sidebarData";


const Sidebar = ({children}) => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false)

  return (
  <div className='h-screen flex w-full'>

      <div className={`h-screen bg-c-l-green ${open ? "w-72" : "w-20"} relative duration-500 `}>      
          <div className='bg-bg-green p-3'>
            <BsArrowLeftCircle size={26} className={`cursor-pointer absolute -right-3 top-9 ${!open && "rotate-180"}
              `}  onClick={()=> setOpen(!open)} style={{color:"var(--color-green)" ,background:"var(--color-l-green)", borderRadius:"50%", zIndex:"999"}}/>
            <Link to="/">
              <div className='inline-flex'>
                <TfiBookmarkAlt className={`bg-c-l-green p-1 text-4xl rounded cursor-pointer block float-left mr-2 duration-700 ${!open && "rotate-[360deg]"}`} style={{color:"var(--color-green)"}}/>
                <h1 className={`text-white origin-left font-meduim text-2xl duration-500 ${!open && "scale-0"}`}>E-ventory</h1>
              </div>
            </Link>
          </div>
        
      
      <div className={`mt-3 flex flex-col pr-2 relative`}>        
        <ul className=''>
          {menu.map((menu, index)=>(
            <Link to={menu.link} key={index}>
                <li key={index} className='group text-sm flex items-center gap-x-4 cursor-pointer hover:bg-c-l-green rounded-md p-2 m-3' style={{borderBottom:"1px solid var(--color-green)", borderRadius:"0", color:"var(--color-black)"}}>
                  <span className='text-2xl block float-left'>
                    <div style={{color:"var(--color-green)"}}>
                      {React.createElement(menu?.icon, { size: "20"})}
                    </div>
                  </span>
                  <span className={`text-base font-meduim duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`} style={{
                    transitionDelay: `${index + 3}00ms`}}>{menu.name}</span>
                  
                  {/*title hover design below */}
                  <span className={`${open && "hidden"} absolute left-48 bg-[var(--color-l-green)] font-semibold 
                      whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden
                      group-hover:px-2 group-hover:py-1 group-hover:left-12 group-hover:duration-300 group-hover:w-fit `} style={{zIndex:"10"}}>
                      {menu.name} 
                  </span>
                    {menu.subMenu && open && (
                      <BsChevronDown className={`${subMenuOpen && "rotate-180"}`} onClick={() =>  setSubMenuOpen(!subMenuOpen)} />
                    )} 
                </li>

                {menu.subMenu && subMenuOpen && open && (
                  <ul className="m-4 shadow4xl glass rounded-md">
                    {menu.subMenu.map((subMenu, index) => (
                      <Link  to={subMenu.link} key={index}>
                        <li className='text-sm flex items-center cursor-pointer hover:bg-[fffff] m-1 p-2 ' style={{color:"var(--color-black)"}}>
                          {subMenu.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
            </Link>  
          ))}
        </ul>
      </div>

      </div>

    <div className="overflow-y-scroll flex-1 h-screen">
      {children}
    </div>
  </div>
  )
}

export default Sidebar