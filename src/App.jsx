import React,{ useState } from "react";
import questions from "./data/questions.js";
import Question from "./components-temp/Question.jsx";
const App = () => {

    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
   
    const handle = (selectedIndex) => {
        if(questions[current].options[selectedIndex] == questions[current].answer)
        {
           
            setScore(prev => prev + 1 );
        }
       
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
    style={{ backgroundImage: "url('./image.jpg')" }}>{ content }</div>
}
export default App;