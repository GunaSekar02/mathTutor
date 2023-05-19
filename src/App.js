import Navbar from './components/js/Navbar';
import {React,useState} from 'react';
// import Header from './components/js/Header'
import {
	BrowserRouter as Router,
	Routes,
	Route,
  // Navigate,
} from 'react-router-dom';
import Topics from './components/js/Topics';
import Ques from './components/js/Ques';
import SW from './components/js/SW';
import GM from './components/js/GM';
import HC from './components/js/HC';
import HS from './components/js/HS';
import HE from './components/js/HE';
import SCS from './components/js/SCS';
import Login from './components/js/Login';

function App() {
  const [no,setno]=useState(1);
  return (
    
    <>
    
    <Router>
    
        <Navbar/>
        
        <Routes>
        { <Route exact path="/" element={<Login/>}/> }
          <Route exact path="/" element={<Topics/>}/>
          <Route path="/ques" element={<Ques no={no} setno={setno} />}></Route>
          <Route path="/SW" element={<SW no={no} setno={setno}/>}></Route>
          <Route path="/GM" element={<GM no={no} setno={setno}/>}></Route>
          <Route path="/HC" element={<HC no={no} setno={setno}/>}></Route>
          <Route path="/HS" element={<HS no={no} setno={setno}/>}></Route>
          <Route path="/HE" element={<HE no={no} setno={setno}/>}></Route>
          <Route path="/SCS" element={<SCS no={no} setno={setno}/>}></Route>
      </Routes>
     </Router>
    
    
    </>
  );
}

export default App;
