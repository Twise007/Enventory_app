import React from 'react'

const InfoBox = ({ title, count, icon }) => {
    return (
      <div className="mt-5 ml-10 stats" style={{background:"var(--color-white)"}}>
        <div className="stats glass" style={{border:".5px solid var(--color-green)"}}>
            <div className="stat" style={{}}>
                  <div className="stat-figure" style={{fontSize:"38px"}}>{icon}</div>
                <div className="m-2 text-xl stat-title" style={{color:"var(--color-green)", fontWeight:"600"}}>{title}{' :'}</div>
                <div className="stat-value " style={{color:"var(--color-black)"}}>{count}</div>
            </div>
        </div>
      </div>
    );
  };

export default InfoBox