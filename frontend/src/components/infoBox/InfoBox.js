import React from 'react'

const InfoBox = ({ title, count, icon }) => {
    return (
      <div className="stats ml-10 m-5 " style={{background:"var(--color-white)"}}>
        <div className="stats glass" style={{border:"3px solid var(--color-green)"}}>
            <div className="stat m-3" style={{width:"15pc", position:"relative"}}>
                <div className="stat-figure" style={{fontSize:"38px", position:"relative",bottom:"20px"}}>{icon}</div>
                <div className="stat-title text-xl" style={{color:"var(--color-green)", fontWeight:"600"}}>{title}{' :'}</div>
                <div className="stat-value mt-2" style={{color:"var(--color-black)"}}>{count}</div>
            </div>
        </div>
      </div>
    );
  };

export default InfoBox