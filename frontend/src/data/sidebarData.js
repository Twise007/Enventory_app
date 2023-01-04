

import {MdDashboard, MdOutlineAddchart, MdAccountCircle, MdMessage} from "react-icons/md";

const menu =[
  { name:'Dashboard', link:'/dashboard', icon: MdDashboard},
  { name:'Add Product', link:'/add-product', icon: MdOutlineAddchart},
  { name:'Account', link:'/account', icon: MdAccountCircle},
  { name:'Report a Bug', link:'/bug', icon: MdMessage},
]

{/*
import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";


const menu = [

  {
    title: "Account",
    icon: <FaRegChartBar />,
    childrens: 
    [
      {
        title: "Profile",
        path: "/profile",
      },
      {
        title: "Edit Profile",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Report Bug",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
];*/}

export default menu;
