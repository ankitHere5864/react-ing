import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register'
import Login from './Log'
import Nav from './Nav';

const App = () => {
  return (
    <Router> 
        
      <Routes>
        <Route path='/' element={<Nav/>}></Route>
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
};
export default App;