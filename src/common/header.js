import React from "react";
import { Link } from "react-router-dom";
function Header(props){
    return <header className="flex justify-between bg-purple-950 py-5">
        <h1 className="text-3xl font-bold text-white mx-5">Communi-Fix</h1>
        <ul className="flex gap-5 px-6">
        <Link to="/" className="text-lg text-white font-semibold">Home</Link>
        <Link to="/ideas" className="text-lg text-white font-semibold">Ideas</Link>
        <Link to="/form" className="text-lg text-white font-semibold">Form</Link>
        <Link to="/about" className="text-lg text-white font-semibold">About</Link>
        </ul></header>
}
export default Header;