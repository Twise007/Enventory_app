import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SpinnerImg } from '../../components/loader/Loader'
import useRedirectLoggedOutUser from '../../customHook/useRedirectLoggedOutUser'
import { SET_NAME, SET_USER } from '../../redux/features/auth/authSlice'
import { getUser } from '../../services/authService'

const Profile = () => {
    useRedirectLoggedOutUser("/login");
    const dispatch = useDispatch();
  
    const [profile, setProfile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      console.log("Getting use");
      setIsLoading(true);
      async function getUserData() {
        const data = await getUser();
        console.log(data);
  
        setProfile(data);
        setIsLoading(false);
        await dispatch(SET_USER(data));
        await dispatch(SET_NAME(data.name));
      }
      getUserData();
    }, [dispatch]);
    
  return (
    <div>
        <div className="navbar bg-primary-content">
            <div className="flex-1" style={{color:"var(--color-black)", fontSize:"25px"}}>Profile:</div> 
        </div>
        {isLoading && <SpinnerImg />}
        <>
        {!isLoading && profile === null ? (
          <p>Something went wrong, please reload the page...</p>
        ) : (
                <div className="hero pt-10" style={{background:"var(--color-off-white)",}}>
                    <div className="shadow-2xl" style={{width:"40pc", background:"var(--color-white)"}}>
                        <div className="hero-content flex-col lg:flex-row">
                            <img src={profile?.photo} alt='profilepic' className=" rounded-full shadow-2xl p-5 m-" style={{width:"22pc", height:"22pc", background:"var(--color-l-green)"}}/>
                            <div>
                                <p className="p-1" style={{textTransform:"capitalize"}}><b>name : </b> {profile.name}</p>
                                <hr/>
                                <p className="p-1" style={{}}><b>Email : </b> {profile.email}</p>
                                <hr/>
                                <p className="p-1" style={{textTransform:"capitalize"}}><b>phone : </b> {profile.phone}</p>
                                <hr/>
                                <p className="p-1" style={{textTransform:"capitalize"}}><b>bio : </b> {profile.bio}</p>
                                <Link to="/edit-profile">
                                    <div className="btn m-5" style={{border:"1px solid", background:"var(--color-green)", color:"var(--color-l-green)"}}>Edit Profile</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    </div>
  )
}

export default Profile