import React from "react";
import Nav from "../components/Navbar"
import Footer from "../components/Footer";

const Explore =() => {
  const sections = [
    { name: " CAREER CHANGE PLAN", id: "#CareerChangePlan"},
    { name: " CHOOSING A CAREER", id: "#ChoosingACareer"},
    { name: " GOING BACK TO SCHOOL", id: "#BackToSchool"},
    
  ];
    return(
        <div className="min-h-screen bg-black">
            <Nav PageName={`Explore`}/>
            <h1 className="pl-14 pt-36 mb-4 text-4xl font-bold tracking-tight text-teal-600 ">
                Explore
            </h1>
            <div className=" px-3 md:lg:xl:px-40 py-20 bg-opacity-10">
                <ul className="grid grid-cols-1 md:lg:xl:grid-cols-3 group lg:p-1"> 
                    {sections.map((n)=>(
                        <div className="p-1">
                           <li key={n.name}>
                                <a href={"/Explore"+n.id} className="p-10 flex flex-col items-center text-center text-teal-900 hover:text-neutral-900 group bg-neutral-300 hover:bg-teal-600 hover:shadow-xl shadow-teal-900 cursor-pointer">
                                <p className="text-2xl font-bold  mt-3 ">
                                    {n.name}
                                </p>  
                                </a>
                            </li> 
                        </div>
                    
                    ))}
                </ul>
            </div>
            <div className="pt-12" name="CareerChangePlan" id="CareerChangePlan"></div>
            <section class="text-neutral-300 body-font">
              <h2 className="pl-14 pt-10 text-2xl font-bold tracking-tight text-neutral-200 ">
              Creating a Successful Career Change Plan
              </h2>
              <p className="text-xl mt-10 flex items-center lg:w-3/5 mx-auto">
              People change careers for many reasons. Many times people make career changes because they are anticipating an upcoming layoff, or they lose their job without notice. You are not alone. Everyone changes careers at least once during their lives. Most workers make several career changes during their working life. No matter the reason, an effective career plan is the key to success. Follow these steps for a successful career transition:
              </p>
              <img class=" flex items-center mx-auto lg:w-3/5 md:w-1/2 lg:h-1/2 object-cover object-center rounded-lg md:mt-10 mt-12" src="https://www.bu.edu/alumni/files/2021/01/career-new-year-1200x500.jpg" alt="step"/>
              
              <div class="container px-5 py-24 mx-auto">
                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-neutral-200 sm:flex-row flex-col">
                  <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-neutral-100 text-teal-500 flex-shrink-0">
                    svg
                  </div>
                  <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-teal-600 text-lg title-font font-medium mb-2">Determine Your Likes and Dislikes</h2>
                    <p class="leading-relaxed text-base">Most people change their career because they are not satisfied with it. Most the time they are not happy with their salary, their boss, their company, or they do not think there are opportunities for promotion at their current company. Regardless of the reason, you need to identify your interests and career aspirations before making a change so your next career is more satisfying. Although it is easy to identify what you do not like about your job, you need to recognize what you do like. Your goal is to find a career that motivates and inspires you. While you are listing what you like to do, take into consideration what you like to do during your spare time and what you like to at work. Ask yourself what motivates and excites you. What are your passions? If you are still trying to determine that, we suggest you spend time taking some career assessment tests.</p>
                  </div>
                </div>
                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-neutral-200 sm:flex-row flex-col">
                  <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-teal-600 text-lg title-font font-medium mb-2">The Catalyzer</h2>
                    <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                  </div>
                  <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-neutral-100 text-teal-500 flex-shrink-0">
                    svg
                  </div>
                </div>
              </div>
            </section>
            <div className="pt-12" name="ChoosingACareer" id="ChoosingACareer"></div>
            <section class="text-neutral-300 body-font">
              <h2 className="pl-14 pt-10 text-2xl font-bold tracking-tight text-neutral-200 ">
                Steps To Take Before Choosing A Career
              </h2>
              <p className="text-xl mt-10 flex items-center lg:w-3/5 mx-auto">
              Take time to conduct in-depth analysis of potential careers, but also determine your interests and where your skill set is in most demand. Determine how your skills, personality, and interests differentiate you from others and what type of career is an ideal fit. Before making career decisions, consider:
              </p>
              <div class="container px-5 py-10 mx-auto flex flex-wrap">
                <div class="flex flex-wrap w-full">
                  <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
                    <div class="flex relative pb-12">
                      <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-neutral-300 pointer-events-none"></div>
                      </div>
                      <div class="flex-shrink-0 w-10 h-10 rounded-full bg-teal-700 inline-flex items-center justify-center text-neutral-100 relative z-10">
                        svg
                      </div>
                      <div class="flex-grow pl-4">
                        <h2 class="font-medium title-font text-lg text-teal-600 mb-1 tracking-wider">What am I good at?</h2>
                        <p class="leading-relaxed">
                          Consider careers where you could best utilize current job skills and knowledge and ones where you could better develop them. You'll more than likely enjoy a job where you execute job duties you enjoy and excel at.
                        </p>
                      </div>
                    </div>

                    <div class="flex relative pb-12">
                      <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-neutral-300 pointer-events-none"></div>
                      </div>
                      <div class="flex-shrink-0 w-10 h-10 rounded-full bg-teal-700 inline-flex items-center justify-center text-neutral-100 relative z-10">
                        svg
                      </div>
                      <div class="flex-grow pl-4">
                        <h2 class="font-medium title-font text-lg text-teal-600 mb-1 tracking-wider">What are my likes and dislikes?</h2>
                        <p class="leading-relaxed">
                          Do not become a customer service specialist if you do not enjoy interacting with others or lack effective communication skills. Likewise, if you do not enjoy being outside or physical labor, do not pursue a career in the construction industry. Determining jobs you would not enjoy is an effective way to narrow a list of potential careers.
                        </p>
                      </div>
                    </div>

                    <div class="flex relative pb-12">
                      <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-neutral-300 pointer-events-none"></div>
                      </div>
                      <div class="flex-shrink-0 w-10 h-10 rounded-full bg-teal-700 inline-flex items-center justify-center text-neutral-100 relative z-10">
                        svg
                      </div>
                      <div class="flex-grow pl-4">
                        <h2 class="font-medium title-font text-lg text-teal-600 mb-1 tracking-wider">Why do I want to pursue this career?</h2>
                        <p class="leading-relaxed">
                          Many people feel pressure from family members and friends to pursue certain careers or the need to earn a lot of money, so if these serve as primary motivations, reconsider your career choices. It's recommended to choose an interesting career. Choose a career you're passionate about to avoid career dissatisfaction and save time since making career transitions can be time consuming and expensive.
                        </p>
                      </div>
                    </div>

                    <div class="flex relative pb-12">
                      <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-neutral-300 pointer-events-none"></div>
                      </div>
                      <div class="flex-shrink-0 w-10 h-10 rounded-full bg-teal-700 inline-flex items-center justify-center text-neutral-100 relative z-10">
                        svg
                      </div>
                      <div class="flex-grow pl-4">
                        <h2 class="font-medium title-font text-lg text-teal-600 mb-1 tracking-wider">What is the job outlook?</h2>
                        <p class="leading-relaxed">
                          Pursue careers with projected job growth and security. It's very frustrating to lose a job shortly after beginning a new career. If this happens, you'll have to begin a new career search. Select industries that continue to grow. If your job is outsourced, it could be very expensive and time consuming to return to school and acquire new job skills.
                        </p>
                      </div>
                    </div>
                    
                    <div class="flex relative">
                      <div class="flex-shrink-0 w-10 h-10 rounded-full bg-teal-700 inline-flex items-center justify-center text-neutral-100 relative z-10">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                          <path d="M22 4L12 14.01l-3-3"></path>
                        </svg>
                      </div>
                      <div class="flex-grow pl-4">
                        <h2 class="font-medium title-font text-lg text-teal-600 mb-1 tracking-wider">What kind of life can I have with this career?</h2>
                        <p class="leading-relaxed">
                          When answering this question, there are many things to consider. You must consider how long your commute will be, where you want to live, and whether you mind working overtime. Career choices can affect your personal life. Likewise, consider whether your selected career provides benefits and a large enough annual salary to support your lifestyle. Also, if you're required to accumulate debt to earn a degree or complete career training, choose a job where you'll be able to repay it.
                        </p>
                      </div>
                    </div>
                  </div>
                  <img class="lg:w-3/5 md:w-1/2 lg:h-1/2 object-cover object-center rounded-lg md:mt-10 mt-12" src="https://www.bu.edu/alumni/files/2021/01/career-new-year-1200x500.jpg" alt="step"/>
                </div>
              </div>
            </section>
            <div className="pt-12" name="BackToSchool" id="BackToSchool" ></div>
            <section class="text-neutral-300 body-font px-5">
              <h2 className="pl-14 pt-10 text-2xl font-bold tracking-tight text-neutral-200 ">
                Will Going Back to School Help Your Career?
              </h2>
              <img class=" flex items-center mx-auto lg:w-3/5 md:w-1/2 lg:h-1/2 object-cover object-center rounded-lg md:mt-10 mt-12" src="https://www.bu.edu/alumni/files/2021/01/career-new-year-1200x500.jpg" alt="step"/>
              <p className="text-xl mt-10 flex items-center lg:w-3/5 mx-auto">
              For years studies have shown a direct link between level of education and life long earnings – and its hard to argue that earning a college degree doesn't have its benefits, especially when it comes to career advancement opportunities. But does the same hold true for mid-life adults who are already in a career or don't plan on working as long at their career as recent college grads just entering the workforce? The reality is that going back to school as an adult is a different story altogether.
              <br/><br/>
              Going back to school as an adult can be beneficial, but is it right for you? You shouldn't make a leap into a college degree or similar education program until you're certain that it is. While earning a degree has its benefits, especially with respect to career advancement, it also has its costs, and has a huge impact on life – especially for adults who are further along in life. The following are a few things to consider before making the leap back into school. 
              </p>
              <div class="container px-5 py-8 mx-auto flex flex-wrap">
                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                  <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-neutral-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-teal-500 text-white relative z-10 title-font font-medium text-sm">1</div>
                  <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div class="flex-shrink-0 w-24 h-24 bg-neutral-100 text-teal-500 rounded-full inline-flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-12 h-12" viewBox="0 0 24 24">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 class="font-medium title-font text-teal-600 mb-1 text-xl">Shooting Stars</h2>
                      <p class="leading-relaxed">VHS cornhole pop-up, try-hard 8-bit iceland helvetica. Kinfolk bespoke try-hard cliche palo santo offal.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <Footer/>  
        </div>
            
       
                    
    )
}
export default Explore


    