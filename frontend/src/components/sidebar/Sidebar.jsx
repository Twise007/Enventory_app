import React, {useState} from 'react';
import {BsArrowLeftCircle} from "react-icons/bs";
import {MdDashboard, MdOutlineAddchart, MdAccountCircle, MdMessage} from "react-icons/md";
import { Link } from 'react-router-dom';
import Layout from '../layout/Layout';


const Sidebar = ({children}) => {

  const [open, setOpen] = useState(true)

  const menus =[
    { name:'Dashboard', link:'/dashboard', icon: MdDashboard},
    { name:'Add Product', link:'/add-product', icon: MdOutlineAddchart},
    { name:'Account', link:'/account', icon: MdAccountCircle},
    { name:'Report a Bug', link:'/bug', icon: MdMessage},
  ]

  return (
  <div className='flex'>
    <div className={` min-h-screen ${open ? "w-72" : "w-16"} duration-500 `} style={{background:"var(--color-l-green)"}}>
      <div className="py-5 px-5 flex justify-end" style={{background:"var(--color-green)"}}>
        <BsArrowLeftCircle size={26} className={` cursor-pointer ${!open && "rotate-180"}
        `}  onClick={()=> setOpen(!open)} style={{color:"var(--color-l-green)" ,background:"var(--color-green)", borderRadius:"50%"}}/>
      </div>
      <div className="mt-3 flex flex-col gap-4 px-4 relative">
      {
        menus?.map((menu,i) => (
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
          </h2>
          <h2 className={`${open && "hidden"} absolute left-48 bg-[var(--color-l-green)] font-semibold 
            whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden
            group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>
            {menu?.name}
          </h2>
        </Link>
        ))
      }
      </div>
    </div>
    
    <div className=" flex-1 h-screen
    ">
      <Layout/>
    </div>
  </div>
  )
}

export default Sidebar