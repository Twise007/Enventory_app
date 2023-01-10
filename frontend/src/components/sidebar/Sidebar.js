import React, {useState} from 'react';
import {BsArrowLeftCircle, BsChevronDown} from "react-icons/bs";

import { TfiBookmarkAlt } from "react-icons/tfi"
import { Link } from 'react-router-dom';
import menu from "../../data/sidebarData";


const Sidebar = ({children}) => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false)

  return (
  <div className='h-screen flex'>

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

      {/* <div className={`h-screen ${open ? "w-72" : "w-16"} duration-500 `} style={{background:"var(--color-l-green)"}}>
      <div className="py-5 px-5 flex justify-end" style={{background:"var(--color-green)"}}>
        <BsArrowLeftCircle size={26} className={` cursor-pointer ${!open && "rotate-180"}
        `}  onClick={()=> setOpen(!open)} style={{color:"var(--color-l-green)" ,background:"var(--color-green)", borderRadius:"50%"}}/>
      </div>
      <div className="mt-3 flex flex-col gap-4 px-4 relative">
      {
        menu?.map((menu,i) => (
          <Link to={menu?.link} key={i} className= {` group flex items-center text-sm gap-3.5 
          font-meduim p-2 hover:bg-[#f5f5f5] duration-300`} style={{borderBottom:"1px solid var(--color-green)", borderRadius:"0", color:"var(--color-black)"}}>
          <div style={{color:"var(--color-green)", }}>
            {React.createElement(menu?.icon, { size: "20"})}
          </div>
          <h2 style={{
            transitionDelay: `${i + 3}00ms`
          }}
          className={`duration-500 ${!open && 'opacity-0 translate-x-28 overflow-hidden'}`}>
            {menu?.name}
            <ul className="menu menu-horizontal px-1">
              <li tabIndex={0}>
                {menu.subMenu && (
                <p><BsChevronDown  
                  onClick={() => setSubMenuOpen(!subMenuOpen)} /></p>
                  )}
                {menu.subMenu && subMenuOpen && open && (
                  <ul className="p-2 m-2 shadow4xl w-30 glass" style={{background:""}} >
                    {menu.subMenu.map((subMenu, index) => (
                      <Link  to={subMenu.link} key={index}>
                        <li className="p-2 hover:glass" style={{borderRadius:"10px"}}>{subMenu.name}</li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </h2>
          <h2 className={`${open && "hidden"} absolute left-48 bg-[var(--color-l-green)] font-semibold 
            whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden
            group-hover:px-2 group-hover:py-1 group-hover:left-12 group-hover:duration-300 group-hover:w-fit `} style={{zIndex:"10"}}>
            {menu?.name}
            <ul className="menu menu-horizontal px-1">
              <li tabIndex={0}>
                {menu.subMenu && (
                <><BsChevronDown  
                  onClick={() => setSubMenuOpen(!subMenuOpen)} /></>
                  )}
                {menu.subMenu && subMenuOpen && open && (
                  <ul className="p-2 m-2 shadow4xl w-30 glass" style={{background:""}} >
                    {menu.subMenu.map((subMenu, index) => (
                      <Link  to={subMenu.link} key={index}>
                        <li className="p-2 hover:glass" style={{borderRadius:"10px"}}>{subMenu.name}</li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </h2>
        </Link>
        ))
      }
      </div>
    </div> */}



    <div className="h-screen" style={{width:"100%"}}>
      {children}
    </div>
  </div>
  )
}

export default Sidebar