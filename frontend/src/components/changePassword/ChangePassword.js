import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { changePassword } from '../../services/authService';


const initialState ={
    oldPassword: "",
    password: "",
    password2: "",
  }

const ChangePassword = () => {
    const navigate = useNavigate()
const [formData, setformData] = useState(initialState);
  const { oldPassword, password, password2 } = formData;

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setformData ({ ...formData, [name]: value})
  }
 
const changePass = async (e) => {
    e.preventDefault()

    if (password !== password2) {
        return toast.error("New passwords donot match")
    }

    const formData = {
        oldPassword,
        password
    }
    const data =await changePassword(formData)
    toast.success(data)
    navigate("/profile")
}


  return (
    <div className=" shadow-2xl m-2 p-2" style={{ border:"2px solid var(--color-green)"}}>
        <div className=" bg-primary-content">
            <div style={{color:"var(--color-black)", fontSize:"25px", borderBottom:"2px solid var(--color-green)"}}>Change Password:</div> 
        </div>
        <form onSubmit={changePass} className="p-2" >
                <label className="input-group ">
                    <span className='label-text p-1' style={{background:"var(--color-green)", color:"var(--color-white)", textTransform:"capitalize",}}>Old Password</span> 
                    <input type="password" placeholder='Old Password' name='oldPassword' value={oldPassword} onChange = {handleInputChange} className="input input-bordered" style={{background:"var(--color-l-green)", width:"100%", color:"var(--color-black)",}}/>
                </label>   

            <div style={{borderBottom:"2px solid var(--color-green)"}} className='p-2'/>
                <label className="input-group ">
                    <span className='label-text p-1' style={{background:"var(--color-green)", color:"var(--color-white)", textTransform:"capitalize",}}>New Password</span> 
                    <input type="password" placeholder='New Password' name='password' value={password} onChange = {handleInputChange} className="input input-bordered" style={{background:"var(--color-l-green)", width:"100%", color:"var(--color-black)",}}/>
                </label>

            <div style={{borderBottom:"2px solid var(--color-green)"}} className='p-2'/>
                <label className="input-group ">
                    <span className='label-text p-1' style={{background:"var(--color-green)", color:"var(--color-white)", textTransform:"capitalize",}}>Confirm Password</span> 
                    <input type="password" placeholder='Confirm Password' name='password2' value={password2} onChange = {handleInputChange} className="input input-bordered" style={{background:"var(--color-l-green)", width:"100%", color:"var(--color-black)",}}/>
                </label>

            <button type='submit' className="btn mt-3" style={{background:"var(--color-green)", color:"var(--color-l-green)"}}>Change Password</button>

        </form>
    </div>
  )
}

export default ChangePassword