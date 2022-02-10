import React from 'react'
import Chart from './Chart.jsx'
import './c3.css'
export default function C3() {
  
  
  return (
    <div className='thdiv'>
       <div className="topnav"> 
         <ul>
           <li>Course Impression</li>
           <li>Persession Earning</li>
           <li>Top Student</li>
         </ul>
         <div className="dropdown">
         <select name="week" id="cars" >
            <option value="week" selected 
            disabled>Week</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
            <option value="sunday">Sunday</option>
           
          </select>
         </div>
        
       
       </div>
       <div className="chart">
       <Chart />
        </div>
    </div>
  )
}
