import React from "react";
import galery from '../../images/gallery.png'
import volley from '../../images/volleyball.png'
import sapak from '../../images/sapak.png'
import basket from '../../images/basket.png'
import left from '../../images/left.png'
import right from '../../images/right.png'
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