import React,{useState} from "react";
import Card from'../../components/HobbyCard';
import useFetch from "../../hooks/useFetchAllHobbies";
import Loading from "../../components/muiLoadingCircule"
import Nav from "../../components/Navbar"
import Footer from "../../components/Footer"

const Hobbies =() =>{
    const {data,loading} = useFetch();
    return(
        <div className="min-h-screen bg-black">
            <Nav PageName={"Hobbies"}/>
            <h1 className="pl-14 pt-36 mb-4 text-4xl font-bold tracking-tight text-teal-600 ">
                Hobbies
            </h1>
            <div className="text-teal-300">
                {loading && <Loading/>}
            </div>
            <div className="flex flex-wrap m-10 mx-20 shadow-xl bg-neutral-900 rounded-xl">
                    <div className="p-2 m-4 font-light text-xl text-neutral-300">
                    There’s no shortage of reasons to pursue a hobby, but here are the main benefits:<br/><br/>
                        Hobbies help us grow<br/>
                        Hobbies constantly push us to learn something new. Some hobbies even introduce techniques that we never thought we could apply. The result? Self-improvement that helps us grow in various ways.<br/> <br/>
                        Hobbies encourage us to socialize<br/>
                        For those who find socialization near impossible, hobbies offer an opportunity to engage in a meaningful conversation. There’s something about connecting with a common interest that feels different (in a good way).<br/> <br/>
                        Hobbies enable us to recharge<br/>
                        Starting a new hobby gives us a break from the daily grind. With never-ending work stress and personal issues, many of us need an outlet where we can relax, recharge and refresh. It turns out hobbies provide the perfect outlet for us to renew our spirit and get our mojo back.<br/>
                    </div>
                </div> 
            <div>
                {data.map( m => {
                    return(
                        <Card 
                            id={m._id}
                            key={m._id}
                            title={m.hobbyName}
                            imageURL={m.hobbyImage}
                            desc={m.hobbyDesc}
                            subCat={m.formations}
                        />
                        )
                    })} 
            </div>
            <Footer/>
        </div>
    )}
export default Hobbies
