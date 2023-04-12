import React from "react";
import Sidebar from "../components/Sidebar";


const AddArticles =() => {
    return(
        <div>
            <Sidebar/>
            <div className="pl-20">
                <div className="p-20 pl-64 h-full bg-teal-900">  
                    <div className="pb-8 text-6xl text-neutral-100 font-light">
                            Write A New Article
                        </div>
                        <div className="flex justify-center">   
                        <form class="w-full max-w-lg bg-white p-4 rounded-xl">
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Ariticle Title
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="nick" type="Title"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        image url 
      </label>
      <p class="text-gray-600 text-xs italic pb-1">
           -Choosing images from &nbsp;
           <a className="text-teal-600 hover:underline" target="_blank" rel="noopener noreferrer" href="https://www.istockphoto.com/stock-photos">istockphoto.com</a> 
           &nbsp; recommended  
        </p>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="Link"/>
      
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Writer's name
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="Name"/>
    </div>
  </div>
  <div class="flex flex-wrap -mx-3 mb-2">
    <div class="w-full px-3">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Article
      </label>
      <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="message"></textarea>
      <p class="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
    </div>
  </div>
  <div class="md:flex md:items-center">
    <div class="md:w-1/3">
      <button class="shadow bg-teal-600 hover:bg-teal-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
        Send
      </button>
    </div>
    <div class="md:w-2/3"></div>
  </div>
</form></div>

            
                </div>
            </div>
            
        </div>
    )
}
export default AddArticles;