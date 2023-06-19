import React,{useState} from "react";
import useFetch from "../../hooks/useFetchAllPersonalities";
import Loading from "../../components/muiLoadingCircule"
import Nav from "../../components/Navbar"
import Footer from "../../components/Footer"

const Personalities =() =>{
    const {data,loading} = useFetch();
    console.log(data)
    return(
        <div className="min-h-screen bg-black">
            <Nav PageName={"Personalities"}/>
            <h1 className="pl-14 pt-36 mb-4 text-4xl font-bold tracking-tight text-teal-600 ">
                16 MBTI Personalities
            </h1>
            <div className="text-teal-300">
                {loading && <Loading/>}
            </div>
            <div >
                <p>
                    aaa
                </p>
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-10 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-neutral-300">
        16 personalities is a framework that evolved from the Myers-Briggs Type Indicator MBTI. MBTI is the earlier and more popularized framework for understanding personality. It gives insight into how people make decisions, process information, and interact with others.<br/>
        <br/>The 16 personalities and MBTI are commonly used for recruiting. Hiring managers use the test to evaluate whether a candidate would be a good fit for the role. Companies also use the test to understand how to manage employees or create higher-performing teams. Many people also take the test for personal development reasons. The framework gives people new ways of understanding themselves. Therefore, people use their 16 personality identifiers as a guide as to what areas they can improve
      </p>
    </div>
    <div className="flex flex-wrap m-4">
   {data.map( m => {return( 
      <a className="xl:w-1/4 md:w-1/2 w-full p-4" href={"MBTI/"+m.personalityCode}>
        <div className="flex relative h-80">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={m.personalityImage}/>
          <div className="px-8 py-24 relative z-10 w-full border-2 border-neutral-300 bg-neutral-200 opacity-0 hover:opacity-100 transition-all duration-200">
            <h2 className="tracking-widest text-sm title-font font-medium text-teal-800 mb-1">{m.personalityCode}</h2>
            <h1 className="title-font text-lg font-medium text-neutral-900 mb-3">{m.personalityName}</h1>
          </div>
          </div>
        </a>
      )})}
    </div>
  </div>
</section>
            </div>
            <Footer/>
        </div>
    )}
export default Personalities
