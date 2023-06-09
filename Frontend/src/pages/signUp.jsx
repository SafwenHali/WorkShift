import React, { useState } from "react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";
import SigninModal from "../components/signinModal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const signUp = () => {
  const [post, setPost] = useState({});
  const [post2, setPost2] = useState({});
  const [visible, setVisible] = useState(false);
  const handleOnclose = () => setVisible(false);
  const navigate = useNavigate();

  const handleList = (event) => {
    setPost({ ...post, role: event.target.value });
  };

  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://127.0.0.1:7000/api/auth/register", post)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          toast.success("User created.");
          setPost2({email:post.email,password:post.password})
          alert("account created sucessfully")
          axios
      .post("http://127.0.0.1:7000/api/auth/login", post)
      .then((response) => {
        // console.log(response.accessToken);
        // console.log(response.data.accessToken);

        // Save the access in session storage
        let access_token = response.data.accessToken;
        sessionStorage.setItem("at", access_token);

        // sessionStorage.setItem("email", "sample@mail.com");
        // let data = sessionStorage.getItem("key");
        // console.log(data);

        // Check the User profile
        axios
          .post(
            "http://127.0.0.1:7000/getRole",
            { key: "posted-elem" },
            {
              headers: { "Content-Type": "application/json", at: access_token },
            }
          )
          .then((r) => {
            console.log(r);
            if (r.data.role === "instructor") {
              navigate("/formateur", { replace: true });
            } else if (r.data.role === "student") {
              navigate("/student", { replace: true });
            } else if (r.data.role === "admin") {
              navigate("/Admin", { replace: true });
            } else if (r.data.role === "enterprise") {
              navigate("/enterprise", { replace: true }); 
            } else {
              alert("undefined Role");
            }
          });

        // redirect to dash board profile
      })
      .catch((err) => {
        console.log(err);
        // console.warn("error");
        alert("Wrong credentials");
      });
          //navigate("/", { replace: true });
        };
        
      })
      .catch((err) => console.log(err));
    //window.location.href = "/Admin/Articles";
      }
  return (
    <div className="min-h-screen bg-black">
      <SigninModal visible={visible} onClose={handleOnclose} />
      <Nav PageName={"REGISTER"} />
      <h1 className="pl-14 pt-32 mb-10 text-4xl font-bold tracking-tight text-teal-600 ">
        Registration Form
      </h1>
      <center>
        <form
          className="w-96 lg:w-2/5 md:w-1/2 bg-neutral-300 mb-10 rounded-xl"
          onSubmit={handleSubmit}
        >
          <div className="px-5 py-10 pb-20">
            <div className="flex justify-around pb-2">
              <span className="m-1 w-full">
                <label className="font-semibold text-sm text-neutral-600 pb-1 block ">
                  First Name
                </label>
                <input
                  required
                  name="firstName"
                  type="title"
                  onChange={handleInput}
                  className="border rounded-lg px-3 py-2 text-sm w-full bg-neutral-200 shadow-md"
                  placeholder="Foolen"
                />
              </span>
              <span className="m-1 w-full">
                <label className="font-semibold text-sm text-neutral-600 pb-1 block ">
                  Last Name
                </label>
                <input
                  required
                  name="lastName"
                  type="title"
                  onChange={handleInput}
                  className="border rounded-lg px-3 py-2 text-sm w-full bg-neutral-200 shadow-md"
                  placeholder="Fooleni"
                />
              </span>
            </div>
            <div className="pb-2">
              <label className="font-semibold text-sm text-neutral-600 pb-1 block ">
                Username
              </label>
              <input
                required
                name="userName"
                type="title"
                onChange={handleInput}
                className="border rounded-lg px-3 py-2 text-sm w-full bg-neutral-200 shadow-md"
                placeholder="@foolen_fooleni"
              />
            </div>
            {/* <div className="pb-2">
              <label className="font-semibold text-sm text-neutral-600 pb-1 block ">
                Date of birth
              </label>
              <input
                type="date"
                className="border rounded-lg px-3 py-2 text-sm w-full bg-neutral-200 shadow-md"
              />
            </div> */}
            <div className="pb-2">
              <label className="font-semibold text-sm text-neutral-600 pb-1 block ">
                Email
              </label>
              <input
                required
                name="email"
                type="email"
                onChange={handleInput}
                className="border rounded-lg px-3 py-2 text-sm w-full bg-neutral-200 shadow-md"
                placeholder="foolenfooleni@gmail.com"
              />
            </div>
            <div className="pb-2">
              <label className="font-semibold text-sm text-neutral-600 pb-1 block ">
                Password
              </label>
              <input
                required
                name="password"
                type="password"
                onChange={handleInput}
                className="border rounded-lg px-3 py-2 text-sm w-full bg-neutral-200 shadow-md"
              />
            </div>
            <div className="pb-2">
              <label className="font-semibold text-sm text-neutral-600 pb-1 block ">
                Comfirm Password
              </label>
              <input
                required
                name="confirmPassword"
                type="password"
                onChange={handleInput}
                className="border rounded-lg px-3 py-2 text-sm w-full bg-neutral-200 shadow-md"
              />
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-neutral-600 ">
                You Are...
              </h3>
              <ul className="items-center w-full text-sm font-medium text-neutral-600 bg-neutral-200 rounded-lg sm:flex dark:bg-neutral-200 shadow-md dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-license"
                      type="radio"
                      value="student"
                      name="role"
                      onChange={handleList}
                      className=""
                    />
                    <span className="w-full py-3 ml-2 font-medium text-gray-900 dark:bg-neutral-200 ">
                      Student
                    </span>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-id"
                      type="radio"
                      value="instructor"
                      name="role"
                      onChange={handleList}
                      className=""
                    />
                    <span className="w-full py-3 ml-2 font-medium text-gray-900 dark:bg-neutral-200 ">
                      Instructor
                    </span>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r ">
                  <div className="flex items-center pl-3">
                    <input
                      id="horizontal-list-radio-license"
                      type="radio"
                      value="enterprise"
                      name="role"
                      onChange={handleList}
                      className=""
                    />
                    <span className="w-full py-3 ml-2 font-medium text-gray-900 dark:bg-neutral-200 ">
                      Entreprise
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div className="pt-4">
              <button
                type="submit"
                className=" transition duration-200 bg-teal-600 text-white w-full py-2.5 rounded-lg text-sm shadow-md hover:bg-teal-900 font-semibold text-center inline-block"
              >
                <span className="inline-block mr-2">Register</span>
              </button>
              <div className="pt-3">
                <label className="font-semibold text-sm text-neutral-600 pb-2 block text-center">
                  Already have an account?
                </label>
                <button
                  onClick={() => {
                    setVisible(true);
                  }}
                  className="transition duration-200 -2 border border-teal-700 text-teal-700 w-full py-2.5 rounded-lg text-sm shadow-md hover:bg-neutral-200 font-semibold text-center inline-block"
                >
                  <span className="inline-block mr-2">Login</span>
                </button>
              </div>
            </div>
          </div>
        </form>
      </center>
      <Footer />
    </div>
  );
};
export default signUp;
