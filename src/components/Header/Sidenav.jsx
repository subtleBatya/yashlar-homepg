import React, { useState } from 'react';
import gelin from '../../assets/sapak.png';
const Sidenav = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div id='' className=''>

        <a onClick={handleNav} href=""><img className='w-8 absolute top-6 right-4 z-[99] md:hidden' src={menu} alt="" /></a>
        { nav ? (
            <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20'>
            <a href="#main" className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p4 cursor-pointer'>
                <img src={menu} alt="" />
                <span className='pl-4'>Home</span>
            </a>
            </div>
        ) : (
            <div></div>
        )}  
            </div>
        );
    };
        
       
        



export default Sidenav
