import React from 'react';
import loaderImg from "../../assets/loaderImg.gif";
import "./Loader.scss"
import  ReactDOM  from 'react-dom';

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
        <div className="loader">
            <img src={loaderImg} alt="Loading..."/>
        </div>
    </div>,
    document.getElementById("loader")
  )
}

export const SpinnerImg = () => {
    return (
        <div className="--center-all">
             <img src={loaderImg} alt="Loading..."/>
        </div>
    )
}

export default Loader