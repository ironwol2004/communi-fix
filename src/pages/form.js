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
        <form onSubmit={submitting}>
            <label>Name</label>
            <input type="text" onChange={eventHandler} value={newpost.name} name="name"></input>
            <label>City</label>
            <input type="text" name="city" onChange={eventHandler} value={newpost.city}></input>
            <label>Category</label>
            <input type="text" name="category" value={newpost.category} onChange={eventHandler}></input>
            <label>Issue:</label>
            <input type="text" onChange={eventHandler} value={newpost.content} name="content"></input>
            <button type="submit">Add Post</button>
            
        </form>
        <Footer></Footer>
    </div>
}
export default Form;