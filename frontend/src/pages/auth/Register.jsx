import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import {toast} from "react-toastify";
import { registerUser, validateEmail } from '../../services/authService';


const initialState ={
  name: "",
  email: "",
  password: "",
  password2: "",

}

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setformData] = useState(initialState);
  const {name, email, password,password2} = formData;

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setformData({ ...formData, [name]: value})
  }

  const register = async(e) => {
    e.preventDefault()

    if (!name || !email || !password) {
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
      console.log(data);
      setIsLoading(false)
    } catch (error) {
    setIsLoading(false)
    console.log(error.message);
    }
  }

  return (
    <div className="hero min-h-screen" style={{background:"var(--color-l-green)"}}>
    <div className="hero-content flex-col " style={{background:"var(--color-l-green)"}}>
      <div className="text-center" style={{background:"var(--color-l-green)", color:"var(--color-black)"}}>
        <h1 className="text-5xl font-bold" style={{background:"var(--color-l-green)"}}>Register now!</h1>
        <p className="py-6" style={{background:"var(--color-l-green)"}}>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <div className="card shadow-2xl" style={{width:'25pc'}} >
        <div className="card-body ">
        <form onSubmit={register}>
        <div className="form-control " >
          <label className="label">
            <span className="label-text" style={{fontSize:"16px", color:"var(--color-black)"}}>Name</span>
          </label>
          <input type="text" placeholder='Name' required name='name'  value={name} onChange={handleInputChange} className="input input-bordered" style={{background:"var(--color-l-green)", color:'var(--color-black)' ,fontSize:"12px"}}/>
        </div>
        <div className="form-control " >
          <label className="label">
            <span className="label-text" style={{fontSize:"16px", color:"var(--color-black)"}}>Email</span>
          </label>
          <input type="email" placeholder='Email' required name='email' value={email} onChange={handleInputChange} className="input input-bordered" style={{background:"var(--color-l-green)", color:'var(--color-black)' ,fontSize:"12px"}}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text" style={{fontSize:"16px", color:"var(--color-black)"}}>Password</span>
          </label>
          <input type="password" placeholder='Password' required name='password' value={password} onChange={handleInputChange} className="input input-bordered" style={{background:"var(--color-l-green)", color:'var(--color-black)' ,fontSize:"12px"}}/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text" style={{fontSize:"16px", color:"var(--color-black)"}}>Confirm password</span>
          </label>
          <input type="password" placeholder='Confirm password' required name='password2' value={password2} onChange={handleInputChange} className="input input-bordered" style={{background:"var(--color-l-green)", color:'var(--color-black)' ,fontSize:"12px"}}/>
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