import React from 'react';

const Header = () => {
  return (
  <div className="navbar " style={{top: '0px', position: 'sticky', borderBottom: '.5px solid', background:'var(--color-l-green)',zIndex:'10'}}>
    <div className="navbar-start">
      <h1 style={{marginLeft:"10px", color:"var(--color-black)"}}>Welcome,</h1>
      <h1 style={{marginLeft:"10px", color:"red", textTransform:"capitalize"}}>tunde</h1>
    </div>
    <div className="navbar-end">
      <btn className="btn" style={{border:"1px solid", background:"var(--color-green)", color:"var(--color-l-green)"}}>Log Out</btn>
  </div>
  </div>
  )
}

export default Header