import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { images, data } from '../data'
import '../css/fonts.css'

const Xeader = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className={`${data.Container} py-2 sticky top-0 overflow-hidden bg-[#171818] border-b rounded-b-sm border-blue-500 z-50`}>
            <section className='flex items-center justify-between'>
                {/* Logo */}
                <section>
                    <Link to="/" className='flex items-center gap-1'>
                        <img width={40} height={40} src={images.Logo} alt="Logo" />
                        <span className='text-2xl font-semibold text-white'>MC</span>
                    </Link>
                </section>

                {/* Actions */}
                <section className='flex items-center gap-x-4'>
                    <button className='border px-4 py-1 rounded-lg text-green-600 font-semibold border-green-600 hover:bg-green-600 hover:text-white hover:border-green-700 hover:transition-all hover:duration-200'>
                        Follow
                    </button>
                    <NavLink to='/search' className='border px-3 py-1 rounded-lg text-white hover:border-blue-500 hover:bg-blue-500 transition-all duration-200 flex items-center gap-x-2'>
                        <img width={24} height={24} src={images.searchicon} alt="" /> <span className='font-semibold'>Search</span>
                    </NavLink>
                    <NavLink className='border px-4 py-1 rounded-lg text-white hover:border-blue-500 hover:bg-blue-500 transition-all duration-200'>
                        <span className='font-semibold'>Login</span>
                    </NavLink>

                    {/* Menu Button */}
                    <button
                        className='border p-1 rounded-lg text-white'
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? (
                            <img width={22} height={22} src={images.close} alt="Close icon" />
                        ) : (
                            <img width={22} height={22} src={images.Menu} alt="Menu Icon" />
                        )}
                    </button>
                </section>
            </section>

            {/* Overlay (sidebar ochilganda qora fon chiqadi) */}
            {menuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}

            {/* Drawer / Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-black/90 text-white transform transition-transform duration-300 z-50 border-r border-r-blue-500
                ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="py-2 px-5 border-b border-blue-500">
                    <Link to="/" className='flex items-center gap-1 ml-10' onClick={() => setMenuOpen(false)}>
                        <img width={40} height={40} src={images.Logo} alt="Logo" />
                        <span className='text-2xl font-semibold text-white'>MC</span>
                    </Link>
                </div>
                <ul className="flex flex-col p-5 gap-4">
                    <NavLink 
                        to="/profil" 
                        className='border text-center py-2 rounded-lg font-semibold border-white/50 bg-black hover:bg-blue-700 hover:border-blue-500 transition-all duration-200'
                        onClick={() => setMenuOpen(false)}
                    >
                        My Profil
                    </NavLink>
                    <NavLink 
                        to="/" 
                        className='border text-center py-2 rounded-lg font-semibold border-white/50 bg-black hover:bg-blue-700 hover:border-blue-500 transition-all duration-200'
                        onClick={() => setMenuOpen(false)}
                    >
                        Filmlar
                    </NavLink>
                    <NavLink 
                        to="/" 
                        className='border text-center py-2 rounded-lg font-semibold border-white/50 bg-black hover:bg-blue-700 hover:border-blue-500 transition-all duration-200'
                        onClick={() => setMenuOpen(false)}
                    >
                        Seriallar
                    </NavLink>
                    <NavLink 
                        to="/" 
                        className='border text-center py-2 rounded-lg font-semibold border-white/50 bg-black hover:bg-blue-700 hover:border-blue-500 transition-all duration-200'
                        onClick={() => setMenuOpen(false)}
                    >
                        Animelar
                    </NavLink>
                    <NavLink 
                        to="/" 
                        className='border text-center py-2 rounded-lg font-semibold border-white/50 bg-black hover:bg-blue-700 hover:border-blue-500 transition-all duration-200'
                        onClick={() => setMenuOpen(false)}
                    >
                        Multfilmlar
                    </NavLink>
                </ul>
            </aside>
        </header>
    )
}

export default Xeader
