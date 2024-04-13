import React, { useEffect, useState } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
import { Link } from "react-router-dom";
import Card from "../common/card";
function Ideas(props){
    const [cityfilter,setcityfilter]=useState("any");
    const [categoryfilter,setcategoryfilter]=useState("any");
    const [filteredposts,setfilteredposts]=useState([]);
    var categories=["any"];
    var cities=["any"];
    const p=props.posts;
    async function f(){ 
    for(var i=0;i<p.length;i++){
        var a=true;
        var b=true;
        for(var j=i+1;j<p.length;j++){
            if(p[i].city===p[j].city){a=false;}
            if(p[i].category===p[j].category){
                b=false;
            }
        }
        if(a===true){cities=[...cities,p[i].city]}
        if(b===true){categories=[...categories,p[i].category]}
    }}
    f();
    function filtering(){
        var v=[];
        props.posts.forEach( p=> {if(cityfilter==="any" && categoryfilter==="any"){v=[...v,p];}
        else if(cityfilter==="any"){if(p.category===categoryfilter){v=[...v,p];}}
    else if(categoryfilter==="any"){if(p.city===cityfilter){v=[...v,p];}}
    else{if(p.category===categoryfilter && p.city===cityfilter){v=[...v,p];}}    
        });
setfilteredposts(v);
    }
    function submitting(event){
        event.preventDefault();
        filtering();
    }
    useEffect(()=>{
        filtering();
    },[]);
    return <div>
        <Header></Header>
        <div className="flex justify-center my-6">
            <div className="flex-col justify-start gap-5">
        <form  onSubmit={submitting} className="flex bg-slate-100 p-2 justify-center gap-12">
        <div className="flex gap-5 ">
        <label className="text-lg font-bold">City</label>
        <select name="city" className="border-solid border-black" value={cityfilter} onChange={(e)=>{setcityfilter(e.target.value)}}>
            {cities.map((c)=>{return <option key={c} value={c}>{c}</option>})}
        </select></div>
        <div className="flex gap-5">
        <label className="text-lg font-bold">Category</label>
        <select name="category" className="border-solid border-black" value={categoryfilter} onChange={(e)=>{setcategoryfilter(e.target.value)}}>Category
            {categories.map((c)=>{return <option key={c} value={c}>{c}</option>})}
        </select></div>
        <button type="submit" className="text-white w-36 bg-violet-600 text-lg rounded-3xl">Apply filter</button>
        </form>
        <div className="flex justify-center">
        <ul className="grid grid-cols-2 my-6">
            {filteredposts.map((p)=>{return<Card key={Math.random()} p={p}></Card>})}
        </ul></div></div></div>
        <Footer></Footer>
    </div>
}
export default Ideas;