import React from "react";
function Card(props){
    return <div className="flex justify-center">
    <div className="flex-col mx-4 my-4 gap-4 w-96 bg-violet-100 p-5 rounded-3xl hover:bg-violet-200">
        <div className=" flex col-span-full mb-4">
        <label className="w-30 text-lg font-bold">Name:</label>
        <p className="text-lg font-bold pl-5">{props.p.name}</p></div>
        <div className=" flex col-span-full mb-4">
        <label className="w-30 text-lg font-bold">City:</label>
        <p className="text-lg font-bold pl-5">{props.p.city}</p></div>
        <div className=" flex col-span-full mb-4">
        <label className="w-30 text-lg font-bold">Category:</label>
        <p className="text-lg font-bold pl-5">{props.p.category}</p></div>
        <div className=" flex col-span-full mb-4">
        <label className="w-30 text-lg font-bold">Issue:</label>
        <p className="text-lg font-bold pl-5">{props.p.content}</p></div>
        
        
    </div></div>
}
export default Card;