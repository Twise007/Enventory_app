import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from "react-toastify";
import { registerUser, validateEmail } from '../../services/authService';
import { useDispatch } from 'react-redux';
import { SET_LOGIN, SET_NAME } from '../../redux/features/auth/authSlice';
import Loader from '../../components/loader/Loader';


const initialState ={
  name: "",
  email: "",
  password: "",
  password2: "",

}

const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const {name, email, password, password2} = formData;

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setformData ({ ...formData, [name]: value})
  }

  const register = async(e) => {
    e.preventDefault();

    if (!name || !email || !password ) {
      return toast.error("All field are required")
    }

    if (password !== password2) {
      return toast.error("Password do not match")
    }

    if (password.length < 6) {
      return toast.error("Password must be up to 6 character")
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email")
    }

    const userData = {
      name, email, password
    }
    setIsLoading(true)
    try {
      const data = await registerUser(userData)
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
        <h1 className="text-5xl font-bold" style={{background:"var(--color-l-green)"}}>Register now!</h1>
        <p className="py-6" style={{background:"var(--color-l-green)"}}>Register with us to keep track of your product</p>
      </div>
      <div className="card shadow-2xl" style={{width:'25pc'}} >
        <div className="card-body ">
        <form onSubmit={register}>
        <div className="form-control " >
          <label className="label">
            <span className="label-text" style={{fontSize:"16px", color:"var(--color-black)"}}>Name</span>
          </label>
          <input type="text" placeholder='Name' required name='name'  value={name} onChange={handleInputChange} className="input" style={{background:"var(--color-l-green)", color:'var(--color-black)' ,fontSize:"12px", border:"2px solid var(--color-green)"}}/>
        </div>
        <div className="form-control " >
          <label className="label">
            <span className="label-text" style={{fontSize:"16px", color:"var(--color-black)"}}>Email</span>
          </label>
          <input type="email" placeholder='Email' required name='email' value={email} onChange={handleInputChange} className="input" style={{background:"var(--color-l-green)", color:'var(--color-black)' ,fontSize:"12px", border:"2px solid var(--color-green)"}}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text" style={{fontSize:"16px", color:"var(--color-black)"}}>Password</span>
          </label>
          <input type="password" placeholder='Password' required name='password' value={password} onChange={handleInputChange} className="input" style={{background:"var(--color-l-green)", color:'var(--color-black)' ,fontSize:"12px", border:"2px solid var(--color-green)"}}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text" style={{fontSize:"16px", color:"var(--color-black)"}}>Confirm password</span>
          </label>
          <input type="password" placeholder='Confirm password' required name='password2' value={password2} onChange={handleInputChange} className="input" style={{background:"var(--color-l-green)", color:'var(--color-black)' ,fontSize:"12px", border:"2px solid var(--color-green)"}}/>
        </div>
        <div className="form-control mt-2">
          <button className="btn" type='submit' style={{background:"var(--color-green)", color:"var(--color-white)", fontSize:"12px"}}>Register</button>
        </div>
        </form>
            <Link to="/" className="label-text-alt link link-hover mt-1" style={{fontSize:"12px", color:"var(--color-black)"}}>Home</Link>
            <p style={{fontSize:"12px"}}> &nbsp;Already have an account? &nbsp; </p>
            <Link to="/login" className="label-text-alt link link-hover " style={{fontSize:"12px", color:"var(--color-black)"}}>Login</Link>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Register