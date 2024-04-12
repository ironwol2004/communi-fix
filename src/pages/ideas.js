import React, { useEffect, useState } from "react";
import Header from "../common/header";
import Footer from "../common/footer";
function Ideas(props){
    const [cityfilter,setcityfilter]=useState("any");
    const [categoryfilter,setcategoryfilter]=useState("any");
    const [filteredposts,setfilteredposts]=useState(props.posts);
    var categories=["any"];
    var cities=["any"];
    const p=props.posts;
    for(var i=0;i<p.length;i++){
        var a=true;
        var b=true;
        for(var j=i+1;j<p.length;j++){
            if(p[i].city===p[j].city){a=false;}
            if(p[i].category===p[j].category){
                b=false;
            }
        }
        if(a===true){cities.concat(p[i].city)}
        if(b===true){categories.concat(p[i].category)}
    }
    function filtering(){
        var v=props.posts.map((p)=>{if(cityfilter==="any" && categoryfilter==="any"){return p}
    else if(cityfilter==="any"){if(p.category===categoryfilter){return p}}
else if(categoryfilter==="any"){if(p.city===cityfilter){return p}}
else{if(p.category===categoryfilter && p.city===cityfilter){return p}}});
setfilteredposts(v);
    }
    useEffect(()=>{
        filtering();
    },[]);
    return <div>
        <Header></Header>
        <ul>
            {filteredposts.map((p)=>{return<div><h1>{p.name}</h1><h1>{p.city}</h1><h1>{p.category}</h1><h1>{p.content}</h1><span></span><span></span></div>})}
        </ul>
        <Footer></Footer>
    </div>
}
export default Ideas;