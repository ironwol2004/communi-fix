import React,{useState,useEffect} from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import Ideas from "./pages/ideas";
import Form from "./pages/form";
import About from "./pages/about";


function App() {
  const [posts,setPosts]=useEffect([]);
  async function getposts(){
      
  }
  useEffect(()=>{},[]);
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/ideas" element={<Ideas></Ideas>}></Route>
      <Route path="/form" element={<Form></Form>}></Route>
      <Route path="/about" element={<About></About>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
