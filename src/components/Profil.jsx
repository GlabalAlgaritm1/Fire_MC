import React from 'react'
import { data, images } from '../data'
import { NavLink } from 'react-router-dom'

const Profil = () => {
    return (
        <section className={`${data.Container}`}>
            <h1 className='text-3xl font-semibold text-green-600 mt-5 mb-10'>Profil <span className='text-white'>:</span></h1>
            <nav className='flex flex-col items-start gap-y-3'>
                {/* Accaunts  */}
                <NavLink className='flex items-center gap-3 px-3 py-2 border w-full max-w-48 rounded-lg bg-blue-300/40 border-blue-300/30 hover:bg-blue-300/55 hover:border-blue-300/60 hover:transition-all hover:duration-200'>
                    <img width={34} height={34} src={images.usericon} alt="" />
                    <span className='text-xl font-semibold'>Account :</span>
                </NavLink>
                {/* Devise  */}
                <NavLink className='flex items-center gap-3 px-3 py-2 border w-full max-w-48 rounded-lg bg-blue-300/40 border-blue-300/30 hover:bg-blue-300/55 hover:border-blue-300/60 hover:transition-all hover:duration-200'>
                    <img width={34} height={34} src={images.deviseicon} alt="" />
                    <span className='text-xl font-semibold'>Device :</span>
                </NavLink>

                <NavLink className='flex items-center gap-3 px-3 py-2 border w-full max-w-48 rounded-lg bg-blue-300/40 border-blue-300/30 hover:bg-blue-300/55 hover:border-blue-300/60 hover:transition-all hover:duration-200'>
                    <img width={34} height={34} src={images.cashicon} alt="" />
                    <span className='text-xl font-semibold'>Ransom :</span>
                </NavLink>
                <NavLink className='flex items-center gap-3 px-3 py-2 border w-full max-w-48 rounded-lg bg-blue-300/40 border-blue-300/30 hover:bg-blue-300/55 hover:border-blue-300/60 hover:transition-all hover:duration-200'>
                    <img width={34} height={34} src={images.ransomhistoryicon} alt="" />
                    <span className='text-xl font-semibold'>History :</span>
                </NavLink>
                <NavLink className='flex items-center gap-3 px-3 py-2 border w-full max-w-48 rounded-lg bg-blue-300/40 border-blue-300/30 hover:bg-blue-300/55 hover:border-blue-300/60 hover:transition-all hover:duration-200'>
                    <img width={34} height={34} src={images.promocodeicon} alt="" />
                    <span className='text-xl font-semibold'>Promocode :</span>
                </NavLink>
            </nav>
        </section>
    )
}

export default Profil