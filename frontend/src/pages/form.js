import React,{useState} from "react";
import Header from "../common/header";
import Footer from "../common/footer";
function Form(props){
    const [newpost,setnewpost]=useState({
        name:"",
        city:"",
        category:"",
        content:""
    });
    function submitting(event){
        event.preventDefault();
        props.addnewpost(newpost);
        setnewpost({
            name:"",
            city:"",
            category:"",
            content:""
        })
    }
    function eventHandler(event){
    const { name, value } = event.target;
        setnewpost((prevState) => ({
        ...prevState,
        [name]: value,
    }));
    }
    return <div>
        <Header></Header>
        <div className="flex justify-center">
        <form onSubmit={submitting} className="flex-col mx-4 mb-24 my-4 gap-4 w-2/5 bg-violet-100 p-5 rounded-3xl">
            <div className=" flex col-span-full mb-4">
            <label className="w-2/5 text-lg font-bold">Name :</label>
            <input type="text"  onChange={eventHandler} className="w-3/5 p-2" value={newpost.name} name="name"></input></div>
            <div className=" flex col-span-full mb-4">
            <label className="w-2/5 text-lg font-bold">City :</label>
            <input type="text" className="w-3/5 p-2" name="city" onChange={eventHandler} value={newpost.city}></input></div>
            <div className=" flex col-span-full mb-4">
            <label className="w-2/5 text-lg font-bold">Category :</label>
            <input className="w-3/5 p-2" type="text" name="category" value={newpost.category} onChange={eventHandler}></input></div>
            <div className=" flex col-span-full mb-4">
            <label className="w-2/5 text-lg font-bold">Issue :</label>
            <textarea className="w-3/5 p-2 h-60" type="text" onChange={eventHandler} value={newpost.content} name="content"></textarea></div>
            <div className="flex justify-center gap-24">
            <button className="p-2 m-1 rounded-3xl bg-violet-600 text-white w-36 font-bold" type="submit">Add Post</button>
            <button className="p-2 m-1 rounded-3xl bg-violet-600 text-white w-36 font-bold" type="reset">Reset</button>
            </div>
            
        </form></div>
        <Footer></Footer>
    </div>
}
export default Form;