import React,{ useState } from "react";

import questions from "./data/questions.js";
import Question from "./components/Question.jsx";
const App = () => {

    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);

    const handle = (selectedIndex) => {
        if(selectedIndex === questions[current].answer)
        {
            setScore(score+1);
        }
        
        const next = current + 1;

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