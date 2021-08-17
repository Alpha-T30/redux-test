import React from 'react'
import Navbar from './components/Navbar'
import Leftbar from './components/Leftbar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Style from "./components/all.module.css" ; 


// for neon theme  >> sudo chown -R alpha /usr/share/code
// then enable 84 neon theme and then sudo chown -R root /usr/share/code

export default function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className={Style.bodysection}>
        <Leftbar></Leftbar>
        <Feed></Feed>
        <Rightbar></Rightbar>
      </div>
    </div>
  )
}
