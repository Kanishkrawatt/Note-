import React from 'react'
import user from './img/user.png' 
import logo from './img/logo.png'

const header =(props)=>{
  return (<>
    <div classname="container" id="container">
        <div classname="topnav" id="nevbar">
          <a href="#home" id="name"> Note</a>
          <a href="#" id="name2">बनाओ </a>
          <a href="proNote.html" id="home">Home</a>
          <span href="#news" id="profile" onclick="window.location.href = 'login_page.html'"> <img src={user} id="profileImg" alt=""></img></span>
        </div>
        

        <img src={logo} id="Logo" alt="" />

        <h2 id="notesh2">Notes</h2>
        <p id="notedescription">
          This is a website, <br />
          where you can make note and it will save forever<br />
          in your browser local Storage until you delete it
        </p>
        <a id="abutton" href="proNote.html">Create Notes</a>
      <div classname="copyright">
        <p>
          copyright &copy; By Notes बनाओ</p>
      </div>
      </div></>
      
  )
} 
export default header; 
