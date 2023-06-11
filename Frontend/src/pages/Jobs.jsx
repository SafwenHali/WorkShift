import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

import useFetch from "../hooks/useFetchJobOffers";
import useFetchUser from "../hooks/useFetchUser"
import Loading from "../components/muiLoadingCircule"

const Jobs = () => {
  const {data,loading} = useFetch();
  return (
    <div className="min-h-screen bg-black">
      <Nav PageName={"FIND A JOB"} />
      <div className="bg-black-100 h-full">
        <section className="text-neutral-300 body-font">
          <div className="container px-5 pt-24 mx-auto">
            <div className="flex flex-col text-center w-full">
              <h1 className="sm:text-3xl text-2xl font-medium title-font my-4 text-neutral-200">LOOKING FOR A JOB ?</h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Our dear Enterprises trust we have the community of people they aim to hire thanks to our Courses that are adapted to their demands
                <br/>
                Here are the actually available Jobs that are open for hiring
              </p>
            </div>
            <div className="text-teal-300">
                {loading && <Loading/>}
            </div>
            <div className=" px-3 md:lg:xl:px-40 py-20 bg-opacity-10">
                <ul className="grid grid-cols-1 md:lg:xl:grid-cols-3 group lg:p-1">
                {data.map(m=> (
                  <div className="p-1">
                <li className="px-8 py-10 relative w-full bg-neutral-100 hover:bg-neutral-300 flex flex-col">
                    <center><h1 className="title-font text-xl font-medium text-teal-800 mb-3">
                    {m.jobName}
                    </h1>
                    <h2 className="tracking-widest text-sm title-font font-medium text-neutral-700 mb-1">
                      {m.jobDescription}
                    </h2>
                    </center>
                  </li></div>
                ))}
                  
                </ul>
            
            </div>
          </div>
        </section><Footer />
      </div>
      
    </div>
  );
};

export default Jobs;
