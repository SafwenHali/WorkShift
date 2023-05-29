import React, {useState} from 'react'
import axios from "axios";

export default function signinModal(props) {
  const [post, setPost] = useState({});
  
const handleOnClose=(e)=>{
    if(e.target.id ==="bg")props.onClose();
}

    if(!props.visible) return null;

    const handleInput = (event) => {
      setPost({ ...post, [event.target.name]: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      axios
        .post("http://127.0.0.1:7000/api/auth/login", post)
        .then((response) => console.log(response))
        .catch((err) => console.log(err));
  
      //window.location.href = "/Admin/Articles";
    };
  return (
    <div id="bg" onClick={handleOnClose} className='z-30 fixed insert-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center w-full h-full transition-all'>
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md"> 
    <div className="bg-neutral-100 shadow w-full rounded-lg">
    <center className='text-4xl font-extrabold text-teal-700 '>
        <img className="h-24" src="../../icon/LOGO.svg"></img> 
            WorkShift
            </center>
            {/*LOGIN*/}
      <form onSubmit={handleSubmit} className="px-5 py-7">
          <label className="font-semibold text-sm text-neutral-600 pb-1 block ">
            E-mail
          </label>
          <input 
            type="email" 
            name="email"
            onChange={handleInput}
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-neutral-200 shadow-md" />
          <label className="font-semibold text-sm text-neutral-600 pb-1 block">
            Password
          </label>
          <input 
            type="PASSWORD"
            name="password"
            onChange={handleInput}
            className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-neutral-200 shadow-md" />
          <div className="py-3">
          <button type="submit" className=" transition duration-200 bg-teal-600 text-white w-full py-2.5 rounded-lg text-sm shadow-md hover:bg-teal-900 font-semibold text-center inline-block">
              <span className="inline-block mr-2">Login</span> 
          </button>
          <div className="py-3">
          <label className="font-semibold text-sm text-neutral-600 pb-2 block text-center">Don't have an account?</label>
        <a href='/register' className="transition duration-200 -2 border border-teal-700 text-teal-700 w-full py-2.5 rounded-lg text-sm shadow-md hover:bg-neutral-200 font-semibold text-center inline-block">
            <span className="inline-block mr-2">Create an account</span>
            
        </a></div></div>
      </form>
      <div className="py-5">
        <div className="grid grid-cols-2 gap-1">
          <div className="text-center sm:text-left whitespace-nowrap">
            <button className="transition duration-200 mx-5 px-5 py-4 font-normal text-sm rounded-lg text-neutral-500 hover:bg-neutral-200">
                
                <span className="inline-block ml-1">Forgot Password</span>
            </button>
          </div>
          <div className="text-center sm:text-right  whitespace-nowrap">
            <button className="transition duration-200 mx-5 px-5 py-4 font-normal text-sm rounded-lg text-neutral-500 hover:bg-neutral-200">
                
                <span className="inline-block ml-1">Help</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}