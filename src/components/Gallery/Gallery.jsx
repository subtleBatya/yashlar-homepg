import React from "react";
import galery from '../../assets/galery.png'
import volley from '../../assets/volleyball.png'
import sapak from '../../assets/sapak.png'
import basket from '../../assets/basket.png'
import left from '../../assets/left.png'
import right from '../../assets/right.png'
const Gallery = () => {
    return (
        <div id='gallery' className='container '>
            <div className="flex mb-8 items-center justify-between space-x-2 font-bold">
                <div className=" text-3xl">Galereya</div>
                <div className=" text-gray-500  text-md"><img src={galery} alt="" /></div>
            </div>
            <div className="mb-12  suratlar grid md:grid-flow-col md:space-x-2 space-y-3 justify-between flex items-center">
                <div className="surat hidden md:block">
                    <img src={left} alt="" />
                </div>
                <div className="surat col-span-12">
                    <img className=" w-full" src={volley} alt="" />
                </div>
                <div className="surat col-span-12">
                    <img className=" w-full" src={sapak} alt="" />
                </div>
                <div className="surat col-span-12">
                    <img className=" w-full" src={basket} alt="" />
                </div>
                <div className="surat hidden md:block">
                    <img className=" w-full" src={right} alt="" />
                </div>
            </div>
            
        </div>
        
        )
  }
  
  export default Gallery