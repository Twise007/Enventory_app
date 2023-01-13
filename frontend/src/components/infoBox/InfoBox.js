import React from 'react'

const InfoBox = ({ title, count, icon }) => {
    return (
      <div className="stats ml-10 mt-5" style={{background:"var(--color-white)"}}>
        <div className="stats glass" style={{border:"3px solid var(--color-green)"}}>
            <div className="stat" style={{}}>
                  <div className="stat-figure" style={{fontSize:"38px"}}>{icon}</div>
                <div className="stat-title text-xl m-2" style={{color:"var(--color-green)", fontWeight:"600"}}>{title}{' :'}</div>
                <div className="stat-value " style={{color:"var(--color-black)"}}>{count}</div>
            </div>
        </div>
      </div>
    );
  };

export default InfoBox