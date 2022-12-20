import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
<div className="hero min-h-screen" style={{background:"var(--color-l-green)"}}>
  <div className="hero-content flex-col " style={{background:"var(--color-l-green)"}}>
    <div className="text-center" style={{background:"var(--color-l-green)", color:"var(--color-black)"}}>
      <h1 className="text-5xl font-bold" style={{background:"var(--color-l-green)"}}>Login now!</h1>
      <p className="py-6" style={{background:"var(--color-l-green)"}}>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shadow-2xl" style={{width:'25pc'}}>
      <div className="card-body ">
        <div className="form-control " >
          <label className="label ">
            <span className="label-text" style={{fontSize:"16px", color:"var(--color-black)"}}>Email</span>
          </label>
          <input type="email" placeholder='Email' required name='email' className="input input-bordered" style={{background:"var(--color-l-green)", color:'var(--color-black)' ,fontSize:"12px"}}/>
        </div>
        <div className="form-control">
          <label className="label ">
            <span className="label-text" style={{fontSize:"16px", color:"var(--color-black)"}}>Password</span>
          </label>
          <input type="password" placeholder='Password' required name='password' className="input input-bordered" style={{background:"var(--color-l-green)", color:'var(--color-black)' ,fontSize:"12px"}}/>
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
  </div>
</div>
  )
}

export default Login