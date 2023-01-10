import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../services/authService';
import { selectName, SET_LOGIN } from '../../redux/features/auth/authSlice';


const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector(selectName);
  
  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    navigate("/login")
  }


  return (
  <div className="navbar " style={{top: '0px', position: 'sticky', borderBottom: '.5px solid', background:'var(--color-l-green)',zIndex:'998'}}>
    <div className="navbar-start">
      <h1 style={{marginLeft:"10px", color:"var(--color-black)"}}>Welcome,</h1>
      <h1 style={{marginLeft:"10px", color:"red", textTransform:"capitalize"}}>{name}</h1>
    </div>
    <div className="navbar-end" onClick={logout}>
      <div className="btn" style={{border:"1px solid", background:"var(--color-green)", color:"var(--color-l-green)"}}>Log Out</div>
    </div>
  </div>
  )
}

export default Header