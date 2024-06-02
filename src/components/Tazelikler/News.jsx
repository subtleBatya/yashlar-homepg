import React from "react";
import uzynburc from '../../images/uzyn8burc.png'
import gysgaburc from '../../images/gysga8burc.png'
import ucgelin from '../../images/ucgelin.png'
import gozel from '../../images/gozel.png'
import left from '../../images/8burc.png'
import right from '../../images/8burc.png'
import news from '../../images/newscyz.png'

const News = () => {
    return (
        <div id='news' className='container '>
         <div className="mt-28 flex gap-3 justify-between items-center">
            <div className="text-3xl font-bold">
                Tazelikler
            </div>
            <div><img className="" src={gysgaburc} alt="" /></div> 
        </div>   
          
        <div className="mt-4 grid  grid-cols-12 md:grid-flow-col md:space-x-4 justify-between md:items-start">
            <div className="notes col-span-12 md:col-span-4">
                <div className="note mb-4 block font-bold">
                    <div>Bilim ulgamynyn kanuncylyk binyady - yas neslin ustunlikli os...</div>
                    <div className="p-2 pl-0 text-yellow-600">01.02.2024</div>
                    <div className="border-solid border-2 border-gray-100"></div>
                </div>
                <div className="hidden md:block note mb-4 block font-bold">
                    <div>Bilim ulgamynyn kanuncylyk binyady - yas neslin ustunlikli os...</div>
                    <div className="p-2 pl-0 text-yellow-600">01.02.2024</div>
                    <div className="border-solid border-2 border-gray-100"></div>
                </div>
                <div className=" hidden md:block note mb-4 block font-bold">
                    <div>Bilim ulgamynyn kanuncylyk binyady - yas neslin ustunlikli os...</div>
                    <div className="p-2 pl-0 text-yellow-600">01.02.2024</div>
                    <div className="border-solid border-2 border-gray-100"></div>
                </div>
                <div className=" hidden md:block note mb-4 block font-bold">
                    <div>Bilim ulgamynyn kanuncylyk binyady - yas neslin ustunlikli os...</div>
                    <div className="p-2 pl-0 text-yellow-600">01.02.2024</div>
                    <div className="border-solid border-2 border-gray-100"></div>
                </div>
                <div className=" hidden md:block note mb-4 block font-bold">
                    <div>Bilim ulgamynyn kanuncylyk binyady - yas neslin ustunlikli os...</div>
                    <div className="p-2 pl-0 text-yellow-600">01.02.2024</div>
                    <div className="border-solid border-2 border-gray-100"></div>
                </div>
            </div>
            
            <div className="md:col-span-8 relative col-span-12 mb-18">
                <img src={ucgelin} alt="" />
                <div className="absolute bottom-1 left-1 text-xs p-2 text-white font-bold bg-black/70">Bilim Ulgamynyn Kanuncylyk Binyady- <span><div>
                    Yas Neslin Ustunlikli Osmeginin Girewi
                    </div></span></div>
            </div>
        </div>

        <div className=" mt-8 suratlar grid md:grid-flow-col md:space-x-2 block mx-auto">
            <div className="surat md:col-span-4 col-span-12  font-bold text-sm ">
                <div><img src={gozel} alt="" /></div>
                <div className="p-2 pl-0">Bilim ulgamynyn kanuncylyk binyady - yas neslin ustunlikli os...</div>
                <div className="text-yellow-600">10.02.2024</div>
            </div>
            
            <div className="surat hidden md:block md:col-span-4 font-bold text-sm">
                <div><img src={gozel} alt="" /></div>
                <div className="p-2 pl-0">Bilim ulgamynyn kanuncylyk binyady - yas neslin ustunlikli os...</div>
                <div className="text-yellow-600">10.02.2024</div>
            </div>
            
            
            <div className="surat hidden md:block md:col-span-4 font-bold text-sm">
                <div><img src={gozel} alt="" /></div>
                <div className="p-2  pl-0">Bilim ulgamynyn kanuncylyk binyady - yas neslin ustunlikli os...</div>
                <div className="text-yellow-600">10.02.2024</div>
            </div>
            
        </div>

        <div className="flex mt-10 grid grid-cols-12 md:justify-items-center items-center md:space-x-2 relative">
            <div className=" col-span-4 md:col-span-4 flex items-center mr-1 ">
                <img className=" w-4 lg:block" src={left} alt="" />
                <img className=" " src={news} alt="" />
            </div>
            <div className="col-span-1 md:hidden"></div>
            <div className=" col-span-2 md:col-span-4 text-white font-bold md:py-2 md:px-4 bg-yellow-600/50 w-fit"><button className=" justify-center">Doly gor</button></div>
            <div className="col-span-1 md:hidden"></div>
            <div className=" col-span-4 md:col-span-4 flex items-center">
                <img className=" " src={news} alt="" />
                <img className=" w-4 " src={right} alt="" />
            </div>
        </div>
          
        
        <div className="mt-32 blanklar grid grid-flow-col  items-center gap-4">
            <div className="blank md:col-span-4 relative bg-green-100 w-full h-72 ">
                <div className="absolute bottom-3 left-2 text-green-700 font-bold text-3xl">
                <div >Yashlar <span><div>Syyasaty</div></span></div>
                </div>      
            </div>
            
            <div className="blank md:block md:col-span-4 relative bg-yellow-100 w-full h-72 hidden">
                <div className="absolute bottom-3 left-2 text-yellow-700 font-bold text-3xl">
                <div >Yashlar <span><div>Syyasaty</div></span></div>
                </div>      
            </div>
            
            <div className="blank md:block md:col-span-4 relative bg-blue-100  h-72 hidden">
                <div className="absolute bottom-3 left-2 text-blue-700 font-bold text-3xl">
                <div >Yashlar <span><div>Syyasaty</div></span></div>
                </div>      
            </div>
        </div>
        <div className="mt-32"></div>
  
  
        </div>
        
        )
  }
  
  export default News