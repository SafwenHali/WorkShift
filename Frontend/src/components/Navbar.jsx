import React , { useState} from "react";
const Navbar = (props) => {
    let Links =[
      {name:"VIEW PLANS",link:"/Putin"},
      {name:"TAKE QUIZZ",link:"/Putin"},
      {name:"READ ARTICLES",link:"/Articles"},
      {name:"ABOUT",link:"/Putin"},
    ];
    let [open,setOpen]=useState(false);
    const [updown, setUpdown] = useState(false);
  
    let catMenue =["ma Tfoutch l 24 character","Art & Music","Technologie","useFetchCategory()"]


  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className="bg-neutral-900 w-full h-20">
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        
          <span className='space-x-3 cursor-pointer flex items-center font-bold text-neutral-50 font-sansserif '>
            <img src="../../public/icon/LOGO.svg" className="w-fit h-10"/> 
            <a href="/" className='text-2xl'>Work Shift </a>
            <h1 className="bg-neutral-400 h-6 w-0.5 rounded"/>
          {<p className="font-light text-neutral-400">{props.PageName}</p>}
          </span>
       
      
      <div onClick={()=>setOpen(!open)} className='text-3xl text-white hover:text-teal-600 absolute right-8 top-6 cursor-pointer md:hidden'>
      <ion-icon name={open ? 'close':'menu'}></ion-icon>
      </div>
      <ul className={`
      ${open ? 'top-22 ':'top-[-490px]'}
      bg-neutral-200 md:bg-neutral-900 md:flex items-center md:pb-0 pb-14 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-24 transition-all duration-500`}>
        {/*Categories*/}
        <li key="Cat"className='md:ml-8 md:my-0 my-7 md:pt-0 pt-5 md:font-semibold font-bold'  >
          <button className=' text-neutral-800 hover:text-teal-600 md:text-neutral-200 duration-300'
          onClick={()=>setUpdown(!updown)}>
              ALL CATEGORIES<ion-icon name={updown ?"chevron-up-outline":"chevron-down-outline"}></ion-icon>
          </button>
        </li>
        {/*Links to pages*/}
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 md:my-0 my-7 md:pt-0 pt-5 md:font-semibold font-bold'>
              <a href={link.link} className=' text-neutral-800 hover:text-teal-600 md:text-neutral-200 duration-300'>
                {link.name}
              </a>
            </li>
          ))
        }
        
        {/*Login*/}
      </ul>
      
      </div>
      {updown === true &&<div>
        <ul className="p-4 w-72 h-fit ">
          <div className="bg-neutral-900 text-neutral-100 rounded shadow-lg">
                {catMenue.map((m)=>(
                <li key={m}>
                   <a href="/"><div className="p-4 pl-10 hover:text-teal-400 hover:bg-neutral-700 rounded duration-300">{m}</div> </a>
                </li>
                ))}</div>
              </ul></div>
              
            }
    </div>
    </div>
  )
}

export default Navbar