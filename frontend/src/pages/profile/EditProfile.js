import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/loader/Loader";
import { selectUser } from "../../redux/features/auth/authSlice";
import { toast } from "react-toastify";
import { updateUser } from "../../services/authService";
import ChangePassword from "../../components/changePassword/ChangePassword";
//import ChangePassword from "../../components/changePassword/ChangePassword";

const EditProfile = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector(selectUser);
  const { email } = user;

  useEffect(() => {
    if (!email) {
      navigate("/profile");
    }
  }, [email, navigate]);

  const initialState = {
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
    bio: user?.bio,
    photo: user?.photo,
  };
  const [profile, setProfile] = useState(initialState);
  const [profileImage, setProfileImage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleImageChange = (e) => {
    setProfileImage(e.target.files[0]);
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      //handle the image upload to cloudinary
      let imageURL;
      if (
        profileImage &&
        (profileImage.type === "image/jpeg" ||
          profileImage.type === "image/jpg" ||
          profileImage.type === "image/png")
      ) {
        const image = new FormData();
        image.append("file", profileImage);
        image.append("cloud_name", "df5i1j4uc");
        image.append("upload_preset", "bvtg8lsd");

        // first save image to cloudinary
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/df5i1j4uc/image/upload",
          { method: "post", body: image }
        );

        const imgData = await response.json();
        imageURL = imgData.url.toString();
        //console.log(imgData);
        //toast.success("Image Uploaded")
      }
      //save profile
      const formData = {
        name: profile.name,
        phone: profile.phone,
        bio: profile.bio,
        photo: profileImage ? imageURL : profile.photo,
      };
      const data = await updateUser(formData);
      console.log(data);
      toast.success("User Updated");
      navigate("/profile");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="pb-10">
        <div className="navbar bg-primary-content">
          <div
            className="flex-1"
            style={{
              color: "var(--color-black)",
              fontSize: "25px",
              borderBottom: "2px solid var(--color-green)",
            }}
          >
            Edit Profile:
          </div>
        </div>
        {isLoading && <Loader />}

        <div className="p-2" style={{ background: "var(--color-white)" }}>
          <div className="flex flex-col items-center justify-center rounded-xl">
            <img
              src={user?.photo}
              alt="profilepic"
              className="w-40 h-40 rounded-full shadow-2xl md:p-2 md:w-60 md:h-60"
              style={{
                background: "var(--color-l-green)",
              }}
            />

            <form onSubmit={saveProfile}>
              <div className="my-2">
                <span>Name :</span>
                <input
                  type="text"
                  name="name"
                  value={profile?.name}
                  onChange={handleInputChange}
                  className="outline-none input input-bordered"
                  style={{
                    background: "var(--color-l-green)",
                    width: "100%",
                    color: "var(--color-black)",
                  }}
                />
              </div>

              <div className="my-2">
                <span>Email :</span>
                <input
                  type="text"
                  name="email"
                  value={profile?.email}
                  disabled
                  className="outline-none input input-bordered"
                  style={{
                    background: "var(--color-l-green)",
                    width: "100%",
                  }}
                />
                <div className="text-center label-text-alt">
                  Email cannot be changed
                </div>
              </div>

              <div className="my-2">
                <span>Phone :</span>
                <input
                  type="text"
                  name="phone"
                  value={profile?.phone}
                  onChange={handleInputChange}
                  className="outline-none input input-bordered"
                  style={{
                    background: "var(--color-l-green)",
                    width: "100%",
                    color: "var(--color-black)",
                  }}
                />
              </div>

              <div className="my-2">
                <span>Profile Image :</span>
                <input
                  type="file"
                  onChange={(e) => handleImageChange(e)}
                  className="outline-none file-input file-input-bordered"
                  style={{
                    background: "var(--color-l-green)",
                    width: "100%",
                  }}
                />
                <div className="text-center label-text-alt">
                  Supported formats: jpg, jpeg, png
                </div>
              </div>

              <div className="my-2">
                <span>Bio :</span>
                <textarea
                  name="bio"
                  value={profile?.bio}
                  onChange={handleInputChange}
                  className="h-40 p-2 outline-none input input-bordered"
                  style={{
                    background: "var(--color-l-green)",
                    width: "100%",
                    color: "var(--color-black)",
                  }}
                />
              </div>

              <button
                type="submit"
                className="w-full p-1 mt-2 rounded-lg"
                style={{
                  background: "var(--color-green)",
                  color: "var(--color-l-green)",
                }}
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>

        <div
          className="my-5 "
          style={{
            border: "2px solid var(--color-green)",
            background: "var(--color-green)",
          }}
        />

        <div className="hero">
          <ChangePassword />
        </div>
      </div>
    </>
  );
};

export default EditProfile;
