import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import useFetch from "../../hooks/useFetchFormation";
import { useParams } from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";

const EditCourse = () => {
  const { id } = useParams();
  const { data } = useFetch(id);
  console.log(data);

  const [post, setPost] = useState();
  const handleInput = (event) => {
    setPost({ ...post, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(post);
    axios
      .put("http://127.0.0.1:7000/api/formation/" + id, post)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
    window.location.href = "/Admin/Courses";
  };
  const handleButtonClick = () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this Course?"
    );
    if (confirmed) {
      axios
        .delete("http://127.0.0.1:7000/api/formation/" + id)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
      console.log("User confirmed action");
      window.location.href = "/Admin/Courses";
    } else {
      // code to execute if user cancels
      console.log("User cancelled action");
    }
  };
  try {
    const token = localStorage.getItem("at");
    const role = jwt_decode(token).role;
    console.log(role);
    if (role != "admin") {
      throw error;
    }
  } catch (error) {
    return (
      <div className="border-2 border-neutral-900 min-h-screen h-full bg-neutral-900">
        <center className=" text-neutral-300 pt-8">
          <img src="/icon/LOGO.svg" className="w-80"></img>
          <span className="text-4xl font-bold text-neutral-100">
            Oops,&nbsp;,
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
                </button>
              </a>
            </div>
          </div>
        </center>
      </div>
    );
  }
  return (
    <div>
      <Sidebar />
      <div className="pl-20">
        <div className="p-20 pl-64 min-h-screen h-full bg-teal-900">
          <a
            href="/Admin/Courses"
            className="bg-teal-700 hover:bg-teal-600 hover:border rounded text-xl text-neutral-100 font-light"
          >
            &nbsp;<ion-icon name="arrow-back-outline"></ion-icon>
            &nbsp; Back To Courses List &nbsp;
          </a>
          <div className="pb-8 text-6xl text-neutral-100 font-light">
            Edit Course
          </div>
          <div className="flex justify-center">
            <form
              className="w-full max-w-lg bg-white p-4 rounded-xl"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Course Title
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="nom"
                    type="Title"
                    defaultValue={data.nom}
                    onChange={handleInput}
                    onLoad={handleInput}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    image url
                  </label>
                  <p className="text-gray-600 text-xs italic pb-1">
                    -Choosing images from &nbsp;
                    <a
                      className="text-teal-600 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.istockphoto.com/stock-photos"
                    >
                      istockphoto.com
                    </a>
                    &nbsp; recommended
                  </p>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="cover"
                    defaultValue="{data.cover}"
                    type="Link"
                    onChange={handleInput}
                    onLoad={handleInput}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Formateur
                  </label>
                  <select
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="Formateur"
                    defaultValue="{data.instructeur}"
                    onChange={handleInput}
                    onLoad={handleInput}
                  ></select>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Durée
                  </label>
                  <p className="text-gray-600 text-xs italic pb-1">
                    Course length in Hours
                  </p>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    name="duree"
                    type="Number"
                    defaultValue={data.duree}
                    onChange={handleInput}
                    onLoad={handleInput}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Description
                  </label>
                  <textarea
                    className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                    name="description"
                    defaultValue={data.description}
                    onChange={handleInput}
                    onLoad={handleInput}
                  ></textarea>
                </div>
              </div>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <button
                    className="shadow bg-teal-600 hover:bg-teal-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="submit"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div>
            <button
              onClick={handleButtonClick}
              className="shadow bg-red-600 hover:bg-neutral-200 text-neutral-100 hover:text-red-600 border border-red-600 font-bold py-2 px-4 rounded"
              type="submit"
            >
              Delete Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditCourse;
