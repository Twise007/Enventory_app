import {
  MdDashboard,
  MdOutlineAddchart,
  MdAccountCircle,
  MdMessage,
} from "react-icons/md";

const menu = [
  { name: "Dashboard", link: "/dashboard", icon: MdDashboard },
  { name: "Add Product", link: "/add-product", icon: MdOutlineAddchart },
  {
    name: "Account",
    icon: MdAccountCircle,
    subMenu: [
      {
        name: "Profile",
        link: "/profile",
      },
      {
        name: "Edit Profile",
        link: "/edit-profile",
      },
    ],
  },
  { name: "Report a Bug", link: "/contact-us", icon: MdMessage },
];

export default menu;
