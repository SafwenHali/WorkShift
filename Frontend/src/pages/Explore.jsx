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
                    <h2 class="text-teal-600 text-lg title-font font-medium mb-2">The Explore New Career Opportunities.</h2>
                    <p class="leading-relaxed text-base">Once you have completed some self evaluation, you next need to find careers that interest you. Many career exploration resources are at your disposal with a lot of the best information available online. Click on the on the Explore Careers link in the upper lefthand corner of this page to find more information about specific careers. Use the skills-matching service found at O*NET Online furnished by the U.S. Department of Labor and fundamental job information provided by the U.S. Bureau of Labor Statistics' Occupational Outlook Handbook. Usually the best source for career information is to meet with local professionals and familiarize yourself with the professional associations in your region.</p>
                  </div>
                  <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-neutral-100 text-teal-500 flex-shrink-0">
                    svg
                  </div>
                </div>
                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-neutral-200 sm:flex-row flex-col">
                  <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-neutral-100 text-teal-500 flex-shrink-0">
                    svg
                  </div>
                  <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-teal-600 text-lg title-font font-medium mb-2">Identify Tranferable Skills.</h2>
                    <p class="leading-relaxed text-base">A challenge faced by many people making career changes is identifying their transferable skills. These skills are acquired from working and can be used in other professional settings. It is easier to make a career move if you have transferable skills. These skills can include leadership, organizational, communication, or sales skills.</p>
                  </div>
                </div>
                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-neutral-200 sm:flex-row flex-col">
                  <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-teal-600 text-lg title-font font-medium mb-2">Career Training and Education.</h2>
                    <p class="leading-relaxed text-base">When you do not have many transferable skills to begin working in a new career, you may need to enroll in education or training program. Usually your company will pay for or sponsor you to attend these programs. If this is not the case, find program available at local vocational school or colleges, or you can obtain a certification or attend graduate school. If you attend graduate school, ensure it is accredited and check its career placement rate.</p>
                  </div>
                  <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-neutral-100 text-teal-500 flex-shrink-0">
                    svg
                  </div>
                </div>

                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-neutral-200 sm:flex-row flex-col">
                  <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-neutral-100 text-teal-500 flex-shrink-0">
                    svg
                  </div>
                  <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-teal-600 text-lg title-font font-medium mb-2">Networking.</h2>
                    <p class="leading-relaxed text-base">Were you aware most jobs are filled before they appear on Monster.com, Careerbuilder.com, or other classified ads? This is the case because of networking. Jobs in high demand are usually filled by employees' associates and other employees of the company. To have a successful career change, it is important to network with other professionals. If you do not have any contacts in an industry that interests you, find them by associating with professional associations. You can also contact alumni from the college you attended to network.
