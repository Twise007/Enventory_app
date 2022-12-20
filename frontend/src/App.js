import axios from "axios";
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Layout from "./component/layout/Layout";
import Sidebar from "./component/sidebar/Sidebar";
import Forgot from "./pages/auth/Forgot";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

axios.defaults.withCredentials =true;


function App() {
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
    </Routes>
    </BrowserRouter>
  );
}

export default App;
