import React from 'react'
import {Pie} from "react-chartjs-2"
import {Chart as ChartJS, ArcElement, Tooltip,Legend} from "chart.js" 


ChartJS.register( ArcElement,Tooltip,Legend)

interface props{
  data: {Activity:string, hours:number}[]
}
const Timechart = ({data}:props) => {

  const piechart = {
    labels:data.map((d) => d.Activity),
    datasets:[
      {
        label:"Hours",
        data:data.map((d)=> d.hours),
        backgroundColor:[
          'yellow', 'pink', 'orange', 'skyblue', 'green',
        ],
        borderwidth:1,
      }
    ]
  }

  return <Pie data = {piechart}/>
}

export default Timechart
