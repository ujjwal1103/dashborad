import './rightbar.css'
import {FiMessageCircle} from 'react-icons/fi';
import {FaCanadianMapleLeaf} from 'react-icons/fa';
import { BsFillBellFill,BsFillCalendar2DateFill,BsClock,BsCircleHalf ,BsCurrencyDollar} from "react-icons/bs";
import work from './work.jpg';
export default function Rightbar() {
  return (
    <div className='rightbar'>
      <div className="logo">
          <FiMessageCircle />
          <BsFillBellFill />
      </div>
      <div className="class">
      <img src={work} alt="" className='img' />
      <p>Ujjwal Lade</p>
      <h2>Upcomming classes</h2>
      </div>
      <div className="schedule">
        <h2><FaCanadianMapleLeaf  className='leaf'/> French</h2>
        <hr className='line'/>
       <ul>
         <li><BsFillCalendar2DateFill className='icon' /> 17 August 2022</li>
         <li><BsClock className='icon'/> 11:00 AM</li>
         <li><BsCircleHalf className='icon'/> 60 Minutes</li>
         <li><BsCurrencyDollar className='icon'/> $ 10</li>
       </ul>
       <button>Join Class</button>
      </div>
    </div>
  )
}
