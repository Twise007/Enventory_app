import React from 'react'

const InfoBox = ({ title, count, icon }) => {
    return (
      <div className={`m-5`}>
        <div className="stats bg-primary-content">
            <div className="stat">
                <div className="stat-figure text-secondary">{icon}</div>
                <div className="stat-title">{title}</div>
                <div className="stat-value">{count}</div>
            </div>
        </div>


        <span></span>
        <span>
          <p></p>
          <h4></h4>
        </span>
      </div>
    );
  };

export default InfoBox