import './middiv.css';
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
         <span className='name'>Courses</span>
         <span className='micon'><BsThreeDots/></span>
         <span className="micon"><FaGraduationCap/></span>
         <span className='digit'>2</span>
        </div>
        <div className={`${index===1?'active2 up':'up'}`} onClick={()=>{setIndex(1)}}>
        <span className='name'>Courses Taken</span>
         <span className='micon'><BsThreeDots/></span>
         <span className="micon"><SiGoogleclassroom/></span>
         <span className='digit'>3</span>
        </div>
        <div className={`${index===2?'active2 up':'up'}`} onClick={()=>{setIndex(2)}}> 
        <span className='name'>Verified Courses</span>
         <span className='micon'><BsThreeDots/></span>
         <span className="micon"><MdOutlineVerified/></span>
         <span className='digit'>7</span></div>
        <div className={`${index===3?'active2 up':'up'}`} onClick={()=>{setIndex(3)}}> 
        <span className='name'>Not Verified Courses</span>
         <span className='micon'><BsThreeDots/></span>
         <span className="micon"><AiOutlineCloseCircle/></span>
         <span className='digit'>8</span></div>
      </div>
    </div>
  )
}
export default Middiv;