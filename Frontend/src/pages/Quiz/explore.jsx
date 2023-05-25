import React from "react";
import Nav from "../../components/Navbar"
import Card from "../../components/articleCard";
import Footer from "../../components/Footer";


const Explore =() => {
    return(
    <div className="min-h-screen bg-black">
        <Nav PageName={"Explore"}/>
        <div className="w-full bg-neutral-200 p-10">
        <section class="text-neutral-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
        <h2 class="text-xs text-teal-700 tracking-widest font-medium title-font mb-1">
            Explore
        </h2>
        <h1 class="sm:text-3xl text-2xl font-semibold title-font mb-4 text-neutral-900">
            Work Shift
        </h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Work Shift is an E-learning app based in tunisia that aims to reduce the unemployment rate by offering the possibility of a second chance to choose the career that fits better with someone's personality,expertiese and with the actual recruiters demand.
            <br/>
            We offer an environment 
        </p>
    </div>
    </div>
</section>
        </div>
        <Footer/>
    </div>
    )
    }

export default Explore;