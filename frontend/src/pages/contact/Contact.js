import axios from "axios";
import React, { useState } from "react";
import { FaPhoneAlt, FaTwitter, FaEnvelope } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../../services/authService";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const data = {
    subject,
    message,
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/contactus`, data);
      setSubject("");
      setMessage("");
      toast.success(response.data.message);
    } catch (error) {
      toast.error.apply(error.message);
    }
  };

  return (
    <div className="p-2">
      <div className="mb-2 navbar bg-primary-content">
        <div
          className="flex-1"
          style={{
            color: "var(--color-black)",
            fontSize: "25px",
            borderBottom: "2px solid var(--color-green)",
          }}
        >
          Contact Us:
        </div>
      </div>

      <div className="md:w-[30pc] hero ">
        <div className="w-full ">
          <form onSubmit={sendEmail}>
            <div className="my-2">
              <span>Subject :</span>
              <input
                type="text"
                name="subject"
                value={subject}
                placeholder="Subject"
                required
                onChange={(e) => setSubject(e.target.value)}
                className="outline-none input"
                style={{
                  background: "var(--color-l-green)",
                  width: "100%",
                  color: "var(--color-black)",
                }}
              />
            </div>

            <div className="my-2">
              <div>Content :</div>
              <textarea
                placeholder="Write here..."
                name="message"
                value={message}
                required
                onChange={(e) => setMessage(e.target.value)}
                className="w-full mt-1 outline-none input"
                style={{
                  background: "var(--color-l-green)",
                  color: "var(--color-black)",
                  minHeight: "15pc",
                  borderRadius: "10px",
                }}
              />
            </div>

            <button
              type="submit"
              className="w-full p-2 rounded-lg"
              style={{
                background: "var(--color-green)",
                color: "var(--color-l-green)",
              }}
            >
              send message
            </button>
          </form>

          <div
            className="my-5"
            style={{
              border: "1px solid var(--color-green)",
              background: "var(--color-green)",
            }}
          ></div>

          <div
            className="p-3 text-gray-500 rounded-lg"
            style={{
              background: "var(--color-l-green)",
            }}
          >
            <h3
              className="mb-2"
              style={{
                fontSize: "24px",
                borderBottom: "2px solid var(--color-black)",
              }}
            >
              Our Contact Information:
            </h3>
            <p>Fill the form or contact us via other channel listed below</p>

            <ul>
              <li className="pt-2">
                <div className="flex items-center gap-4">
                  <i>
                    <FaPhoneAlt className="w-4 h-4 text-black" />
                  </i>
                  <p>+2348102904585</p>
                </div>
              </li>

              <li className="pt-2">
                <div className="flex items-center gap-4">
                  <i>
                    <FaEnvelope className="w-4 h-4 text-yellow-400" />
                  </i>
                  <p>Tundeoke80@gmail.com</p>
                </div>
              </li>

              <li className="pt-2">
                <div className="flex items-center gap-4">
                  <i>
                    <GoLocation className="w-4 h-4 text-green-600" />
                  </i>
                  <p>Lagos, Nigeria</p>
                </div>
              </li>

              <li className="pt-2">
                <div className="flex items-center gap-4">
                  <i>
                    <FaTwitter className="w-4 h-4 text-blue-400" />
                  </i>
                  <p>@Tundeoke007</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
