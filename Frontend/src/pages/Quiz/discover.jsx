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
                switch (code)
                    {
                        case"4":
                            alert('9rayet el hena')
                        break;
                        case"5":
                            alert('bayen makch taa 5edma')
                        break;
                        default:
                            {   setnewprevious(prev)
                                let id =getQuestionById(code)
                                if (id)
                                    setquestionSelected(id);}               
                    }
            }
    }
    const handlePrevious = () =>{
        setquestionSelected(getQuestionById(previous));
         setnewprevious('');
    }
    return(
    <div className="min-h-screen h-full bg-black">
        <Nav PageName={"Discover"}/>
        <div className="container p-20 mx-auto">
            <div className="text-center"> 
                <div className="h-96 overflow-hidden p-14">
                    <img className="object-cover object-center h-full w-full rounded-lg" src={questionSelected.questionImg}/>
                </div>
                {/*<Question text={""} description={""}/>*/}
                <h1 className="lg:text-4xl text-4xl font-medium title-font text-neutral-200 mb-4">
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
            <center className="flex flex-wrap py-4 "> 
                {questionSelected.answers.map((i)=>(
                        <button className="w-full h-14 lg:w-80 lg:h-20 mx-auto mt-2 font-semibold text-white bg-teal-700 border-0 py-2 px-8 focus:outline-none hover:bg-teal-900 rounded text-xl" 
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
        </div>
        <Footer/>
    </div>
    )
    }

export default Plans;