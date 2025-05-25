import React from "react";


const Question = ({data,onAnswer,questionNumber,totalQuestions}) => {

 return (
    <div>
    <h3>
    Question{questionNumber} of {totalQuestions}
    </h3>
    <p>
    {data.question}
    </p>
    
<div>

{data.options.map((option,index) => (
    <button
        key={index}
        onClick={() => onAnswer(index)}
        >
        {option}


    </button>
 ))}

</div>

    </div>

 );




};
export default Question;