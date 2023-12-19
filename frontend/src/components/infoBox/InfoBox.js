import React from "react";

const InfoBox = ({ title, count, icon }) => {
  return (
    <div
      className="rounded-xl"
      style={{ border: ".5px solid var(--color-green)" }}
    >
      <div className="p-2">
        <div className="flex items-center justify-between">
          <p style={{ color: "var(--color-green)" }}>{title}</p>
          <i>{icon}</i>
        </div>
        <div className="text-2xl text-black">{count}</div>
      </div>
    </div>
  );
};

export default InfoBox;
