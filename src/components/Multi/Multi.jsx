import React from "react";
import multi from '../../images/multicyzyk.png'
import kitap from '../../images/kitap.png'
import gelinler from '../../images/gelinler.png'
import slide from '../../images/slidecyzyk.png'
import left from '../../images/left.png'
import right from '../../images/right.png'
const Multi = () => {
    return (
        <div id='media' className='container '>
            <div className="flex mb-8 items-center justify-between font-bold space-x-2">
                <div className=" text-3xl">Multimedia</div>
                <div className=" text-gray-500  text-md"><img src={multi} alt="" /></div>
            </div>
            <div className="mb-12 suratlar grid md:grid-flow-col md:space-x-2 space-y-3 justify-between flex items-center">
                <div className="surat hidden md:block">
                    <img src={left} alt="" />
                </div>
                <div className="surat col-span-12">
                    <img className="w-full" src={kitap} alt="" />
                </div>
                <div className="surat col-span-12">
                    <img className="w-full" src={gelinler} alt="" />
                </div>
                <div className="surat hidden md:block">
                    <img src={right} alt="" />
                </div>
            </div>
            <div className="mt-32"></div>
        </div>
        
        )
  }
  
  export default Multi