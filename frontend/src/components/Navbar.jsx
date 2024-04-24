import { useState } from 'react';
import logo from '../assets/logo.svg'


function Navbar() {
    const [toggle, setToggle] = useState()
    return (
     <nav className="relative p-6 container mx-auto font-sans">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-20">
                <img src={logo} alt="" />

                <div className="hidden space-x-8 font-bold lg:flex">
                    <a href="" className="text-grayishViolet hover:text-veryDarkViolet">Features</a>
                    <a href="" className="text-grayishViolet hover:text-veryDarkViolet">Pricing</a>
                    <a href="" className="text-grayishViolet hover:text-veryDarkViolet">Resources</a>
                </div>
            </div>

            {/* Right */}
            <div className="hidden flex items-center space-x-6 font-bold text-grayishViolet lg:flex">
                <div className="hover:text-veryDarkViolet cursor-pointer">Login</div>
                <a href="#" className="px-8  py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70 hover:bg-black">Sign Up</a>
            </div>
            {/* Hamburger */}
            <button id="menu-btn" onClick={()=>setToggle(!toggle)} className={toggle ? 'open block hamburger lg:hidden focus:outline-none' : 'block hamburger lg:hidden focus:outline-none'} type='button'>
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>
            
        </div>
            {/* Mobile menu */}
            <div id="menu" className={toggle ? "absolute p-6 rounded-lg bg-darkViolet left-6 right-6 z-100 top-20 lg:hidden" : "absolute hidden p-6 rounded-lg bg-darkViolet left-6 right-6 z-100 top-20 lg:hidden"}>
                <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-small">
                    <a href="#" className="w-full text-center">Features</a>
                    <a href="#" className="w-full text-center">Pricing</a>
                    <a href="#" className="w-full text-center">Resources</a>
                    <a href="#" className="w-full text-center pt-6 border-t border-gray-400">Login</a>
                    <a href="#" className="w-full text-center py-3 text-center rounded-full bg-cyan">Sign Up</a>
                </div>
            </div>
     </nav>
    )
  }
  
  export default Navbar;
  