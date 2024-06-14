import React, { useState } from 'react'
import Quiz from './Quiz'
import Questions from '../Question'

export default function QuizComponent() {
    console.log(Questions);
    const [id,setId]=useState(0)
    const [score,setScore]=useState(0)
  return (
    <div className="p-4 max-w-2xl mx-auto bg-gray-50 rounded-md shadow-lg">
        {Questions.map((items,index)=>(
          id>=index?(

            <Quiz key={index} id={id} score={score} setScore={setScore} setId={setId} item={items}/>
          ):('') 

        ))}
        <h2 className="text-xl font-bold text-center mt-6">
        {score}/{Questions.length}
      </h2>
    </div>
  )
}
