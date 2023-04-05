import React from "react";
const Navbar = () => {
    let Links =[
      {name:"HOME",link:"/Home"},
      {name:"ARTICLES",link:"/Articles"},
      {name:"VLADIMIR PUTIN",link:"/Putin"}
    ];
  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-neutral-900 py-4 md:px-10 px-7'>
      <a className=' text-2xl cursor-pointer flex items-center font-bold text-neutral-50 font-sansserif '
        href='/Home'>
        <img src="icon/1.svg" className="w-fit h-10 pr-1"></img>
        Work Shift
      </a>
    
      <ul className="bg-neutral-200 md:bg-neutral-900 md:flex items-center md:pb-0  absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-24 transition-all duration-500 ease-in">
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 md:my-0 my-7'>
              <a href={link.link} className=' text-neutral-800 hover:text-teal-600 md:hover:text-teal-400 md:text-neutral-200 duration-300'>{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default Navbar