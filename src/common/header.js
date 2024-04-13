import React from "react";
import { Link } from "react-router-dom";
function Header(props){
    return <header className="flex justify-between bg-black py-3">
        <h1 className="text-xl font-bold text-white mx-5 select-none">Communi-<span className="text-red-600">Fix</span></h1>
        <ul className="flex gap-5 px-6">
        <Link to="/" className="text-lg text-white font-semibold hover:cursor-pointer hover:text-slate-500">Home</Link>
        <Link to="/ideas" className="text-lg text-white font-semibold hover:cursor-pointer hover:text-slate-500">Ideas</Link>
        <Link to="/form" className="text-lg text-white font-semibold hover:cursor-pointer hover:text-slate-500">Form</Link>
        <Link to="/about" className="text-lg text-white font-semibold hover:cursor-pointer hover:text-slate-500">About</Link>
        </ul></header>
}
export default Header;