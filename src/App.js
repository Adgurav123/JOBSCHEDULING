 import logo from './logo.svg';
import './App.css';
import InterviewScheduling from './Components/InterviewScheduling';
import CandidateManagement from './Components/CandidateManagement';
import Login from './Components/Login';
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './Components/Register';
import HRRegistration from './Components/HRRegistration';
import HRLogin from './Components/HRLogin';

function App() {
  return (
    <div className="App">
      
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/HRRegistration' element={<HRRegistration/>}/>
          <Route path='/HRLogin' element={<HRLogin/>}/>
          <Route path="/Scheduling" element={<InterviewScheduling />} />
          <Route path="/Candidates" element={<CandidateManagement />} />
          <Route path="/Login" element={<Login />} />
          <Route path='/Register' element={<Register/>}/>
      </Routes>
     
    </div>  
   
  );
}

export default App;
