import React,{useState} from "react";
import Nav from "../../components/Navbar"
import Footer from "../../components/Footer"
import questions from "../../questions.json"

const Plans =() => {
    const [questionSelected, setquestionSelected] = useState(questions[0]);

    function getQuestionById(id) {
        for (let i = 0; i < questions.length; i++) {
          if (questions[i].question_id === id) {
            return questions[i];
          }
        }
        // if the question_id isn't found, return null or throw an error
        return null;
      }
    const [previous, setnewprevious] = useState('');   
    const handleAnswer = (event) => {
        const code =event.target.value;
        const prev = event.target.name;
        if (isNaN(code))
            {
                location.href = code;
            }
        else
            {    
                setnewprevious(prev)
                let id =getQuestionById(code)
                if (id)
                    setquestionSelected(id);              
                    }
            }
    
    const handlePrevious = () =>{
        setquestionSelected(getQuestionById(previous));
         setnewprevious('');
    }
    return(
    <div className="min-h-screen h-full bg-black">
        <Nav PageName={"Discover"}/>
        <div className="container py-20 mx-auto">
            <div className="text-center"> 
                <div className="lg:h-96 h-52 overflow-hidden m-2">
                    <img className="opacity-95 object-cover h-full w-full rounded-lg" src={questionSelected.questionImg}/>
                </div>
                {/*<Question text={""} description={""}/>*/}
                <h1 className="lg:text-4xl text-4xl font-medium title-font text-neutral-200 m-4">
                    {questionSelected.questionText}
                </h1>
                {/*description*/}
                <p className="text-neutral-200 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-neutral-400">
                    {questionSelected.questionDesc} 
                </p>
                <div className="flex mt-6 justify-center">
                    <div className="w-32 h-1 rounded-full bg-teal-600 inline-flex"></div>
                </div>
                
            </div>
            {/*answers*/}
            <center className="flex flex-wrap p-4 "> 
                {questionSelected.answers.map((i)=>(
                        <button className="w-full h-14 lg:w-80 mx-auto mt-2 font-semibold text-white bg-teal-700 border-0 py-2 px-8 focus:outline-none hover:bg-teal-900 rounded text-xl" 
                            onClick={handleAnswer} value={i.value} name={questionSelected.question_id}>
                            {i.answerText} 
                        </button> 
                        
                ))}                                       
            </center>
            <center className={`${previous ? '':'hidden'}`}>
                <button className="font-medium underline text-neutral-500 h-10" onClick={handlePrevious}>
                    ← prev
                </button>
            </center>
            <center className="flex flex-wrap pt-10 ">
            <p className="text-neutral-200 leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-neutral-400">
                    This quiz is made to guide you through our courses and other pages to help you find what you're looking for in the minimum required time
                </p>
            </center>   
        </div>
        <Footer/>
    </div>
    )
    }

export default Plans;