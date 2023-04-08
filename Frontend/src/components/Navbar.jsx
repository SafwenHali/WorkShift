import React , { useState} from "react";
import useFetch from "../hooks/useFetchCategories";

const Navbar = (props) => {
    let Links =[
      {name:"VIEW PLANS",link:"/Plans"},
      {name:"READ ARTICLES",link:"/Articles"},
    ];
    let [open,setOpen]=useState(false);
    const [updown, setUpdown] = useState(false);
  
    const {data} = useFetch();

  return (
    <div className='shadow-lg w-full fixed top-0 left-0'>
      <div className="bg-neutral-900 w-full h-20">
      <div className='lg:flex items-center justify-between py-4 lg:px-10 px-7'>
        {/*Name and LOGO*/}
          <span className='space-x-3 cursor-pointer flex items-center font-bold text-neutral-50 font-sansserif '>
            <img src="/icon/LOGO.svg" className="w-fit h-10"/> 
            <a href="/" className='text-2xl block'>Work Shift </a>
            <h1 className="bg-neutral-400 h-6 w-0.5 rounded"/>
          {<p className="font-light text-neutral-400">{props.PageName}</p>}
          </span>
       {/*END Name and LOGO*/}
      
      <div onClick={()=>setOpen(!open)} className='text-3xl text-white hover:text-teal-600 absolute right-8 top-6 cursor-pointer lg:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>
      <ul className={`
      ${open ? 'top-22 ':'hidden'}
       bg-neutral-200 lg:bg-neutral-900 lg:flex items-center lg:pb-0 pb-14 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-24 transition-all duration-500`}>
        {/*Categories*/}
        <li key="Cat"className='lg:ml-8 lg:my-0 my-7 lg:pt-0 pt-5 lg:font-semibold font-bold'  >
          {/*Categories web (with menu)*/}
          <span className="hidden lg:inline">
            <button className=' text-neutral-800 hover:text-teal-600 lg:text-neutral-200 duration-300'
            onClick={()=>setUpdown(!updown)}>
                ALL CATEGORIES
                  <ion-icon  name={updown ?"chevron-up-outline":"chevron-down-outline"}></ion-icon> 
            </button> 
          </span>
          {/*Categories mobile*/}
          <span className="lg:hidden">
            <a className=' text-neutral-800 hover:text-teal-600 lg:text-neutral-200 duration-300'
              href="/Categories">
                ALL CATEGORIES            
            </a>
          </span>
        </li>
        {/*END Categories*/}
        {/*Pages from Links*/}
        {
          Links.map((link)=>(
            <li key={link.name} className='lg:ml-8 lg:my-0 my-7 lg:pt-0 pt-4 lg:font-semibold font-bold'>
              <a href={link.link} className=' text-neutral-800 hover:text-teal-600 lg:text-neutral-200 duration-300'>
                {link.name} 
              </a>
            </li>
          ))
        }
        {/*END pages*/}
        {/*NAVBAR Login Button*/}
          <li key="Login" className='lg:ml-8 lg:my-0 my-7 lg:pt-0 pt-3 lg:font-semibold font-bold'>
          <a href="/Sign-in"> 
              <button className="w-28 h-10 lg:rounded-lg border border-teal-900 text-neutral-100 bg-teal-700 hover:shadow-2xl hover:bg-neutral-100 hover:text-neutral-900 font-semibold duration-300">
                Sign in
              </button></a> 
          </li>

        {/*END Login*/}
      </ul>
      </div>
      {/*Categories menu*/}
      {updown === true &&<div className="hidden lg:flex p-2 pt-4 w-72 absolute right-80">
        <ul className=" bg-neutral-900 text-neutral-100 rounded shadow-lg overflow-y-auto">  
         {data.map((n)=>(
            <li key={n._id}>
              <a href={'/Categories/'+n._id} ><div className="p-3 pr-10 pl-10 hover:text-teal-400 hover:bg-neutral-700 rounded duration-300 hover:shadow-xl">{n.name}</div> </a>
            </li>
          ))}
          <li>
            <div className="p-4 rounded ">
              <a href="/Categories"> 
              <button className="w-full h-10 rounded-lg border border-neutral-900 text-neutral-900 bg-neutral-100 hover:shadow-2xl hover:bg-teal-700 hover:border-teal-700 hover:text-neutral-100 font-bold duration-200">
                DISCOVER
              </button></a>
            </div>
          </li>
        </ul>
      </div>}
      {/*END Categories menu*/}
    </div>
  </div>
  )
}

export default Navbar