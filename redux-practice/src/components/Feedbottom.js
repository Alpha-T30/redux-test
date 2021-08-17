import React, { useReducer, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/reduxslice";
import Style from "./all.module.css";
import { updateUser } from "../redux/apiCalls";

export default function Feedbottom() {
  const userInfo= useSelector((state) => state.user?.userInfo);
  const pending =useSelector((state) => state.user?.pending);
  const error =useSelector((state) => state.user?.error);


  const dispatch = useDispatch();

  const nameref = useRef();
  const emailref = useRef();
  const passwordref = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
   
    updateUser(
      { name: nameref.current.value, email: emailref.current.value },
      dispatch
    );
     
  //  console.log(  Object.entries(localStorage)) //to watch all local storage elements
  };
  return (
    <div className={Style.feedbottom}>
      <span className={Style.fillup}>Fill Up The Form</span>
      <form id="fake" onSubmit={submitHandler} action="" className={Style.info}>
        <input
          className={Style.inp}
          ref={nameref}
          placeholder={userInfo?.name}
          type="text"
        />
        <input
          className={Style.inp}
          ref={emailref}
          placeholder={userInfo?.name && userInfo?.name + "@gmail.com"}
          type="text"
        />
        <input
          className={Style.inp}
          ref={passwordref}
          placeholder="Input Password"
          type="password"
        />
        <button disabled={pending} className={Style.submitbtn} type="submit">
          Submit
        </button>
        {error && (
          <span
            style={{
              color: "red",
              fontSize: "20px",
              fontWeight: "bolder",
              marginTop: "10px",
            }}
          >
            {" "}
            Something went wrong ... 💀 
          </span>
        )}
        {  pending===false && (
          <span
            style={{
              color: "green",
              fontSize: "20px",
              fontWeight: "bolder",
              marginTop: "10px",
            }}
          >
            {" "}
           Account Successfully Updated...👑 
          </span>
        )}
      </form>
    </div>
  );
}
