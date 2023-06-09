import React from "react";
import Sidebar from "../../components/Sidebar";
import jwt_decode from "jwt-decode";

const Contenent = () => {
  try {
    const token = sessionStorage.getItem("at")
    const [role] = useState(jwt_decode(token).role || "");
    console.log(role)
    if (role!="admin"){
        throw error
    }
    } 
    catch (error){
        return(
            <div className="border-2 border-neutral-900 min-h-screen h-full bg-neutral-900">
            
        <center className=" text-neutral-300 pt-8">
            <img src="/icon/LOGO.svg" className="w-80"></img>
            <span className="text-4xl font-bold text-neutral-100">
                Oops,&nbsp;
            </span>
            <span className="pt-3 text-2xl font-semibold text-neutral-100">
                you're not authorized to access this page
            </span>
            <div className="text-xl font-semibold text-neutral-200 pt-4">
                Go back to the homepage.
            </div>
            <div className="flex "> 
                <div className="m-auto py-5 pb-28">     
                <a href="/Home"> 
              <button className=" w-48 h-10 rounded-lg border border-teal-900 text-neutral-100 bg-teal-700 hover:shadow-2xl hover:bg-neutral-100 hover:text-neutral-900 font-semibold duration-300">
                Go back to website
              </button></a> 
                </div> 
            </div> 
            </center>
            </div>
        )
        }
  const pages = [
    { name: " Jobs", link: "/Admin/Jobs" },
    { name: " Recruiters Demand", link: "/Admin/Demand" },
    { name: "  Hobbies", link: "/Admin/Quiz/Hobbies" },
    { name: " Work-fields", link: "/Admin/WorkFields" },
    { name: " Personalities", link: "/Admin/Personalities" },
  ];

  return (
    <div>
      <Sidebar />
      <div className="pl-0 lg:pl-20">
        <div className="h-full min-h-screen bg-teal-900 pl-48">
          <h1 className="p-14 mb-4 text-4xl font-bold tracking-tight text-neutral-200 shadow-lg ">
            MANAGE THE SUGGESTION QUIZ :
          </h1>
          <div className=" px-3 md:lg:xl:px-40 py-20 bg-opacity-10">
            <ul className="grid grid-cols-1 md:lg:xl:grid-cols-2 group lg:p-1">
              {pages.map((n) => (
                <div className="p-1">
                  <a href={n.link}>
                    <li
                      key={n.name}
                      className="p-10 flex flex-col items-center text-center group bg-neutral-100 hover:bg-gradient-to-r from-amber-200 to-amber-500 hover:shadow-xl shadow-teal-900 cursor-pointer"
                    >
                      <p className="text-2xl font-bold text-teal-800 mt-3 ">
                        {n.name}
                      </p>
                    </li>
                  </a>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contenent;
