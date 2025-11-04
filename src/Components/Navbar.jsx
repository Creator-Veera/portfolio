import React from 'react'
//import image1 from "https://ik.imagekit.io/faypstoj9/ImageKIT/693.jpg?updatedAt=1761470561697";
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="container mx-auto py-2">
  <div className="w-[90%] mx-auto flex items-center justify-between bg-gradient-to-r from-gray-500 to-gray-700 rounded-2xl shadow-2xl px-6 py-3">
    <div className="flex items-center gap-3">
      <img
        src="https://ik.imagekit.io/faypstoj9/ImageKIT/693.jpg?updatedAt=1761470561697"
        alt="logo"
        className="h-[70px] w-[70px] rounded-full border-4 border-white shadow-md"
      />
      <h1 className="text-white text-xl font-bold tracking-wide  md:text-2xl">MyPortfolio</h1>
    </div>
    <nav>
      <ul className="flex gap-8 text-white font-medium text-md hidden md:flex gap-8 text-white font-medium text-lg">
        
        <li className=" hidden md:block text-center text-md">
          <Link to='/'>
          Home
          </Link>
        </li>
        
        
        <li className="hidden md:block text-center text-md ">
          {/* <a href="#about">About</a> */}
          <Link to='/About'>
            About
          </Link>
        </li>
        <li className=" hidden md:block text-center text-md">
          <Link
          to='/projects'>
          Projects
          </Link>
        </li>
        <li className=" hidden md:block text-center text-md">
          <Link to='/Skills'>
            Skills
          </Link>
        </li>
        <li className=" hidden md:block text-center text-md">
          <Link to='/Contact'>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </div>
</div>
  )
}

export default Navbar