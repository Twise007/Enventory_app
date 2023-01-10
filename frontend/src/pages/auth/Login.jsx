import React from 'react';
import { useState } from 'react';
import {toast} from "react-toastify";
import { Link, useNavigate } from 'react-router-dom';
import { loginUser, validateEmail } from '../../services/authService';
import { useDispatch } from 'react-redux';
import { SET_LOGIN, SET_NAME } from '../../redux/features/auth/authSlice';
import Loader from '../../components/loader/Loader';



const initialState ={
  email: "",
  password: "",
}


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setformData ({ ...formData, [name]: value})
  }
  
  const login = async(e) => {
    e.preventDefault();

    if ( !email || !password ) {
      return toast.error("All field are required")
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email")
    }

    const userData = {
       email, password
    };

    setIsLoading(true)
    try {
      const data = await loginUser(userData);
      console.log(data);
      await dispatch(SET_LOGIN(true))
      await dispatch(SET_NAME(data.name))
      navigate("/dashboard")
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
    }

  }


  return (
<div className="hero min-h-screen" style={{background:"var(--color-l-green)"}}>
  {isLoading && <Loader />}
  <div className="hero-content flex-col " style={{background:"var(--color-l-green)"}}>
    <div className="text-center" style={{background:"var(--color-l-green)", color:"var(--color-black)"}}>
      <h1 className="text-5xl font-bold" style={{background:"var(--color-l-green)"}}>Login now!</h1>
      <p className="py-6" style={{background:"var(--color-l-green)"}}>Kindly Login your detail to veiw your records</p>
    </div>
    <form onSubmit={login} >
    <div className="card shadow-2xl" style={{width:'25pc'}}>
      <div className="card-body ">
        <div className="form-control " >
          <label className="label ">
            <span className="label-text" style={{fontSize:"16px", color:"var(--color-black)"}}>Email</span>
          </label>
          <input type="email" placeholder='Email' required name='email' value={email} onChange={handleInputChange} className="input" style={{background:"var(--color-l-green)", color:'var(--color-black)' ,fontSize:"12px", border:"2px solid var(--color-green)"}}/>
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text" style={{fontSize:"16px", color:"var(--color-black)"}}>Password</span>
          </label>
          <input type="password" placeholder='Password' required name='password' value={password} onChange={handleInputChange} className="input" style={{background:"var(--color-l-green)", color:'var(--color-black)' ,fontSize:"12px", border:"2px solid var(--color-green)"}}/>
        </div>
            <Link to="/forgot" className="label-text-alt link link-hover mb-1" style={{fontSize:"12px", color:"var(--color-black)"}}>Forgot password?</Link>
            <Link to="/" className="label-text-alt link link-hover mb-1" style={{fontSize:"12px", color:"var(--color-black)"}}>Home</Link>
            <p style={{fontSize:"12px"}}> &nbsp; Don't have an account? &nbsp; </p>
            <Link to="/register" className="label-text-alt link link-hover mb-1" style={{fontSize:"12px", color:"var(--color-black)"}}>Register</Link>
        <div className="form-control mt-2">
          <button type='submit' className="btn" style={{background:"var(--color-green)", color:"var(--color-white)", fontSize:"12px"}}>Login</button>
        </div>
      </div>
    </div>
    </form>
  </div>
</div>
  )
}

export default Login