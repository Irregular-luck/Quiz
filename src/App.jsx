import React,{ useEffect, useState } from "react";
import questions from "./data/questions.js";
import Question from "./components-temp/Question.jsx";
const App = () => {

    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);
    useEffect(() => {
      
    console.log("the answers are "+userAnswers)
      
      }
    , [userAnswers]);
    
    
    
    
    const handle = (selectedIndex) => {
        let selectedAnswer = questions[current].options[selectedIndex];
        if(selectedAnswer == questions[current].answer)
        {
           
            setScore(score+1);
        }
        setUserAnswers([...userAnswers,selectedAnswer]);
     
        const next = current + 1 

        if(next<questions.length)
        {
            setCurrent(next);
        }
        else{
            setShowResult(true);
        }
        
    };

    let content;

    if(showResult){
        content = (
            <div className="max-w-xl mx-auto mt-20 p-6 bg-white rounded-xl shadow-lg text-center">
                <h1 className="text-3xl font-bold text-green-600 mb-4 animate-fade">
                    Your Score
                    </h1>
                <p className="text-xl text-gray-700">
                    {score}/{questions.length}
                    </p>
                    <div>
                        <h2 className="text-2xl font-mono">Question & Answers</h2>
                        <div>
                        

                      
                       {questions.map((q,index)=>{
                        const userAnswer = userAnswers[index];
                        const isCorrect = userAnswer === q.answer;
                        return(
                            <div key={index}>
                    <p className="text-black">{index+1}.{q.question}</p>
                    <p> 
                          <span className="font-medium">Your Answer: </span>
                <span className={isCorrect ? "text-green-800" : "text-red-800"}>
                    {userAnswer}
                </span>
                    </p>

                    {!isCorrect?
                        (
                            <p>
                    <span className="font-medium text-gray-700">Correct Answer:</span>{' '}
                    <span className="text-green-700">{q.answer}</span>
                </p>
                        ):null}
                    
                
                  

                        </div>
                        )

                       })}
                        </div>
                    </div>
            </div>
        );

    }
    else{
        content = (

            <Question
            data={questions[current]}
        onAnswer = {handle}
        questionNumber = {current+1}
        totalQuestions = {questions.length}
            />

        );
    }






return <div className="min-h-screen bg-cover bg-center flex items-center justify-center px-4"
    style={{ backgroundImage: "url('./image3.jpg')" }}>{ content }</div>
}
export default App;