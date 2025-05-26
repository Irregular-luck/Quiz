import React,{ useState } from "react";
import { useEffect } from "react";

import questions from "./data/questions.js";
import Question from "./components-temp/Question.jsx";
const App = () => {

    const [current, setCurrent] = useState(0);
    
    useEffect(() => {
      console.log("question_num updated",current)

    }, [current])

    const [score, setScore] = useState(0);
    useEffect(() => {
      console.log("Score updated",score)

    }, [score])
    


    const [showResult, setShowResult] = useState(false);
    useEffect(() => {
      console.log("result updated",showResult)

    }, [showResult])

    const handle = (selectedIndex) => {
        if(questions[current].options[selectedIndex] == questions[current].answer)
        {
            console.log("selectedIndex",selectedIndex)
            setScore(prev => prev + 1 );
        }
        console.log("selectedIndex",selectedIndex);
        console.log("current",current);
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
            <div>
                <h1>
                    Your Score
                    </h1>
                <p>
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






return <div>{ content }</div>
}
export default App;