import './middiv.css';
import C2 from './C2'
import C3 from './C3'
import { useState } from 'react'
import {FaGraduationCap,FaAdversal} from 'react-icons/fa';
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineVerified } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";
import { AiOutlineCloseCircle } from "react-icons/ai";

 function Middiv(){
  const [index,setIndex] = useState(0);
      
  return (
    <div className='middiv'>
      <div className="updiv">
        <div className={`${index===0?'active2 up':'up'}`} onClick={()=>{setIndex(0)}}>
          <table> 
            <tr>
              <td><span className='name'>Courses</span></td>
              <td><span className='micon'><BsThreeDots/></span></td>
            </tr>
            <tr>
              <td><span className="micon2"><FaGraduationCap/></span></td>
              <td><span className='digit'>2</span></td>
            </tr>
          </table>
        </div>
        <div className={`${index===1?'active2 up':'up'}`} onClick={()=>{setIndex(1)}}>
        <table> 
            <tr>
              <td> <span className='name'>Courses Taken</span></td>
              <td><span className='micon'><BsThreeDots/></span></td>
            </tr>
            <tr>
              <td><span className="micon2"><SiGoogleclassroom/></span></td>
              <td><span className='digit'>3</span></td>
            </tr>
          </table>
       
        </div>
        <div className={`${index===2?'active2 up':'up'}`} onClick={()=>{setIndex(2)}}> 
        <table> 
            <tr>
              <td> <span className='name'>Verified Courses</span></td>
              <td><span className='micon'><BsThreeDots/></span></td>
            </tr>
            <tr>
              <td><span className="micon2"><MdOutlineVerified/></span></td>
              <td><span className='digit'>7</span></td>
            </tr>
          </table>
       </div>
        <div className={`${index===3?'active2 up':'up'}`} onClick={()=>{setIndex(3)}}> 
          <table> 
            <tr>
              <td> <span className='name'>Not-Verified Courses</span></td>
              <td><span className='micon'><BsThreeDots/></span></td>
            </tr>
            <tr>
              <td><span className="micon2"><AiOutlineCloseCircle/></span></td>
              <td><span className='digit'>8</span></td>
            </tr>
          </table>
       </div>
      </div>
      <div>
        <C2 />
        <C3 />
        
      </div>
    </div>
  )
}
export default Middiv;