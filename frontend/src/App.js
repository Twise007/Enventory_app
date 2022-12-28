import axios from "axios";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./components/layout/Layout";
import Sidebar from "./components/sidebar/Sidebar";
import Forgot from "./pages/auth/Forgot";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getLoginStatus } from "./services/authService";
import { SET_LOGIN } from "./redux/features/auth/authSlice";
import AddProduct from "./pages/addProduct/AddProduct";

axios.defaults.withCredentials =true;



function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus()
      dispatch(SET_LOGIN(status))
    }
    loginStatus()
  }, [dispatch])

  return (
    <BrowserRouter>
    <ToastContainer />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/resetpassword/:resetToken" element={<Reset />} />

      <Route path="/dashboard" element={
        <Sidebar>
          <Layout>
            <Dashboard />
          </Layout>
        </Sidebar>
      }/>

      <Route path="/add-product" element={
        <Sidebar>
          <Layout>
            <AddProduct />
          </Layout>
        </Sidebar>
      }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
