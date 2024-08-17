import React from "react";
import { Route, Routes } from "react-router-dom";  
import Home from "./Screen/Home";      
import CreateUser from "./Screen/Createuser";  
   
const App = () => {  
  return (          
    <Routes>
      <Route path="/" element={<Home />} />          
      <Route path="createUser" element={<CreateUser/>} />      
    </Routes>       
  );
};

export default App;