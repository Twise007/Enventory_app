import React from 'react'

const InfoBox = ({ title, count, icon }) => {
    return (
      <div className="stats ml-10 m-5 " style={{background:"var(--color-white)"}}>
        <div className="stats glass" style={{border:"3px solid var(--color-green)"}}>
            <div className="stat p-2 m-3" style={{width:"15pc"}}>
                <div className="stat-figure text-secondary">{icon}</div>
                <div className="stat-title text-xl" style={{color:"var(--color-green)", fontWeight:"600"}}>{title}{' :'}</div>
                <div className="stat-value" style={{color:"var(--color-black)"}}>{count}</div>
            </div>
        </div>
      </div>
    );
  };

export default InfoBox