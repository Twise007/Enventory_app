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
    <>
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
        <>
          {!isLoading && profile === null ? (
            <p>Something went wrong, please reload the page...</p>
          ) : (
            <div
              className="pt-10 pb-10"
              style={{ background: "var(--color-off-white)" }}
            >
              <div
                className="shadow-2xl"
                style={{ background: "var(--color-white)" }}
              >
                <div className="p-5">
                  <img
                    src={profile?.photo}
                    alt="profilepic"
                    className="p-5 rounded-full shadow-2xl "
                    style={{
                      width: "22pc",
                      height: "22pc",
                      background: "var(--color-l-green)",
                    }}
                  />
                  <div className="shadow-2xl ">
                    <div className="m-2 card">
                      <label className="pt-3 input-group">
                        <span
                          style={{
                            background: "var(--color-green)",
                            color: "var(--color-white)",
                            textTransform: "capitalize",
                          }}
                        >
                          name
                        </span>
                        <p
                          className="w-full p-2 "
                          style={{
                            background: "var(--color-l-green)",
                            color: "var(--color-black)",
                            textTransform: "capitalize",
                          }}
                        >
                          {profile?.name}
                        </p>
                      </label>

                      <div
                        style={{ borderBottom: "2px solid var(--color-green)" }}
                        className="p-2"
                      />
                      <div className="form-control">
                        <label className="pt-3 input-group">
                          <span
                            style={{
                              background: "var(--color-green)",
                              color: "var(--color-white)",
                              textTransform: "capitalize",
                            }}
                          >
                            email
                          </span>
                          <span
                            className="p-2 "
                            style={{
                              background: "var(--color-l-green)",
                              color: "var(--color-black)",
                              textTransform: "capitalize",
                            }}
                          >
                            {profile?.email}
                          </span>
                        </label>
                      </div>

                      <div
                        style={{ borderBottom: "2px solid var(--color-green)" }}
                        className="p-2"
                      />
                      <div className="form-control">
                        <label className="pt-3 input-group">
                          <span
                            style={{
                              background: "var(--color-green)",
                              color: "var(--color-white)",
                              textTransform: "capitalize",
                            }}
                          >
                            phone
                          </span>
                          <p
                            className="w-full p-2 "
                            style={{
                              background: "var(--color-l-green)",
                              color: "var(--color-black)",
                              textTransform: "capitalize",
                            }}
                          >
                            {profile?.phone}
                          </p>
                        </label>
                      </div>

                      <div
                        style={{ borderBottom: "2px solid var(--color-green)" }}
                        className="p-2"
                      />
                      <label className="pt-3 input-group">
                        <span
                          style={{
                            background: "var(--color-green)",
                            color: "var(--color-white)",
                            textTransform: "capitalize",
                          }}
                        >
                          bio
                        </span>
                        <p
                          className="w-full p-2 "
                          style={{
                            background: "var(--color-l-green)",
                            color: "var(--color-black)",
                            textTransform: "capitalize",
                          }}
                        >
                          {profile?.bio}
                        </p>
                      </label>
                      <div
                        style={{ borderBottom: "2px solid var(--color-green)" }}
                        className="p-2"
                      />

                      <Link to="/edit-profile">
                        <button
                          type="submit"
                          className="mt-3 btn"
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
                </div>
              </div>
            </div>
          )}
        </>
      </div>
    </>
  );
};

export default Profile;
