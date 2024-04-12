import React, { useEffect, useState } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
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
        <form onSubmit={submitting}>
        <select name="city" value={cityfilter} onChange={(e)=>{setcityfilter(e.target.value)}}>City
            {cities.map((c)=>{return <option key={c} value={c}>{c}</option>})}
        </select>
        <select name="category" value={categoryfilter} onChange={(e)=>{setcategoryfilter(e.target.value)}}>Category
            {categories.map((c)=>{return <option key={c} value={c}>{c}</option>})}
        </select>
        <button type="submit">Apply filter</button>
        </form>
        <ul>
            {filteredposts.map((p)=>{return<div key={Math.random()}><h1>{p.name}</h1><h1>{p.city}</h1><h1>{p.category}</h1><h1>{p.content}</h1><span></span><span></span></div>})}
        </ul>
        <Footer></Footer>
    </div>
}
export default Ideas;