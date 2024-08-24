import React, { useState, useEffect } from 'react';
import logo from '../assets/lifestories.png';
import { Link } from 'react-scroll';

import '../index.css'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
 
  const [isScrolled, setIsScrolled] = useState(false);


  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 33) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`fixed top-0 z-50 w-full h-[70px] flex justify-between items-center  px-4 text-black ${isScrolled ? "bg-white" : "bg-transparent"}`} >
      <div className="">
      <Link to="home" smooth={true} duration={500}>
        <img className='' src={logo} width={250} class alt="Logo" />
        </Link>
      </div>
      <div className="md:hidden" onClick={handleMenuClick}>
      {showMenu ? (
        <svg
            className="h-6 w-6 text-black cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
            fillRule="evenodd"
            d="M14.95 5.879l-1.414-1.414L10 8.586 6.464 5.05 5.05 6.464 8.586 10l-3.536 3.536 1.414 1.414L10 11.414l3.536 3.536 1.414-1.414L11.414 10l3.536-3.536z"
            clipRule="evenodd"
            />
        </svg>
        ) : (
        <svg
            className="h-6 w-6 text-black cursor-pointer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
        >
            <path
            fillRule="evenodd"
            d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
            />
        </svg>
        )}
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" offset={-50} smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="service" smooth={true} duration={500}>
            Services
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth={true} duration={500}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="client" smooth={true} duration={500}>
            Our Clients
          </Link>
        </li>
        <li>
          <Link to="testimonial" smooth={true} duration={500}>
            Testimonial
          </Link>
        </li>
        <li>
          <Link to="team" smooth={true} duration={500}>
            Team
          </Link>
        </li>
      
      </ul>
      <div className="hidden md:flex">
       
        <button  className="text-white">
          <Link to="contact" offset={-50} smooth={true} duration={700}>
            Contact Us
          </Link>
        </button>
      </div>
      <div
        className={`${
          showMenu ? "flex" : "hidden"
        } md:hidden flex flex-col bg-[#ffffff] text-orange-600 w-full absolute top-[70px] left-0 z-10`}
      >
      
       <ul className='py-10 flex flex-col gap-4 items-start justify-center font-bold tracking-widest px-4 text-xl shadow-xl'>
       <li>
          <Link to="home" offset={-100} smooth={true} duration={500} onClick={handleMenuClick}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" offset={-50} smooth={true} duration={500} onClick={handleMenuClick}>
            About
          </Link>
        </li>
        <li>
          <Link to="service" offset={-50} smooth={true} duration={500} onClick={handleMenuClick}>
            Services
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth={true} duration={500} onClick={handleMenuClick}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="client" smooth={true} duration={500} onClick={handleMenuClick}>
            Our Clients
          </Link>
        </li>
        <li>
          <Link to="testimonial" offset={-50} smooth={true} duration={500} onClick={handleMenuClick}>
            Testimonial
          </Link>
        </li>
        <li>
          <Link to="team" offset={-50} smooth={true} duration={500} onClick={handleMenuClick}>
            Team
          </Link>
        </li>
        <button  className="text-white text-base font-normal mx-2">
          <Link className='' to="contact" offset={-70} smooth={true} duration={700} onClick={handleMenuClick}>
            Contact Us
          </Link>
        </button>
       </ul>


      </div>
    
    </div>
  );
};

export default Navbar;