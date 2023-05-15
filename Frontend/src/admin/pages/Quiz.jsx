import React from "react";
import Sidebar from "../components/Sidebar";

const Contenent = () => {
  const pages = [
    { name: " Jobs", link: "/Admin/Articles" },
    { name: " Recruiters Demand", link: "/Admin/Courses" },
    { name: "  Hobbies", link: "/Admin/" },
    { name: " Work-fields", link: "/Admin/" },
    { name: " Personalities", link: "/Admin/" },
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
                    </li>{" "}
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
