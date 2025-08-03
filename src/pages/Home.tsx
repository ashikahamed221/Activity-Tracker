import React, { useState } from 'react'
import TimeForm from '@/components/TimeForm'
import { Activity } from 'lucide-react';
import Timechart from '@/components/Timechart';
const Home = () => {
  const [data,setdata] = useState<{Activity:string; hours:number}[]>([])

  const handleAdd = (Activity:string, hours:number) => {
    console.log(Activity,hours)
    
    setdata((prev) => [...prev,{Activity,hours}])
    console.log(data)
  }

  return (
    <div className='max-w-md mx-auto p-6 mt-10 rounded shadow space-y-4 bg-white'>
      <h1 className='text-2xl font-bold'>Time Tracker</h1>
      <TimeForm onAdd={handleAdd}/>
      <Timechart data = {data}/>
    </div>
  )
}

export default Home
