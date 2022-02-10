import React from 'react'
import './c2.css';
export default function C2() {
  return (
    <div className='secdiv'>
      <div className="d1 card">
         <h3 className='h3'>My Earning</h3>
         <div className="pr">
         <p className='p1'>
           <span className='s1'>Today Earning</span><br />
           <span className='s2'>$1,000</span>
         </p>
         <p className='p2'>
           <span className='s3'>Pending</span><br />
           <span className='s4'>$60</span>
         </p>
         </div>
         <div className="btnn">
           <button>Withdraw</button>
         </div>
      </div>
      <div className="d2 card">
        <h3 className='h3'>Session Overview</h3>
        <table className="down">
          <tr >
            <td>Scheduled</td>
            <td>Upcomming</td>
            <td>Cancled</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>0</td>
          </tr>
        </table>
        </div>
      <div className="d3 card">
        <h3 className='h3'>My Students</h3>
        </div>
    </div>
  )
}
