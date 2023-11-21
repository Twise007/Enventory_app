import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SpinnerImg } from "../../components/loader/Loader";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { SET_NAME, SET_USER } from "../../redux/features/auth/authSlice";
import { getUser } from "../../services/authService";

const Profile = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log("Getting user");
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
    <div className="">
      <div className="navbar bg-primary-content">
        <div
          className="flex-1"
          style={{
            color: "var(--color-black)",
            fontSize: "25px",
            borderBottom: "2px solid var(--color-green)",
          }}
        >
          Profile:
        </div>
      </div>
      {isLoading && <SpinnerImg />}
      <div className="w-full pl-2 hero">
        {!isLoading && profile === null ? (
          <p>Something went wrong, please reload the page...</p>
        ) : (
          <div className="flex flex-col items-center justify-center md:w-[80%] md:mt-10  w-full">
            <img
              src={profile?.photo}
              alt="profilepic"
              className="w-40 h-40 rounded-full shadow-2xl md:p-2 md:w-60 md:h-60"
              style={{
                background: "var(--color-l-green)",
              }}
            />

            <div
              className="w-full p-2 mt-2 text-black capitalize md:text-center rounded-xl"
              style={{
                background: "var(--color-l-green)",
              }}
            >
              <div className="items-center justify-center gap-2 my-2 md:flex md:justify-around">
                <div className="w-full p-2 bg-white rounded-xl">
                  {profile?.name}
                </div>
                <div className="w-full p-2 mt-2 bg-white md:mt-0 rounded-xl">
                  {profile?.phone}
                </div>
              </div>
              <h1 className="w-full p-2 bg-white rounded-xl">
                {profile?.email}
              </h1>
              <Link to="/edit-profile">
                <button
                  type="submit"
                  className="w-full py-2 my-2 rounded-xl"
                  style={{
                    background: "var(--color-green)",
                    color: "var(--color-l-green)",
                  }}
                >
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
