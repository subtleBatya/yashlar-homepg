import React, { useState } from 'react'
import sekizburc from '../../assets/gysga8burc.png'
import bina from '../../assets/bina.png'
import menu from '../../assets/menu_FILL0_wght400_GRAD0_opsz24.svg'

const Header = () => {
  const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };
  return (
      <div id='home' className=''>
        
       <div className='bg-blue-700 mb-12 header_top justify-between text-white font-bold pt-6 '>
       <div className='top container'>
       <div className="container">
          <div className=" sm:justify-center flex grid  grid-flow-col grid-cols-12  justify-center items-center mb-10">
          <div className="header_title col-span-5">
            TÜRKMENISTANYŇ <h5>ÝAŞLAR SYÝASATY</h5> </div>
          
            <div className=" hidden md:col-span-4 md:pl-12">Logo</div>
            <div className='md:hidden'>
                
                <button onClick={handleNav}><img className='w-8 absolute top-6 right-4 z-[99] md:hidden' src={menu} alt="" /></button>
         { nav ? (
             <div className='fixed w-full h-screen top-0 pt-12 bg-blue-600/90  z-20 space-y-4'>
             <a onClick={handleNav} href="#home" className=' items-center flex flex-row w-6 m-2 p4 cursor-pointer'>
                 <span className='pl-4'>Home</span>
             </a>
             <a onClick={handleNav} href="#news" className=' items-center flex flex-row w-6 m-2 p4 cursor-pointer'>
                 <span className='pl-4'>Tazelik</span>
             </a>
             <a onClick={handleNav} href="#makala" className=' items-center flex flex-row w-6 m-2 p4 cursor-pointer'>
                 <span className='pl-4'>Makala</span>
             </a>
             <a onClick={handleNav} href="#media" className=' items-center flex flex-row w-6 m-2 p4 cursor-pointer'>
                 <span className='pl-4'>Multimedia</span>
             </a>
             <a onClick={handleNav} href="#gallery" className=' items-center flex flex-row w-6 m-2 p4 cursor-pointer'>
                 <span className='pl-4'>Galereya</span>
             </a>
             
             
             </div>
         ) : (
             <div></div>
         )}  
             
             </div> 
            <div className='hidden md:block md:absolute md:right-16 md:justify-end md:col-span-2'>
              <div className="absolute right-0 bottom-6">18.04.24</div>  
              <div className="">AŞGABAT/TÜRKMENISTAN</div>
            </div>
           
          </div>

          <div className=' flex  container justify-between grid grid-flow-col grid-cols-8' >
            <div className="hidden mb-4 lg:flex flex gap-4 col-span-6 text-sm items-center ">
              <p>Bas sahypa</p>
              <p>yaslar syyasaty</p>
              <p>Bas sahypa</p>
              <p>Bas sahypa</p>
              <p>Bas sahypa</p>
              <p>Bas sahypa</p>
              <p>Bas sahypa</p>
            </div>
            <div>
              <button className=" hidden ml-12 bg-white text-blue-700 p-1 mb-2">Giris</button>
            </div>

          </div>

       </div>
       </div>
       
       
       
       </div>



       <div className="container relative header_main bg-gray-100 grid justify-around grid-cols-2">
        <div className=' pt-4 pl-4 pb-16 col-span-2 md:col-span-1 text-4xl text-yellow-600 mb-26'>
        "Ylymly-Bilimli,<div>Sagdyn Yashlar Dowletimizin
          </div> Kuwwatly Guyjudir,<div> Nurana Geljegidir"
            </div>
            <div className='absolute bottom-2 right-2 md:left-12 md:bottom-2 pt-12 text-xl'>Serdar 
            
             <div className='flex items-end gap-3'>Berdimuhamedow <img src={sekizburc} className='hidden md:block sekiz' alt="" /></div>
            
            </div>
            
           
        </div>
        <div className="hidden md:block main_img p-3 ml-12">
            <img src={bina} alt="" />
        </div>
        
       </div>
       <div className="container md:hidden main_img pt-10 pl-2 w-full">
            <img src={bina} alt="" />
        </div>
        
          
          

      </div>
      
      )
}

export default Header