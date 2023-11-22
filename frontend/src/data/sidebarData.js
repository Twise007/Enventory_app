import {
  MdDashboard,
  MdOutlineAddchart,
  MdAccountCircle,
  MdMessage,
} from "react-icons/md";

const menu = [
  { name: "Dashboard", link: "/dashboard", icon: MdDashboard },
  { name: "Add Product", link: "/add-product", icon: MdOutlineAddchart },
  { name: "Profile", link: "/profile", icon: MdAccountCircle,},
  { name: "Report a Bug", link: "/contact-us", icon: MdMessage },
];

export default menu;
