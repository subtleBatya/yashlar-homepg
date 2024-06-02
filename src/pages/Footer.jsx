import React from 'react'
import { NavLink } from 'react-router-dom'
import { t } from 'i18next'


function Footer() {
    return (
        <div className=' bg-blue-700 mt-20'>
            <div className="container text-white py-10">
                <div className="flex">
                    <div className="w-3/5 flex ">
                        <ul className='flex w-1/2 flex-col  items-left gap-3 font-semibold'>
                            <li className='cursor-pointer text-left' >
                                {t('homepage')}
                            </li>
                            <li className='cursor-pointer text-left'>
                                {t('youthPolicy')}
                            </li>
                            <li className='cursor-pointer text-left'>
                                {t('news')}
                            </li>
                            <NavLink to={`/mumkincilik`} className='cursor-pointer text-left'>
                                {t('possibilities')}
                            </NavLink>
                            <li className='cursor-pointer text-left'>
                                {t('library')}
                            </li>
                            <li className='cursor-pointer text-left'>
                                {t('culture')}
                            </li>

                        </ul>
                        <ul className='flex w-1/2 flex-col gap-3 items-left  font-semibold'>
                            <NavLink to={`vacancy`} className='cursor-pointer text-left' >
                                {t('vacancy')}
                            </NavLink>
                            <li className='cursor-pointer text-left'>
                                {t('culture')}
                            </li>
                            <li className='cursor-pointer text-left'>
                                {t('ds')}
                            </li>
                            <li className='cursor-pointer text-left'>
                            {t('aboutUs')}
                            </li >
                        </ul>
                    </div>
                    <div className="w-2/5">
                        <div className="flex items-center justify-between ">
                            <div className=" flex flex-col gap-3">
                                <span className='text-[#FFFFFF]  opacity-50 text-xs'>{t('communicate')}</span>
                                <div className='text-lg'>
                                    +993 (63) 060606
                                </div>
                            </div>
                            <div className=" flex flex-col text-right gap-3">
                                <div className='text-left'>

                                    <span className='text-[#FFFFFF]  opacity-50 text-xs'>{t('email')}</span>
                                    <div className='text-lg'>
                                        youth@tm.com
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-left flex flex-col gap-2 w-2/3 mt-20'>
                            <span className='text-[#FFFFFF]  opacity-50 text-xs'>{t('notification')}</span>
                            <div className='flex justify-center  bg-white  items-center'>
                                <span className='text-[#C5C5C5] p-3 text-xs font-semibold'>{t('email')}</span>
                                <input className='w-2/3 h-full outline-none text-xs text-black' type="text" name="" id="" />
                                <span className='textBlue p-3 text-xs cursor-pointer font-semibold'>{t('join')}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className='w-full border-[1px] my-10 border-white' />
                <div className="flex text-sm">
                    <div className="w-3/5">
                        <div>{t('tmYP')}</div>
                    </div>
                    <div className="w-2/5 flex items-center justify-between">
                        <div className='flex items-center gap-1 cursor-pointer'>
                            <span>{t('tmlaw')}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none">
                                <path d="M1 1H8M8 1L1 8M8 1V8" stroke="white" stroke-linejoin="round" />
                            </svg>
                        </div>
                        <div>© 2024</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer