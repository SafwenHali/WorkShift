import React, { useEffect, useRef, useState } from "react";
import SigninModal from "../components/signinModal";
import useFetch from "../hooks/useFetchCategories";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = (props) => {
  const navigate = useNavigate();
  let Links = [
    { name: "VIEW PLANS", link: "/Plans" },
    { name: "READ ARTICLES", link: "/Articles" },
    { name: "FIND A JOB", link: "/Find-A-Job" },
    
  ];
  let [open, setOpen] = useState(false);
  const [updown, setUpdown] = useState(false);
  const [visible, setVisible] = useState(false);
  const handleOnclose = () => setVisible(false);

  const buttonRef = useRef();

  useEffect(() => {
    document.addEventListener("click", (event) => {
      if (!buttonRef.current.contains(event.target)) setUpdown(false);
    });
  });
  const { data } = useFetch();
  const [singin, setSignin] = useState(true);
  useEffect(() => {
    // Check if there is data in localStorage
    const token = localStorage.getItem("at");

    if (token) {
      setSignin(false);
    }
  }, []);
  const handlelogout = () => {
    const confirmed = window.confirm("Are you sure you want to log out?");
    if (confirmed) {
      localStorage.clear();
      window.location.href = "/Home";
    }
  };
  const handleSpace = () => {
    const token = localStorage.getItem("at");
  axios
    .post(
      "http://127.0.0.1:7000/getRole",
      {
        key: "posted-elem",
      },
      {
        headers: {
          "Content-Type": "application/json",
          at: token,
        },
      }
    )
    .then((r) => {
      const x= r.data.role;
      if (x === "instructor") {
        navigate("/formateur", { replace: true });
      } else if (x === "student") {
        navigate("/student", { replace: true });
      } else if (x === "admin") {
        navigate("/Admin", { replace: true });
      } else if (x === "enterprise") {
        navigate("/Enterprise", { replace: true });
      } else {
        //return to the default route
        navigate("/", { replace: true });
        console.warn("Unable to detect user ");
      }
    })
    .catch(function (error) {
      console.log("Navbar in catch section ");
      console.log(error.toJSON());
    });
  };

  return (
    <div className="shadow-lg w-full fixed top-0 left-0 z-20">
      <SigninModal visible={visible} onClose={handleOnclose} />
      <div className="bg-neutral-900 w-full h-20">
        <div className="lg:flex items-center justify-between py-4 lg:px-10 px-7">
          {/*Name and LOGO*/}
          <span className="space-x-3 cursor-pointer flex items-center font-bold text-neutral-50 font-sansserif ">
            <a href="/" className="shadow-xl text-2xl block">
            <img src="/icon/Name.png" className="w-fit h-10" />
            </a>
            <h1 className="bg-neutral-400 h-6 w-0.5 rounded" />
            {<p className="font-light text-neutral-400">{props.PageName}</p>}
          </span>
          {/*END Name and LOGO*/}
          <span ref={buttonRef}>
            <div
              onClick={() => setOpen(!open)}
              className="text-4xl text-white hover:text-teal-600 absolute right-8 top-3 cursor-pointer lg:hidden"
            >
              <span className={`${open ? "hidden" : ""} `}> ≡</span>
              <span className={`${open ? "" : "hidden"}${visible ? "hidden" : ""}`}>{" "}⨯</span>
            </div>
            <ul
              className={`
      ${open ? "top-22 " : "hidden"}
       bg-neutral-200 lg:bg-neutral-900 lg:flex items-center lg:pb-0 pb-14 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-24 transition-all duration-500`}
            >
              {/*Categories*/}
              <li
                key="Cat"
                className="lg:ml-8 lg:my-0 my-7 lg:pt-0 pt-5 lg:font-semibold font-bold"
              >
                {/*Categories web (with menu)*/}
                <span className="hidden lg:inline">
                  <button
                    className=" text-neutral-800 hover:text-teal-600 lg:text-neutral-200 duration-300"
                    onClick={() => setUpdown(!updown)}
                  >
                    ALL CATEGORIES
                    <span className={`${updown ? "hidden" : ""}`}> ˅</span>
                    <span className={`${updown ? "" : "hidden"}`}> ˄</span>
                  </button>
                </span>
                {/*Categories mobile*/}
                <span className="lg:hidden">
                  <a
                    className=" text-neutral-800 hover:text-teal-600 lg:text-neutral-200 duration-300"
                    href="/Categories"
                  >
                    ALL CATEGORIES
                  </a>
                </span>
              </li>
              {/*END Categories*/}
              {/*Pages from Links*/}
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="lg:ml-8 lg:my-0 my-7 lg:pt-0 pt-4 lg:font-semibold font-bold"
                >
                  <a
                    href={link.link}
                    className=" text-neutral-800 hover:text-teal-600 lg:text-neutral-200 duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              {/*END pages*/}
              {/*NAVBAR Login Button*/}
              
                {singin && (<li
                key="Login"
                className="lg:ml-8 lg:my-0 my-7 lg:pt-0 pt-3 lg:font-semibold font-bold">
                  <button
                    onClick={() => {
                      setVisible(true);
                    }}
                    className="w-28 h-10 lg:rounded-lg border border-teal-900 text-neutral-100 bg-teal-700 hover:shadow-2xl hover:bg-neutral-100 hover:text-neutral-900 font-semibold duration-300"
                  >
                    Sign in
                  </button></li>
                )}
                {!singin && (<li
                key="Login"
                className="lg:ml-8 lg:my-0 my-7 lg:pt-0 pt-3 lg:font-semibold font-bold">
                    <button
                      onClick={handleSpace}
                      className="w-24 h-10  lg:rounded-lg border border-teal-900 text-neutral-100 bg-teal-700 hover:shadow-2xl hover:bg-neutral-100 hover:text-teal-900 font-semibold duration-300"
                    >
                      My Space
                    </button>
                    <button
                    onClick={handlelogout}
                    className="w-9 h-10 ml-5 lg:rounded-lg border border-red-900 text-neutral-100 bg-red-700 hover:shadow-2xl hover:bg-neutral-100 hover:text-red-900 font-semibold duration-300"
                  >
                    <ion-icon name="log-out-outline"></ion-icon>
                  </button>
                    </li>
                )}
              

              {/*END Login*/}
            </ul>
          </span>
        </div>
        {/*Categories menu*/}
        {updown === true && visible === false && (
          <div className="hidden lg:flex p-2 pt-4 w-72 absolute right-96">
            <ul className=" bg-neutral-900 text-neutral-100 rounded shadow-lg overflow-y-auto">
              {data.map((n) => (
                <li key={n._id}>
                  <a href={"/Category/" + n._id}>
                    <div className="p-3 pr-10 pl-10 hover:text-teal-400 hover:bg-neutral-700 rounded duration-300 hover:shadow-xl">
                      {n.name}
                    </div>{" "}
                  </a>
                </li>
              ))}
              <li>
                <div className="p-4 rounded ">
                  <a href="/Categories">
                    <button className="w-full h-10 rounded-lg border border-neutral-900 text-neutral-900 bg-neutral-100 hover:shadow-2xl hover:bg-teal-700 hover:border-teal-700 hover:text-neutral-100 font-bold duration-200">
                      DISCOVER
                    </button>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        )}
        {/*END Categories menu*/}
      </div>
    </div>
  );
};

export default Navbar;
