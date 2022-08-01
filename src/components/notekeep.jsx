import React from "react";
import user from "./img/user.png";
import "./styles/notekeep.css";
import { Link } from "react-router-dom";
import img from "./img/pngwing.com.png";
import Axios from "axios";

function Notekeep() {
  const [inputText, setInputText] = React.useState("");
  const [state,changeState] = React.useState([]);
  function addData(){
    changeState(state=>{return [...state,inputText]})
    setInputText("");
    Axios.post("http://localhost:3001/notedata",{
            data: state,
        }).then(Response=>{
            console.log(Response);
    }).catch(err=>{console.log(err);});
  }
  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }
  function removeData(id){
    changeState(state.filter((item,index)=>{return index!==id}))
  }
  return (
    <>
      <div className="nevbar">
        <ul>
          <Link to="/">
            <li>
              <img src={img} alt="" id="notelogo" height="20px" />
            </li>
            <li id="english">Note</li>
          </Link>
        </ul>
      </div>
      <div className="menubar" id="menbar">
        <img id="img1" src={user} alt="" />
        <a href="#">Home</a>
        <a href="#">Content</a>
        <a href="#">About US</a>
      </div>

      <div className="mainbody">
        <span className="notebox">
          <p id="note">Notes</p>
          <textarea
            placeholder="  Write Your Notes Here....."
            id="textarea1"
            cols="30"
            rows="10"
            value={inputText} onChange={handleChange} 
          ></textarea>
          <button id="btn1" onClick={addData} >Submit</button> 
        </span>
      </div>

      
      <div id="newdiv"> {state.map((d,index) => (
        <span className="notebox1">
        <p id="note2">Notes</p>
        <p id= "textarea">{d}</p>
    <button id="btn" onClick={()=>removeData(index)} >Delete</button>
        </span>
        ))}</div>
    </>
  );
}

export default Notekeep;



{/* <span class="notebox1">
    <p id="note2">Notes</p>
    <textarea id="textarea" cols="30" rows="10">{d}</textarea>
    <button id="btn" onClick={()=>removeData(index)} >Delete</button>
    </span> */}