import React from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

import useFetch from "../hooks/useFetchJobOffers";
import Loading from "../components/muiLoadingCircule"

const Jobs = () => {
  const {data,loading} = useFetch();
  return (
    <div className="min-h-screen bg-black">
      <Nav PageName={"FIND A JOB"} />
      <div className="bg-black-100 h-screen">
        <section className="text-neutral-300 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
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
            <div className="flex flex-wrap -m-4">
            

            
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                {data.map( m => (
                <div key={m._id} className="flex relative">
                  
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-neutral-200 bg-neutral-100 hover:bg-neutral-300">
                    <center><h1 className="title-font text-xl font-medium text-teal-800 mb-3">
                    {m.jobName}
                    </h1>
                    <h2 className="tracking-widest text-sm title-font font-medium text-neutral-500">at</h2>
                    <h2 className="tracking-widest text-lg title-font font-medium text-neutral-900 mb-1">
                      {m.Recruiter}
                    </h2>
                    </center>
                  </div>
                </div>
                ))}
              </div>
            
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
