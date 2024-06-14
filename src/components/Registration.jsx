import React from 'react'
import { useState } from 'react'

export default function Registration() {
  const [details,setDetails]=useState({
    name:'',
    email:''
  })
  const [submitted,setSubmitted]=useState(false)
  const formSubmit=(e)=>{
    e.preventDefault()
    console.log('data',details)
    setSubmitted(true)
    
    }
    const handleChange=(event)=>{
      const {name,value}=event.target
      setDetails({...details,[name]:value})
  }
  return (
    <div className="h-96  place-content-center relative bg-gradient-to-r from-cyan-500 to-blue-500 grid ">
      <div className='p-6  justify-center backdrop-invert bg-white/30 w-96  rounded-2xl' >

  <form action="" onSubmit={formSubmit} className='space-y-4' >
  <div >
    <input type="text" value={details.name} name='name' onChange={handleChange} placeholder="Enter Name ..." />
  </div>
  <div>
    <input type="text" value={details.email} name='email'onChange={handleChange} placeholder="Enter Email ..." />
  </div>
  <button type="submit"  className='w-48  rounded-full bg-gradient-to-r from-purple-500 to-pink-500'>Submit</button>
</form>
</div>
{submitted &&(<div>
  <h1>Hellow {details.name}</h1>
  <h1>{details.email}</h1>
</div>)}
    </div>
  )
}
