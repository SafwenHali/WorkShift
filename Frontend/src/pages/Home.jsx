import React from "react";
import Nav from "../components/Navbar"
import Footer from "../components/Footer";

const Home =() => {
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