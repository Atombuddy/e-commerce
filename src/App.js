import { Button } from '@material-ui/core';

import React,{useState} from 'react';
import './App.css';
import {Container} from "@material-ui/core"
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar/Navbar.js"
import Auth from "./pages/Auth/Auth.js"
import Search from './pages/Search/Search.js';
import Checkout from './pages/Checkout/Checkout.js';
import RazorpayCheck from './pages/Razorpay/Razorpay.js';

function App() {

  const [darkMode,setDarkMode]=useState(false)


  return (
    <BrowserRouter>
    <div className='modeButton'>
      <Button onClick={()=>setDarkMode(!darkMode)} >{darkMode?<span style={{ color:"yellow" }}>☀︎</span>:<span style={{ color: "#c96dfd"  }}>☽</span>}</Button>
    </div>
    <div  className={`${darkMode?"dark-mode":"light-mode"}`} >
    <Container maxwidth="lg">
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth/>}/>
            <Route path="/search" element={<Search/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/razorpay" element={<RazorpayCheck/>} />

        </Routes>
    </Container>
    </div>
</BrowserRouter>
        
  );
}

export default App;
