import React,{useState} from "react";
import questions from "./src/questions.json";
 const Aaa = () =>{
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

const handleAnswer = (event) => {
    const code =event.target.value;
    if (isNaN(code))
        {
            location.href = code;
        }
    else
       { console.log(code)
            switch (code)
                {
                    case"4":
                        alert('9rayet el hena')
                    break;
                    case"5":
                        alert('bayen makch taa 5edma')
                    break;
                    default:
                        {   let id =getQuestionById(code)
                            if (id)
                                setquestionSelected(id);}               
                }
        }
        }



    return(<>
        <h1>{questionSelected.questionText}</h1> 
        <h1>{questionSelected.questionDesc}</h1>
        {questionSelected.answers.map((i)=>(
            <div>
                <button onClick={handleAnswer} value={i.value}>
                    {i.answerText} 
                </button> 
                <br/>
            </div>
        ))}
        
    </>)
;
 }
 export default Aaa;

