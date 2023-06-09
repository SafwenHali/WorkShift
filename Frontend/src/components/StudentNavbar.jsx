import React , { useState} from "react";

const Navbar = () => {
    let Links =[
      {name:"OPTION 1",link:"/Plans"},
      {name:"OPTION 2",link:"/Articles"},
    ];
    let [open,setOpen]=useState(false);

    const handlelogout = () => {
      localStorage.clear();
      window.location.href = "/Home"
    };

  return (
    <div className='shadow-lg w-full fixed top-0 left-0 z-20'>
      <div className="bg-neutral-900 w-full h-20"> 
        <div className='lg:flex items-center justify-between py-4 lg:px-10 px-7'>
        {/*Name and LOGO*/}
          <span className='cursor-pointer flex items-center font-bold text-neutral-50 font-sansserif '>
            <img src="/icon/LOGO.svg" className="w-fit h-10"/> 
            <a href="/" className='text-2xl block'>Work Shift </a>
            <ul className={`
      ${open ? 'top-20 ':'hidden'}
       bg-neutral-200 lg:bg-neutral-900 lg:flex items-center lg:pb-0 pb-14 absolute lg:static lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pl-24 transition-all duration-500`}>
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
          <li className={`${open ? '':'hidden'}`}>
          <button 
            onClick={handlelogout}
            className="w-24 h-10 rounded-lg border border-red-700 text-neutral-100 bg-red-700 hover:shadow-2xl hover:bg-neutral-100 hover:text-red-700 font-semibold hover:font-bold duration-300">
          Sign Out
        </button>   
          </li>
      </ul>
          </span>
       {/*END Name and LOGO*/}
      <span>
        <button 
        onClick={handlelogout}
        className="hidden lg:flex pt-2 pl-4 w-24 h-10 rounded-lg border border-red-700 text-neutral-100 bg-red-700 hover:shadow-2xl hover:bg-neutral-100 hover:text-red-700 font-semibold hover:font-bold duration-300">
          Sign Out
        </button>
      <div  onClick={()=>setOpen(!open)} className='text-4xl text-white hover:text-teal-600 absolute right-8 top-3 cursor-pointer lg:hidden'> 
        <span className={`${open ? 'hidden':''} `}> ≡</span>
        <span className={`${open ? '':'hidden'}`}> ⨯</span>
          
              
      </div>
      </span>
        </div>
    </div>
  </div> )
}

export default Navbar