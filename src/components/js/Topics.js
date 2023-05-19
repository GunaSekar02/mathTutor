import '../css/Topics.css'
import diff from '../img/diff.jpg'
import inte from '../img/inte.jpg'
import { Link } from 'react-router-dom'

export default function Topics(){

    return(
      <div className="container">
        
        <Link to='/ques' id="img">DIFFERENCIATION<img src={diff} alt=""/></Link>
        <Link to="/" id="img">INTEGRATION<img src={inte} alt=""/></Link>
    </div>
    )
}