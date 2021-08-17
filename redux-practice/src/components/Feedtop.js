import React from "react";
import { useDispatch, useSelector } from "react-redux";
 
import Style from "./all.module.css";
import { updateUser } from '../redux/apiCalls';
import { deleteUser } from "../redux/reduxslice";

export default function Feedtop() {
  const name =  useSelector(state=>state.user?.userInfo?.name) ; 
  

  const dispatch=useDispatch() ; 
const handleDelete =(e) =>{
e.preventDefault();
updateUser({name:"",email:""},dispatch) ; 
 
 

}
  return (
    <div className={Style.feedtop}>
      <p className={Style.deletetxt}>
        Hay <strong>{name}</strong> ! Do you want to delete your fucking Account
        ?
      </p>
      <button onClick={handleDelete} className={Style.deletebtn}>Delete Account</button>
    </div>
  );
}
