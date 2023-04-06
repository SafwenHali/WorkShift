import React , { useState } from "react";
const Navbar = () => {
    let Links =[
      {name:"HOME",link:"/Home"},
      {name:"ARTICLES",link:"/Articles"},
      {name:"VLADIMIR PUTIN",link:"/Putin"}
    ];
    let [open,setOpen]=useState(false);
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-neutral-900 py-4 md:px-10 px-7'>
      <a className=' text-2xl cursor-pointer flex items-center font-bold text-neutral-50 font-sansserif '
        href='/Home'>
        <img src="icon/LOGO.svg" className="w-fit h-10 pr-1"></img>
        Work Shift
      </a>
      <div onClick={()=>setOpen(!open)} className='text-3xl text-white hover:text-teal-600 absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>
      <ul className={`
      ${open ? 'top-22 ':'top-[-490px]'}
      bg-neutral-200 md:bg-neutral-900 md:flex items-center md:pb-0 pb-14  absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-24 transition-all duration-500`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 md:my-0 my-7 md:pt-0 pt-5 md:font-semibold font-bold'>
              <a href={link.link} className=' text-neutral-800 hover:text-teal-600 md:text-neutral-200 duration-300'>{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default Navbar