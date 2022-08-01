import React from "react";
import "./styles/loginpage.css"
import user from "./img/user.png"
import Axios from "axios";


function Login(){
    const [state, changeState] = React.useState(false);
    function change(){
        changeState(!state);
    }
    function postdata(){
        document.getElementById("button").style.backgroundColor = "yellow";
        setTimeout(()=>{
            document.getElementById("button").style.backgroundColor = "white";
        }, 100);
        
        const username = document.getElementById("username").value;
        const Password = document.getElementById("password").value;
        var Email;
        state? Email = document.getElementById("Email").value:Email =" ";

        const Type = state ? "Sign up":"Login";
        Axios.post("http://localhost:3001/logininfo",{
            Username: username,
            Password: Password,
            Email: Email,
            Type: Type,
        }).then(Response=>{
            console.log(Response);
        });
    }
    return(
        <>
            <div className="parent">
            <div className="Page">
                <img src={user} height="100px" alt="user" />
                {state && <input type={Text} id="Email" placeholder="Email"/>}
                <input type={Text} id ="username" placeholder="Username"/>
                <input type="Password" id = "password" placeholder="Password" />
                <button type="button" onClick={postdata} id="button">{state ? "Sign up":"Login"}</button>
                <a onClick={change} > {state ? "Already have account .":"Create account" }</a>
            </div>
            </div>
        </>
    )
}

export default Login;