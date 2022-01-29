import './sidebar.css'
import {useState} from 'react'

export default function Sidebar() {
  
  const[index,setIndex]= useState(0);
   
  return (
    <div className='side_bar'>
      <h1>NEUROLINGUA</h1>
      <div className="side_bar_lst">
			<ul>
				<li className={`${index===0?'active':null}`} onClick = {()=>{setIndex(0)}}>
					<span className="top_curve"></span>
					<a href="#">
						<span className="icon"><i className="fas fa-home"></i></span>
						<span className="item">DASHBOARD</span></a>
					<span className="bottom_curve"></span>
				</li>
				<li className={`${index===1?'active':null}`} onClick = {()=>{setIndex(1)}}>
					<span className="top_curve"></span>
					<a href="#">
						<span className="icon"><i className="fas fa-fighter-jet"></i></span>
						<span className="item">FLIGHTS</span></a>
					<span className="bottom_curve"></span>
				</li>
				<li className={`${index===2?'active':null}`} onClick = {()=>{setIndex(2)}}>
					<span className="top_curve"></span>
					<a href="#">
						<span className="icon"><i className="fas fa-wallet"></i></span>
						<span className="item">WALLET</span></a>
					<span className="bottom_curve"></span>
				</li>
				<li className={`${index===3?'active':null}`} onClick = {()=>{setIndex(3)}}>
					<span className="top_curve"></span>
					<a href="#">
						<span className="icon"><i className="far fa-newspaper"></i></span>
						<span className="item">REPORTS</span></a>
					<span className="bottom_curve"></span>
				</li>
				<li className={`${index===4?'active':null}`} onClick = {()=>{setIndex(4)}}>
					<span className="top_curve"></span>
					<a href="#">
						<span className="icon"><i className="fas fa-chart-pie"></i></span>
						<span className="item">STATISTICS</span></a>
					<span className="bottom_curve"></span>
				</li>
				<li className={`${index===5?'active':null}`}onClick = {()=>{setIndex(5)}}>
					<span className="top_curve"></span>
					<a href="#">
						<span className="icon"><i className="fas fa-cog"></i></span>
						<span className="item">SETTINGS</span></a>
					<span className="bottom_curve"></span>
				</li>
				<li className={`${index===6?'active':null}`} onClick = {()=>{setIndex(6)}}>
					<span className="top_curve"></span>
					<a href="#">
						<span className="icon"><i className="fas fa-chart-pie"></i></span>
						<span className="item">STATISTICS</span></a>
					<span className="bottom_curve"></span>
				</li>
				<li className={`${index===7?'active':null}`} onClick = {()=>{setIndex(7)}}>
					<span className="top_curve"></span>
					<a href="#">
						<span className="icon"><i className="fas fa-cog"></i></span>
						<span className="item">SETTINGS</span></a>
					<span className="bottom_curve"></span>
				</li>
			</ul>
		</div>
        <div className="btn">
            <button>Login</button>
        </div>
    </div>
    
  )
}
