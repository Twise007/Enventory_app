import React, {useState} from 'react';
import {BsArrowLeftCircle, BsChevronDown } from "react-icons/bs";
import { Link } from 'react-router-dom';
import menu from "../../data/sidebarData";


const Sidebar = ({children}) => {
  const [open, setOpen] = useState(true);
  const [subMenuOpen, setSubMenuOpen] = useState(false)

  return (
  <div className='h-screen flex' style={{ background:"white",}}>
    <div className={`h-screen ${open ? "w-72" : "w-16"} duration-500 `} style={{background:"var(--color-l-green)"}}>
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
    </div>
    
    <div className=" flex-1 h-screen
    ">
      {children}
    </div>
  </div>
  )
}

export default Sidebar