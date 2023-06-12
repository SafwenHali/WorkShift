import React,{useState,useEffect} from "react";
import Nav from "../components/Navbar"
import Footer from "../components/Footer";
import SigninModal from "../components/signinModal";

import useFetchFormation from "../hooks/useFetchFormation";
import { useParams } from "react-router-dom";
import jwt_decode from "jwt-decode";

const SubCategory =() => {
    const {id} = useParams()
    const {data} = useFetchFormation(id);
    const [visible, setVisible] = useState(false);
    const handleOnclose=()=>setVisible(false)
    const [singin, setSignin] = useState(true);
  useEffect(() => {
    // Check if there is data in localStorage
    const token = localStorage.getItem("at");
    let role = "" ;
    try{role = jwt_decode(token).role ;} catch{role = "" ;}
    console.log(role);
    if (role != "student") {
      setSignin(false);
    }
  }, []);
  const getFormation=()=>{

  }

    return(
    <div className="min-h-screen bg-black ">
    <SigninModal visible={visible} onClose={handleOnclose}/>
    <Nav PageName="FORMATION"/>
    <div>
        <div className=" pl-14 pt-36 mb-4 text-4xl font-semibold tracking-tight text-neutral-200">
            {data.formationName}
            <div className="m-1 text-lg font-normal tracking-tight text-teal-600">
                Durée : {data.formationDuration} Heures   &nbsp; 
            </div>
        </div>            
        </div>
        <section className="text-neutral-600 body-font ">
            <div className="container px-5 py-10 mx-auto flex flex-col ">
                <div className="lg:w-4/6 mx-auto p-20 bg-neutral-200 rounded-lg">
                <div className="rounded-lg h-64 overflow-hidden">
                    {<img className="object-cover object-center h-full w-full" src={data.Cover}/>}
                </div>
                <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div className="relative">
                      <div className="w-20 h-20 overflow-hidden bg-neutral-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-indigo-500">
                          <img 
                          className="w-full h-full object-cover"
                          src="https://t4.ftcdn.net/jpg/00/65/10/47/360_F_65104718_x17a76wzWKIm3BlhA6uyYVkDs9982c6q.jpg"/>
                      </div>
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                        <h2 className="font-medium title-font text-neutral-900 text-lg">
                            WorkShift
                        </h2>
                    </div>
                    </div>
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-neutral-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p className="leading-relaxed text-lg mb-4">
                            {data.formationDescription} 
                        </p>
                        {!singin && (<button onClick={()=>{setVisible(true)}} className=" w-28 h-10 lg:rounded-lg text-neutral-100 bg-teal-700 hover:shadow-2xl hover:bg-teal-900 duration-300">
                            SUBSCRIBE
                        </button>)}
                        {singin && (<button className=" w-32 h-10 lg:rounded-lg text-neutral-100 bg-teal-700 hover:shadow-2xl hover:bg-teal-900 duration-300">
                            Get This Course
                        </button>)}
                       
                        
                    
                    </div>
                </div>
                </div>
            </div>
        </section>
    <Footer/>
    </div>
    )
    }

export default SubCategory;


                    
                    