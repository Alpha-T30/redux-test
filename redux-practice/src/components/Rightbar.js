import React from 'react'
import { useSelector } from 'react-redux';
import Style from "./all.module.css" ; 
import { storage } from 'redux-persist/lib/storage';

export default function Rightbar() {
    const name =  useSelector(state=>state.user?.userInfo.name) ; 


    return (
        <div className={Style.rightbar}>
            <div className={Style.re}>Recomendations for <span>{name}</span>
            <hr/> </div> 
            <button  className={Style.logoutbtn}>Logout <span>({name})</span></button>

        </div>
    )
}
