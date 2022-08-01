import React from "react";
import "./styles/nevbar.css";
import profileImg from "./img/user.png"
import logo from "./img/logo.png"
import {Link} from "react-router-dom"
import { useState,useEffect} from "react";
import Anima from "./Animation";



function Homepage() {
  let [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    },5000);
  },[]);

  return (<>
    {loading?<Anima/>:
    <>
    <div className="container" id="container">
    <div className="topnav" id="nevbar">
            <Link to="/"><a href="/" id="name"><b> Note </b></a>
            <a href = "/" id="home">Home</a></Link>
            <Link to="/login"><span href="#news" id="profile" > <img src={profileImg} id="profileImg"alt=""/></span></Link>
        </div>
        <img src={logo} id="Logo" alt="" />
        <h1 id="notesh2">Notes</h1>
        <p id="notedescription">
        This is a website, <br />
        where you can make note and it will save forever<br />
        in your browser local Storage until you delete it
        </p>
        <Link to="/notekeep"><a href="/notekeep"id="abutton">Create Notes</a></Link>
        <div className="copyright">
        <p>
        copyright &copy; By Notes बनाओ</p>
        </div>   
    </div>

  </>}
  </>
  );
}

export default Homepage;
