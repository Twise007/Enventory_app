import React from 'react'

const Profile = () => {
  return (
    <>
        <div className="navbar bg-primary-content">
            <div className="flex-1" style={{color:"var(--color-black)", fontSize:"25px"}}>Profile:</div> 
        </div>
        <div className="hero pt-10" style={{background:"var(--color-off-white)"}}>
            <div className="shadow-2xl" style={{width:"40pc", background:"var(--color-white)"}}>
                <div className="hero-content flex-col lg:flex-row">
                    <img src="https://placeimg.com/260/400/arch" alt='' className=" rounded-full shadow-2xl p-5 m-5" style={{width:"22pc", height:"22pc", background:"var(--color-l-green)"}}/>
                    <div>
                        <p className="py-6" style={{textTransform:"capitalize"}}></p>
                        <div className="btn" style={{border:"1px solid", background:"var(--color-green)", color:"var(--color-l-green)"}}>Edit Profile</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile