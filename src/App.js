import './App.css';

import BoardList from "./routes/BoardList";
import Home from './layout/Home';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import React from "react";
import BoardDetail from './routes/BoardDetail';
import BoardWrite from './routes/BoardWrite';
import BoardUpdate from './routes/BoardUpdate';

function App() {
  return (
    <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/board" element={<BoardList/>}/>
      <Route path="/board/:idx" element={<BoardDetail/>}/>
      <Route path='/write' element={<BoardWrite/>}/>
      <Route path="/update/:idx" element={<BoardUpdate />} />
    </Routes>
  );
}

export default App;
