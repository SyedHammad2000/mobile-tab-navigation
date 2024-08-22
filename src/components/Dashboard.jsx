import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div
      className="dashboard flex justify-around bg-white text-center items-center"
      style={{
        //  justify-content: space-around;
        // display: flex;
        // position: absolute;
        // top: 425px;
        // /* margin-left: 2px; */
        // width: 286px;
        // background-color: white;
        // border-radius: 4px 4px 0 0;
        // height: 50px;
        // text-align: center;
        // align-items: center;
        position: "absolute",
        top: "425px",
        width: "286px",
        borderRadius: "4px 4px 0 0",
        height: "50px",
      }}
    >
      <Link style={{
      }} to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact</Link>
      <Link to={"/about"}>About</Link>
    </div>
  );
};

export default Dashboard;
