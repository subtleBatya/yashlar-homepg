import React from "react";
import makalacyz from '../../images/makalacyz.png'
import makalarect from '../../images/makalarect.png'
import ucgelin from '../../images/ucgelin.png'
import gozel from '../../images/gozel.png'
const Makala = () => {
    return (
        <div id='makala' className='container '>
       <div className="flex mb-8 items-center justify-between font-bold">
        <div className=" text-3xl">Makalalar</div>
        <div className=" text-gray-500  text-md"><a href=""><p>Doly gor ></p></a></div>
       </div>
        <div className="makalalar grid grid-flow-col grid-cols-12 space-x-2 justify-evenly">
            <div className="makala bg-gray-200/50 col-span-12 mb-4 p-4 pr-12 md:col-span-4">
                <div className=" text-yellow-600 makala_top mb-12 flex items-center">
                <div className="pr-4">10.02.2024</div>
                <div className="pr-2"><img src={makalacyz} alt="" /> </div>
                <div><img src={makalarect} alt="" /></div>
                </div>
                
                <div className=" text-yellow-600 font-bold mb-4">Ady Familiyasy</div>
                <div className="fontbol font-bold text-xl">Turkmenistan Sanly Ulgamyn Mumkinciliklerine Dayanyar</div>
            </div>
            
            <div className="makala bg-gray-200/50 col-span-4 mb-4 p-4 pr-12 hidden md:block">
                <div className=" text-yellow-600 makala_top mb-12 flex items-center">
                <div className="pr-4">10.02.2024</div>
                <div className="pr-2"><img src={makalacyz} alt="" /> </div>
                <div><img src={makalarect} alt="" /></div>
                </div>
                
                <div className=" text-yellow-600 font-bold mb-4">Ady Familiyasy</div>
                <div className="fontbol font-bold text-xl">Turkmenistan Sanly Ulgamyn Mumkinciliklerine Dayanyar</div>
            </div>
           
            <div className="makala bg-gray-200/50 col-span-4 mb-4 p-4 pr-12 hidden md:block">
                <div className=" text-yellow-600 makala_top mb-12 flex items-center">
                <div className="pr-4">10.02.2024</div>
                <div className="pr-2"><img src={makalacyz} alt="" /> </div>
                <div><img src={makalarect} alt="" /></div>
                </div>
                
                <div className=" text-yellow-600 font-bold mb-4">Ady Familiyasy</div>
                <div className="fontbol font-bold text-xl">Turkmenistan Sanly Ulgamyn Mumkinciliklerine Dayanyar</div>
            </div>
            
        </div>
        <div className="makalalar  grid grid-flow-col grid-cols-12 space-x-2 justify-evenly">
            <div className="makala hidden md:block bg-gray-200/50 md:col-span-4 mb-12 p-4 pr-12">
                <div className=" text-yellow-600 makala_top mb-12 flex items-center">
                <div className="pr-4">10.02.2024</div>
                <div className="pr-2"><img src={makalacyz} alt="" /> </div>
                <div><img src={makalarect} alt="" /></div>
                </div>
                
                <div className=" text-yellow-600 font-bold mb-4">Ady Familiyasy</div>
                <div className="fontbol font-bold text-xl">Turkmenistan Sanly Ulgamyn Mumkinciliklerine Dayanyar</div>
            </div>
            
            <div className="makala hidden md:block bg-gray-200/50 col-span-4 mb-12 p-4 pr-12">
                <div className=" text-yellow-600 makala_top mb-12 flex items-center">
                <div className="pr-4">10.02.2024</div>
                <div className="pr-2"><img src={makalacyz} alt="" /> </div>
                <div><img src={makalarect} alt="" /></div>
                </div>
                
                <div className=" text-yellow-600 font-bold mb-4">Ady Familiyasy</div>
                <div className="fontbol font-bold text-xl">Turkmenistan Sanly Ulgamyn Mumkinciliklerine Dayanyar</div>
            </div>
           
            <div className="makala hidden md:block bg-gray-200/50 col-span-4 mb-12 p-4 pr-12">
                <div className=" text-yellow-600 makala_top mb-12 flex items-center">
                <div className="pr-4">10.02.2024</div>
                <div className="pr-2"><img src={makalacyz} alt="" /> </div>
                <div><img src={makalarect} alt="" /></div>
                </div>
                
                <div className=" text-yellow-600 font-bold mb-4">Ady Familiyasy</div>
                <div className=" font-bold text-xl">Turkmenistan Sanly Ulgamyn Mumkinciliklerine Dayanyar</div>
            </div>
            
        </div>
        <div className="mt-24"></div>
        </div>
        
        )
  }
  
  export default Makala