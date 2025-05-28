import React from "react";



const Question = ({data,onAnswer,questionNumber,totalQuestions}) => {

 return (
     <div className="max-w-xl mx-auto mt-10 p-15 bg-white rounded-lg shadow-lg">
   <h3 className="text-lg font-semibold text-grey-700 mb-2">
    Question{questionNumber} of {totalQuestions}
    </h3>
     <p className="text-xl font-bold text-blue-800 mb-6">
    {data.question}
    </p>
    
<div className="flex flex-col gap-4">

{data.options.map((option,index) => (
    <button
        key={index}
        onClick={() => onAnswer(index)}
        className="bg-gradient-to-r from-indigo-500 to-pink-600 text-white py-2 px-4 rounded-lg hover:scale-105 transform transition duration-300 shadow-md hover:shadow-lg">
        {option}


    </button>
 ))}

</div>

    </div>

 );




};
export default Question;