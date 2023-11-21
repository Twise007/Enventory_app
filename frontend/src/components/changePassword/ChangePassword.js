import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { changePassword } from "../../services/authService";

const initialState = {
  oldPassword: "",
  password: "",
  password2: "",
};

const ChangePassword = () => {
  const navigate = useNavigate();
  const [formData, setformData] = useState(initialState);
  const { oldPassword, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const changePass = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      return toast.error("New passwords donot match");
    }

    const formData = {
      oldPassword,
      password,
    };
    const data = await changePassword(formData);
    toast.success(data);
    navigate("/profile");
  };

  return (
    <div
      className="p-2 m-2 rounded-lg md:w-[30pc]"
      style={{
        background: "var(--color-l-green)",
        color: "var(--color-black)",
      }}
    >
      <div className="mb-2">
        <div
          style={{
            color: "var(--color-black)",
            fontSize: "25px",
            borderBottom: "1px solid var(--color-green)",
          }}
        >
          Change Password:
        </div>
      </div>

      <form onSubmit={changePass} className="p-2">
        <div className="my-2">
          <span>Old Password :</span>
          <input
            type="text"
            placeholder="Old Password"
            name="oldPassword"
            value={oldPassword}
            onChange={handleInputChange}
            className="bg-white outline-none input input-bordered"
            style={{
              width: "100%",
              color: "var(--color-black)",
            }}
          />
        </div>

        <div className="my-2">
          <span>New Password :</span>
          <input
            type="text"
            placeholder="New Password"
            name="password"
            value={password}
            onChange={handleInputChange}
            className="bg-white outline-none input input-bordered"
            style={{
              width: "100%",
              color: "var(--color-black)",
            }}
          />
        </div>

        <div className="my-2">
          <span>Confirm Password :</span>
          <input
            type="text"
            placeholder="Confirm Password"
            name="password2"
            value={password2}
            onChange={handleInputChange}
            className="bg-white outline-none input input-bordered"
            style={{
              width: "100%",
              color: "var(--color-black)",
            }}
          />
        </div>

        <button
          type="submit"
          className="w-full p-2 mt-2 rounded-lg"
          style={{
            background: "var(--color-green)",
            color: "var(--color-l-green)",
          }}
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
