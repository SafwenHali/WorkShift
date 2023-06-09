import React from "react";
import Nav from "../components/Navbar"
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
console.log('inside the Home section');
const Home =() => {

const navigate = useNavigate();  

 
const token = localStorage.getItem("at")
    console.log(token);
    axios.post(
        "http://127.0.0.1:7000/getRole", {
            key: "posted-elem"
        }, {
            headers: {
                "Content-Type": "application/json",
                at: token
            },
        }
    )
    .then((r) => {
        console.log(r);
        if (r.data.role === "instructor") {
          navigate("/formateur", { replace: true });
        } else if (r.data.role === "student") {
          navigate("/student", { replace: true });
        } else if (r.data.role === "admin") {
          navigate("/Admin", { replace: true });
        } else if (r.data.role === "enterprise") {
          navigate("/Enterprise", { replace: true });
        } else {
            //return to the default route 
            navigate("/", { replace: true });
            console.warn('Unable to detect user ');
        }
      }).catch(function (error) {
        console.log('in catch section ');
        console.log(error.toJSON());
      });



   
return(
    <div className="min-h-screen bg-black">
        <Nav PageName={"WELCOME"}/>
        <center>
            <img className="h-screen pt-14" 
                    src="../../icon/LOGO.svg"></img>
        </center>
        <Footer/>
    </div>
    ) 

}

export default Home;