import React from "react";

const Sidebar = () => {
  let Menu = [
    { name: " Formations",
      link: "",
      icon: "pie-chart-outline" },

    { name: " Etudiants",
      link: "/Admin/Users",
      icon: "people-outline" },
    {
      name: " QCM",
      link: "/Admin/Manage-Contenent",
      icon: "folder-open-outline",
    }
  ];
  
  const handlelogout = () => {
    localStorage.clear();

    window.location.href = "/Home"
  };

  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-neutral-100 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <a href="/Home">
            <img src="/icon/LOGO.svg" />
          </a>
        </div>

        <div className="mt-8 text-center">
          <h5 className="hidden mt-4 text-xl font-semibold text-neutral-600 lg:block">
            nom Formateur
          </h5>

          <span className="hidden text-neutral-500 lg:block">Formateur</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {Menu.map((link) => (
            <li key={link.name}>
              <a
                href={link.link}
                className="px-4 py-3 flex items-center space-x-4 rounded-md text-neutral-500 hover:font-medium  hover:rounded-xl hover:text-neutral-800 hover:bg-gradient-to-r from-amber-200 to-amber-500"
              >
                <ion-icon name={link.icon}></ion-icon>
                <span className="-mr-1 ">{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
        <button
          onClick={handlelogout}
          className="px-4 py-3 flex items-center space-x-4 rounded-md text-neutral-600 group"
        >
          <span className="group-hover:text-red-600 hover:underline">
            Logout
          </span>
        </button>
      </div>
    </aside>
  );
};
export default Sidebar;
