import React, {  useState } from 'react'
// import QuizComponent from './QuizComponent'

export default function Quiz({item,id,setId,score,setScore}) {
    const [ans,setAns]=useState('')
    const [click,setClick]=useState(false)
    console.log(item);
    function handleAns(opt){
        setAns(opt)
        setClick(true)
        if(item.answer===opt){
          setScore(score+1)
        }
        setId(id+1)
    }
  return (
    <div className='m-8 p-8 bg-slate-700 shadow-md rounded-md'>
      <h1 className="text-xl font-bold mb-4">{item.question}</h1>
      <ul className="list-disc list-inside mb-4">

      {item.options.map((opt,index)=>(
        <li key={index} onClick={() => handleAns(opt)} 
        className="list-none cursor-pointer p-2 bg-gray-100 rounded-md mb-2 hover:bg-gray-200"
        >{opt}</li>
      ))}
      </ul>
      {click && (
        <div
          className={`p-2 rounded-md ${
            item.answer !== ans ? 'text-red-500' : 'text-green-500'
          }`}
        >
          {item.answer !== ans
            ? `${ans} Your Answer is Wrong, correct answer is ${item.answer}`
            : `${ans} Your Answer is Correct`}
        </div>
      )}
    </div>
  )
}
