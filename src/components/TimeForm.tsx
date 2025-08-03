import React, { useState } from 'react'
import {Input} from '@/components/ui/input'
import {Button} from '@/components/ui/button'

interface props{
   onAdd:(activity:string, hours:number) => void
}
const TimeForm = ({onAdd}:props) => {

    const[Activity,setActivity] = useState("");
    const[hours,sethours] = useState("")

    const handlesubmit = () => {
         if(!Activity || !hours)
         {
            alert("please Enter your data")
         }
         onAdd(Activity,Number(hours))
         setActivity("")
         sethours("")
    }

  return (
    <div className='space-y-3'>
      <Input 
      placeholder='Activity (eg. Sleep)'
      value={Activity} onChange={(e) => setActivity(e.target.value)}
      />
      <Input
        placeholder='Hours'
        type='number'
        value={hours}
        onChange={(e) => sethours(e.target.value)} 
      />
      <Button className='w-full' onClick={handlesubmit}>
        Add Activity
      </Button>
    </div>
    
  )
}

export default TimeForm
