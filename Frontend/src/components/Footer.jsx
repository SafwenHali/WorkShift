import React from "react";  
const Footer=()=>{
    let Explore =[
        {name:"PLANS ",link:"/Plans"},
        {name:"CATEGORIES ",link:"/Categories"},
        {name:"ARTICLES ",link:"/Articles"},       
        {name:"QUIZ ",link:"/Discover"},
        
      ];
      let About =[
        {name:"ABOUT US ",link:"/"},    
        {name:"SOCIAL IMPACT ",link:"/"},
        {name:"ENTREPRISES ",link:"/"},
        {name:"TERMS ",link:"/"},
        {name:"SUPPORT ",link:"/"},
      ];
      let Social =[
        {name:" Twitter",link:"/",icon:"logo-twitter"},
        {name:" Facebook",link:"/",icon:"logo-facebook"},
        {name:" Instagram",link:"/",icon:"logo-instagram"}, 
        {name:" Tiktok",link:"/",icon:"logo-tiktok"},
        {name:" Linkdin",link:"/",icon:"logo-linkedin"},
        
      ];
return(
    <footer className="footer bg-neutral-900 relative pt-1 border-b-2 border-neutral-900">
    <div className="container mx-auto px-6">

        <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                    <span className="font-bold text-neutral-200 uppercase mb-2">Explore</span>
                    {Explore.map((link)=>(
                    <span className="my-4 md:pl-0 pl-7">
                        <a href={link.link}  className="text-neutral-300  text-md hover:text-neutral-500">
                        {link.name}   
                        </a>
                        
                    </span>
                    ))}
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-neutral-200 uppercase mt-4 md:mt-0 mb-2">About</span>
                    {About.map((link)=>(
                    <span className="my-4 md:pl-0 pl-7">
                        <a href={link.link}  className="text-neutral-300  text-md hover:text-neutral-500">
                        {link.name}
                        </a>
                        
                    </span>
                    ))}
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-neutral-200 uppercase mt-4 md:mt-0 mb-2">Socials</span>
                    {Social.map((link)=>(
                    <span className="my-2 md:pl-0 pl-7">
                        <a href={link.link}  className="text-neutral-300  text-md hover:text-neutral-500">
                            <ion-icon size="large" name={link.icon}></ion-icon>
                        </a>
                        
                    </span>
                    ))}
                </div>
            </div>
        </div>
    </div>
    <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-neutral-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
                <p className="text-md text-neutral-200 mb-2">
                    <span className="font-bold">© 2023 Work Shift</span> by VONCOM
                </p>
            </div>
        </div>
    </div>
</footer>
)
}
export default Footer