import React,{useState} from "react";
import Nav from "../components/Navbar"
import Footer from "../components/Footer";
import SigninModal from "../components/signinModal";

import useFetchFormation from "../hooks/useFetchFormation";
import { useParams } from "react-router-dom";

const SubCategory =() => {
    const {id} = useParams()
    const {data} = useFetchFormation(id);
    const [visible, setVisible] = useState(false);
    const handleOnclose=()=>setVisible(false)

    return(
    <div className="min-h-screen bg-black ">
    <SigninModal visible={visible} onClose={handleOnclose}/>
    <Nav PageName="FORMATION"/>
    <div>
        <div className=" pl-14 pt-36 mb-4 text-4xl font-semibold tracking-tight text-neutral-200">
            {data.nom}
            <div className="m-1 text-lg font-normal tracking-tight text-teal-600">
                Durée : {data.duree} Heures   &nbsp; 
            </div>
        </div>            
        </div>
        <section className="text-neutral-600 body-font ">
            <div className="container px-5 py-10 mx-auto flex flex-col ">
                <div className="lg:w-4/6 mx-auto p-20 bg-neutral-200 rounded-lg">
                <div className="rounded-lg h-64 overflow-hidden">
                    {<img className="object-cover object-center h-full w-full" src=""/>}
                </div>
                <div className="flex flex-col sm:flex-row mt-10">
                    <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-teal-700 text-neutral-400">
                        
                    </div>
                    <div className="flex flex-col items-center text-center justify-center">
                        <h2 className="font-medium title-font mt-4 text-neutral-900 text-lg">
                            Nom Formateur
                        </h2>
                        <div className="w-12 h-1 bg-teal-600 rounded mt-2 mb-4"></div>
                        <p className="text-base">
                            Description formateur
                        </p>
                    </div>
                    </div>
                    <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-neutral-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                        <p className="leading-relaxed text-lg mb-4">
                            {data.description} 
                        </p>
                        <button onClick={()=>{setVisible(true)}} className=" w-28 h-10 lg:rounded-lg text-neutral-100 bg-teal-700 hover:shadow-2xl hover:bg-teal-900 duration-300">
                            SUBSCRIBE
                        </button>
                    
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


                    
                    