</p>
                  </div>
                </div>
                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-neutral-200 sm:flex-row flex-col">
                  <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-teal-600 text-lg title-font font-medium mb-2">Get Some Experience in Your Career Field.</h2>
                    <p class="leading-relaxed text-base">Changing careers is more difficult than changing jobs. During job changes, you usually find another job in the same field. However, during career changes, you often begin working in industries foreign to you. Obtaining all the experience possible before making a change will make it smoother. You can gain experience by volunteering, gaining temp work, or working part time in a new industry. It is essential to gain experience in the field you would like to work in—take whatever actions necessary to obtain it.</p>
                  </div>
                  <div class="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 sm:ml-10 inline-flex items-center justify-center rounded-full bg-neutral-100 text-teal-500 flex-shrink-0">
                    svg
                  </div>
                </div>
                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-neutral-200 sm:flex-row flex-col">
                  <div class="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full bg-neutral-100 text-teal-500 flex-shrink-0">
                    svg
                  </div>
                  <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-teal-600 text-lg title-font font-medium mb-2">Find A Mentor.</h2>
                    <p class="leading-relaxed text-base">When you are walking down an unfamiliar path, it is helpful to have someone help you who has been done a similar path. Getting someone in a career that interests you to be your mentor is a very good decision. Mentors provide help in numerous ways. For example, mentors will let you know what skills are required for their career fields, encourage and motivate you during your search, and they usually know people who can help you find a job. Your mentor does not need to be a CEO, but he or she should have extensive experience.</p>
                  </div>
                </div>
                <div class="flex items-center lg:w-3/5 mx-auto border-b pb-10 mb-10 border-neutral-200 sm:flex-row flex-col">
                  <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                    <h2 class="text-teal-600 text-lg title-font font-medium mb-2">Be Flexible.</h2>
                    <p class="leading-relaxed text-base">Are you familiar with the phrase “beggars cannot be choosers”? This may be excessive, but you must realize that changing careers will require flexibility. Take advantage of opportunities even if they are not what you expect. Keep in mind that you are beginning a new career. Be prepared for setbacks and do not expect your first job related to your new career will be a dream job. After you have begun your new career, there will be opportunities for promotion or advancement.</p>
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
                      svg
                    </div>
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 class="font-medium title-font text-teal-600 mb-1 text-xl">1. Why are you considering it now?</h2>
                      <p class="leading-relaxed"><br/>What is the motivating factor behind a desire to go back to college or earn a degree? Are you looking to make a mid-life career change and need a new skill set? Is your skill set lacking? Does your current job require a degree or certification for career advancement opportunity? Are you just feeling stagnant in your current career and looking for anyway to enhance your opportunities? Is pursuing a degree a personal goal? Is the benefit of earning a degree worth the sacrifice? These are just a few of the questions you can and should ask yourself when contemplating going back to school to earn a higher degree. While there isn't necessarily a wrong answer to any of these questions, asking them will help you determine your motivations for earning a degree and whether or not they're in line with your ultimate objectives – whatever they may be. It's not uncommon for adults to return to school only to realize that it wasn't the anecdote they were looking for.</p>
                    </div>
                  </div>
                </div>
                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                  <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-neutral-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-teal-500 text-white relative z-10 title-font font-medium text-sm">2</div>
                  <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div class="flex-shrink-0 w-24 h-24 bg-neutral-100 text-teal-500 rounded-full inline-flex items-center justify-center">
                      svg
                    </div>
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 class="font-medium title-font text-teal-600 mb-1 text-xl">2. Can you dedicate the time required to earn a degree?</h2>
                      <p class="leading-relaxed"><br/>After raising seven children, my mother decided to return to school to finish the degree she'd always wanted. But what first started out as a 3-year plan to finish her bachelor's degree quickly morphed into four, then five, then six years of schooling – and she's still working on it. Any degree program is going to require several years to complete, but it often takes even longer for adults returning to school later in life. It's sort of like moving. Every time you move from one house to another, you have more stuff to move and it's just a little bit harder. Earning a degree later in life is very similar. Adults often find that their time commitment to friends, family, work and social groups is much greater than they imagined. Many adults also find themselves in a situation where they must continue working full-time as they pursue their degree part-time. While this sounds fine and dandy, just consider, earning a bachelor's degree part-time can take 5 to 6 years. How old will you be in 5 or 6 years. Will 5 or 6 years of your life, monopolized by work and school, enhance the quality of your “post degree” life enough to justify those many grueling years of school? To save time in travel and classroom attendance, some adults pursue a college degree or degree completion program online at one of several online colleges and universities. Online learning is good option for adults who are set on earning a degree, but must also face the realities of life at the same time. But even online degrees require substantial time commitment in the form of study, group projects, presentations, homework, and research – all of which suck time and energy away from focusing on career, family, and friends. If you've decided that earning a degree is going to be advantageous for your situation, then make sure you plan ahead. Develop a time management system that allocates and balances your time to those activities that are most important – and then stick to it.</p>
                    </div>
                  </div>
                </div>
                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                  <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-neutral-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-teal-500 text-white relative z-10 title-font font-medium text-sm">3</div>
                  <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div class="flex-shrink-0 w-24 h-24 bg-neutral-100 text-teal-500 rounded-full inline-flex items-center justify-center">
                      svg
                    </div>
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 class="font-medium title-font text-teal-600 mb-1 text-xl">3. Can you afford it? </h2>
                      <p class="leading-relaxed"><br/>If time were the only consideration, we all might go back and earn another degree, however, most higher education opportunities these days are quite expensive also. Make sure that <br/><br/>(1) you can afford the degree that you're going to pursue and <br/>(2) it's a good investment – that is, your degree makes you more money than it costs you.<br/><br/>While evidence suggests that earning a college degree will increase your earning potential, there isn't evidence that suggest that your earning potential increases proportionately to the amount you spend on your education. Spend the least amount you can to get the best education you can. This means you'll need to do your research. Explore all your education options – and make sure you do the math before you jump in with both feet. Use a degree to make money, not loose money – it has the potential to do either.<br/><br/>If you decide a higher education makes financial sense, there are quite a few financial aid programs to help students get the education they need. Just a few forms of assistance available include low interest loans sponsored by the federal government, private scholarships, government grants and work study programs. If you're a career professional, you may even look into programs offered by your employer. Many corporations offer tuition reimbursement and scholarship programs for employees willing to go back to school and earn a degree that will help increase their job performance.</p>
                    </div>
                  </div>
                </div>
                <div class="flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto">
                  <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                    <div class="h-full w-1 bg-neutral-200 pointer-events-none"></div>
                  </div>
                  <div class="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-teal-500 text-white relative z-10 title-font font-medium text-sm">4</div>
                  <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                    <div class="flex-shrink-0 w-24 h-24 bg-neutral-100 text-teal-500 rounded-full inline-flex items-center justify-center">
                      svg
                    </div>
                    <div class="flex-grow sm:pl-6 mt-6 sm:mt-0">
                      <h2 class="font-medium title-font text-teal-600 mb-1 text-xl">4. Is going back to school the answer you're looking for?</h2>
                      <p class="leading-relaxed"><br/>Some adults quickly assume that getting a degree is the answer to their concerns. Whether or not earning a degree is the right answer, really depends on what your end game is. If you're just looking for knowledge, there may be quicker, more affordable ways of reaching your goal. Many colleges and universities throughout the United States offer stand alone classes and courses for working adults and aspiring career professionals that do not require a substantial time or financial commitment. Such courses provide valuable professional development and personal enrichment opportunities and often come with a certificate of completion. There are also seminars and workshops that provided targeted training designed to provide participants new skills and valuable knowledge.<br/><br/>Earning a degree is worthwhile endeavor, but it isn't for everyone. It requires a substantial time commitment and financial investment, and at the end of the day it may not take you where you want to be. If a college degree is in you future, take the time to fully investigate all your options. Prepare and plan. Make sure once you're head down the path of earning a degree, you don't have any reason to look back or regret your decision.</p>
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


    