
import React from 'react'
import { NavLink } from 'react-router-dom'

function YashlarBarada() {
    return (
        <div>
            <div className="container">
                {/* <div className='flex items-center my-10 gap-3'>
                    <NavLink to={`/ecohub/`} className=' text-[#CFCFCF] cursor-pointer'>Baş sahypa</NavLink>
                    <svg xmlns="http://www.w3.org/2000/svg" width="9" height="15" viewBox="0 0 9 15" fill="none">
                        <path d="M1 1L7 7.5L1 14" stroke="#CFCFCF" stroke-width="1.5" />
                    </svg>
                    <div className=' text-[#CFCFCF]'>Yaslar barada</div>
                </div> */}
                {/* <div className='text-[40px] font-semibold my-10 w-1/3'>
                    Ýaşlar üçin Mümkinçilikler
                </div>
                <div className=" grid grid-cols-3 gap-3">
                    <NavLink to={`/yaslar/detail`} className='bg-[#fafafa] cursor-pointer w-full aspect-[4/3] flex justify-between flex-col  p-5 text-black font-semibold aspect-video'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="41" viewBox="0 0 45 41" fill="none">
                            <path d="M44.9995 12.3255V14.0686C44.9692 14.1798 44.9463 14.2929 44.9312 14.4071C44.75 16.7763 43.9811 18.9645 42.8396 21.0342C41.2897 23.8452 39.2323 26.2804 36.9886 28.56C32.9165 32.6994 28.506 36.4784 24.1041 40.2641C22.9575 41.2491 22.0176 41.2524 20.871 40.2523C17.3338 37.1638 13.7897 34.0821 10.2764 30.9648C7.81908 28.7834 5.51219 26.4547 3.58293 23.7859C1.464 20.8548 0.165293 17.6326 0.0132085 13.9975C-0.14742 10.0578 1.05046 6.60205 3.89735 3.81818C8.05661 -0.243407 14.5074 -1.13526 19.6612 1.60123C20.6489 2.12585 21.5716 2.76893 22.5662 3.38494C22.655 3.31894 22.8037 3.20556 22.9558 3.09387C27.614 -0.30094 32.6021 -1.01003 37.8567 1.52169C41.2743 3.16663 43.4496 5.94036 44.4732 9.56363C44.7278 10.4606 44.8287 11.4032 44.9995 12.3255ZM25.2097 16.4379V11.0698H19.762V16.4734H14.3365V21.8753H19.7723V27.24H25.2268V21.8618H30.6403V16.4379H25.2097Z" fill="#E1E1E1" />
                        </svg>
                        <div className='w-1/2  text-[30px]'>
                            Makalalar
                        </div>
                    </NavLink>
                </div> */}
            <div className=' text-[#CFCFCF] gap-3 my-10 flex items-center'>
              <NavLink to={`/yashlar-homepg/`}>Bas sahypa</NavLink>
              <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7.5L1 14" stroke="#CFCFCF" stroke-width="1.5"/>
              </svg>
              <NavLink to={`/vacancy`}>Wakansiya</NavLink>
              <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L7 7.5L1 14" stroke="#CFCFCF" stroke-width="1.5"/>
              </svg>
              <div>Name_ Wakansiya</div>
            </div>

            <div className=" flex">
        
          <div className=" w-3/4 mx-auto items-center align-middle">
            
              <div className="flex items-center">
                  <span className="textGold text-3xl font-bold pr-6">Yas Telekeciler Gozlenilyar</span>
          
              </div>
              <div className='flex text-sm textGray  gap-6 mt-10'>
                <div>11.12.2024</div>
                <div className='flex items-center gap-2'>
                  <svg width="21" height="12" viewBox="0 0 21 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 6.15457V5.84646C2.33242 2.05461 5.84227 0.000513619 10.5 9.6238e-08C15.1577 -0.000513426 18.6681 2.05409 21 5.84646V6.15457C18.6681 9.94642 15.1583 12.0015 10.5 12C5.84172 11.9985 2.33187 9.94694 0 6.15457ZM6.30383 5.99384C6.30102 6.77343 6.54454 7.53628 7.0036 8.18586C7.46265 8.83544 8.1166 9.34255 8.88268 9.64302C9.64876 9.94349 10.4926 10.0238 11.3073 9.87384C12.122 9.72385 12.871 9.3503 13.4596 8.80045C14.0481 8.2506 14.4497 7.54916 14.6136 6.7849C14.7775 6.02065 14.6962 5.22792 14.3801 4.50704C14.064 3.78616 13.5273 3.16952 12.8379 2.73517C12.1485 2.30081 11.3373 2.06825 10.5071 2.06693C9.95642 2.06524 9.41077 2.16552 8.90139 2.36202C8.392 2.55852 7.92887 2.84739 7.53848 3.21211C7.14809 3.57683 6.8381 4.01025 6.62625 4.48756C6.41439 4.96488 6.30483 5.47673 6.30383 5.99384Z" fill="#CFCFCF"/>
                  <path d="M10.5071 3.37795C11.0593 3.38019 11.5983 3.53607 12.0562 3.82589C12.5141 4.11571 12.8701 4.52647 13.0795 5.00626C13.2888 5.48605 13.342 6.01334 13.2323 6.5215C13.1226 7.02966 12.8549 7.49589 12.4632 7.86126C12.0714 8.22663 11.5731 8.47476 11.0312 8.57428C10.4893 8.67381 9.9281 8.62027 9.4186 8.42042C8.90909 8.22057 8.4741 7.88339 8.16859 7.45149C7.86309 7.01958 7.70079 6.51233 7.70219 5.99384C7.70196 5.64874 7.7745 5.30702 7.91562 4.98837C8.05673 4.66973 8.26364 4.38047 8.5244 4.13729C8.78515 3.8941 9.09461 3.7018 9.43491 3.57148C9.7752 3.44115 10.1396 3.37538 10.5071 3.37795Z" fill="#CFCFCF"/>
                  </svg>
                  <div className=''>116</div>
                </div>
                
              </div>
              <div className="mt-5 text-left tracking-tight line-clamp-4 font-semibold">«Ýaşlar barada döwlet syýasaty hakynda» Türkmenistanyň kanuny ýaşlar barada döwlet syýasatynyň maksatlaryny, wezipelerini, ýörelgelerini we esasy ugurlaryny kesgitleýär, şeýle hem ýaşlaryň hukuklarynyň we azatlyklarynyň üpjün edilmeginde hem-de olaryň kämil şahsyýetler hökmünde kemala gelmeginde döwlet goldawynyň ýokarlandyrylmagyna gönükdirilendir.</div>
              <div className="mt-8 aspect-[5/3] bg-[#D9D9D9] "></div>
              <div className="mt-8 text-left  line-clamp-4 font-semibold">«Ýaşlar barada döwlet syýasaty hakynda» Türkmenistanyň kanuny ýaşlar barada döwlet syýasatynyň maksatlaryny, wezipelerini, ýörelgelerini we esasy ugurlaryny kesgitleýär, şeýle hem ýaşlaryň hukuklarynyň we azatlyklarynyň üpjün edilmeginde hem-de olaryň kämil şahsyýetler hökmünde kemala gelmeginde döwlet goldawynyň ýokarlandyrylmagyna gönükdirilendir.</div>        
              <div className="text-xl font-bold mt-32 mb-10">Wakansiya Barada Habarlasmak ucin:</div>
              <div className="space-y-8">
              <div className="flex flex-col font-semibold">
                <div className="textGray">Email</div>
                <div className="">example@gmail.com</div>
              </div>
              <div className="flex flex-col font-semibold">
                <div className="textGray">Telefon</div>
                <div className="">+993 63 000000</div>
              </div>
              <div className="flex flex-col font-semibold">
                <div className="textGray">Yerlesyan yeri</div>
                <div className="">Asg saher, K-dag etr,</div>
              </div>
              </div>
              
          </div>
      </div>
            
            </div>
        </div>
    )
}

export default YashlarBarada
