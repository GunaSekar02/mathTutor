import {React,useEffect,useState} from 'react'
import axios from 'axios';
import "../css/Ques.css"
import { Link } from 'react-router-dom';
import proimg from '../img/problem.png'
import arrow from '../img/arrow-right.png'

function HC(props) {
  const [data,setdata]=useState([]);
  useEffect(()=>{
    axios
    .get("http://localhost:4000/fetch")
    .then((res)=>{
    console.log(res)
    setdata(res.data);
  })
  },[]);
  return (
    <div className='con' >
      {data.map((post)=>{
        const {id,problem,hc}=post;
        return (<> 
          {id===props.no &&
          <>
          <div className='pro'><img src={proimg} alt=''/><strong> {problem}</strong></div><br/>
          <div className='options' >
            {hc.concept1 && <div className='concept'><img src={arrow} alt=''/>{hc.concept1}</div>}
            {hc.concept2 && <div className='concept'><img src={arrow} alt=''/>{hc.concept2}</div>}<br/>
            <span>Select one of the option</span><br/><br/>
            {hc.options1 && <Link to="/"><button className='bn31' onClick={()=>{props.setno(0)}}><span class="bn31span">{hc.options1}</span></button><br/><br/></Link>}
            {hc.options2 && <Link to="/Ques"><button className='bn31' onClick={()=>{props.setno(props.no+1)}}><span class="bn31span">{hc.options2}</span></button><br/><br/></Link>}
            {hc.options3 && <Link to="/HS"><button className='bn31'><span class="bn31span">{hc.options3}</span></button><br/><br/></Link>} 
            {hc.options4 && <Link to="/HE"><button className='bn31'><span class="bn31span">{hc.options4}</span></button><br/></Link>} 
          </div>
          </> } 
          </>    
          )
      })}
    </div>
  )
}

export default HC;