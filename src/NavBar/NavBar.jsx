import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="w-full h-20 flex gap-3 justify-evenly items-center bg-blue-100">

      <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
        <Link to={"/Home"}> Home </Link>
      </span>

      <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
        <Link to={"/About"}> About </Link>
      </span>

      <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
        <Link to={"/Contact"}> Contact </Link>
      </span>

      <span className="px-4 py-1.5 bg-blue-500 text-white rounded">
        <Link to={"/Service"}> Service </Link>
      </span>
      
    </div>
  );
}

export default NavBar