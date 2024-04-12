import React,{useState,useEffect} from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/home";
import Ideas from "./pages/ideas";
import Form from "./pages/form";
import About from "./pages/about";
import axios from "axios";


function App() {
  const [posts,setPosts]=useState([]);
  async function getposts(){
      const r=await axios.get("http://localhost:5000/getposts");
      setPosts(r.data);
  }
  useEffect(()=>{getposts()},[]);
  async function addnewpost(newpost){
    const r = await axios.post("http://localhost:5000/addnewpost",{post:newpost});
    getposts();
    alert(r.data);
  }
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/ideas" element={<Ideas posts={posts}></Ideas>}></Route>
      <Route path="/form" element={<Form addnewpost={addnewpost}></Form>}></Route>
      <Route path="/about" element={<About></About>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
