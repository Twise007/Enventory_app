import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {toast} from "react-toastify";
import { resetPassword } from '../../services/authService';



const initialState ={
  password: "",
  password2: "",
}

const Reset = () => {
  const navigate = useNavigate()
  const [formData, setformData] = useState(initialState);
  const { password, password2 } = formData;
  const {resetToken} =useParams()

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setformData ({ ...formData, [name]: value})
  }

  const reset = async (e) => {
    e.preventDefault();

    if (!password ) {
      return toast.error("All field are required")
    }

    if (password !== password2) {
      return toast.error("Password do not match")
    }

    if (password.length < 6) {
      return toast.error("Password must be up to 6 character")
    }

    const userData = {
      password,
      password2,
    };

    try {
      const data = await resetPassword(userData, resetToken)
      toast.success(data.message)
      navigate("/login")
    } catch (error) {
      console.log(error.message);
    }

  }

  return (
    <div className="hero min-h-screen" style={{background:"var(--color-l-green)"}}>
    <div className="hero-content flex-col " style={{background:"var(--color-l-green)"}}>
      <div className="text-center" style={{background:"var(--color-l-green)", color:"var(--color-black)"}}>
        <h1 className="text-5xl font-bold" style={{background:"var(--color-l-green)"}}>Reset Password!</h1>
        <p className="py-6" style={{background:"var(--color-l-green)"}}>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      </div>
      <form onSubmit={reset}>
      <div className="card shadow-2xl" style={{width:'25pc'}} >
        <div className="card-body ">
        <div className="form-control">
          <label className="label ">
            <span className="label-text" style={{fontSize:"16px", color:"var(--color-black)"}}>New password</span>
          </label>
          <input type="password" placeholder='New password' required name='password' value={password} onChange={handleInputChange} className="input input-bordered" style={{background:"var(--color-l-green)", color:'var(--color-black)' ,fontSize:"12px"}}/>
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text" style={{fontSize:"16px", color:"var(--color-black)"}}>Confirm new password</span>
          </label>
          <input type="password" placeholder='Confirm new password' required name='password2' value={password2} onChange={handleInputChange} className="input input-bordered" style={{background:"var(--color-l-green)", color:'var(--color-black)' ,fontSize:"12px"}}/>
        </div>
          <div className="form-control mb-2">
            <button type='submit' className="btn" style={{background:"var(--color-green)", color:"var(--color-white)", fontSize:"12px"}}>Get reset email</button>
          </div>
            <Link to="/" className="label-text-alt link link-hover mb-2" style={{fontSize:"12px", color:"var(--color-black)"}}>- Home</Link>
            <Link to="/login" className="label-text-alt link link-hover mb-2" style={{fontSize:"12px", color:"var(--color-black)"}}>- Login</Link>
        </div>
      </div>
      </form>
  </div>
</div>
  )
}

export default Reset