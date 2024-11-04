// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';




import EmployerProfileForm from './Component/EmployerProfileForm';


import JobsPage from './Pages/JobsPage';
import Footer from './Component/Footer';
import Application from './Component/Jobs/Application';
import PopupModal from "./Component/Jobs/PopupModal";

function App() {
  return (
    
      <div>
      <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/jobs-list" element={<><JobsPage/></>} />
      <Route path="/emp-prof" element={<EmployerProfileForm/>} />
      
      </Routes>
      </div>
  
  );
}

export default App;
