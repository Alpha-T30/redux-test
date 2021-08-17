import React from "react";
import { useSelector } from "react-redux";
import Style from "./all.module.css";
export default function Navbar() {

  const name =  useSelector(state=>state.user?.userInfo?.name) ; 
  return (
    <div className={Style.navbar}>
      <span className={Style.logo}>
      
        <img className={Style.logon} src="./image.png" alt="" />
        Redux</span>
      <div className={Style.login}>
        <img
          src="./hacker.jpeg"
          alt=""
          className={Style.propic}
        />
        <span className={Style.uname}>{name}</span>
      </div>
    </div>
  );
}
