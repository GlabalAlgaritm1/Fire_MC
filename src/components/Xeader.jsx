import React, { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { images, data } from '../data'
import '../css/fonts.css'
import '../css/marquee.css'

const Xeader = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [loginModal, setLoginModal] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [animateIn, setAnimateIn] = useState(false)
    const location = useLocation()

    useEffect(() => {
        if (loginModal) {
            setIsVisible(true)
            requestAnimationFrame(() => setAnimateIn(true))
        } else {
            setAnimateIn(false)
            const timer = setTimeout(() => setIsVisible(false), 300)
            return () => clearTimeout(timer)
        }
    }, [loginModal])

    return (
        <>
            <div className="bg-[#171818] py-2 sticky top-0 z-50 border-b border-blue-500 overflow-hidden">
                <header className={`${data.Container}`}>
                    <section className='flex items-center justify-between'>
                        {/* Logo */}
                        <section>
                            <Link to="/" className='flex items-center gap-1'>
                                <img width={40} height={40} src={images.Logo} alt="Logo" />
                                <span className='text-2xl font-semibold text-white'>MC</span>
                            </Link>
                        </section>

                        {/* Actions */}
                        <section className='flex items-center gap-x-2 md:gap-x-4'>
                            {/* Follow Button */}
                            <button className='hidden md:inline border px-4 py-1 rounded-lg text-green-600 font-semibold border-green-600 hover:bg-green-600 hover:text-white transition-all duration-200'>
                                Follow
                            </button>

                            {/* Search */}
                            <NavLink to='/search' className='border px-3 py-1 rounded-lg text-white hover:border-blue-500 hover:bg-blue-500 transition-all duration-200 flex items-center gap-x-2'>
                                <img width={24} height={24} src={images.searchicon} alt="" />
                                <span className='hidden sm:inline font-semibold'>Search</span>
                            </NavLink>

                            {/* Menu Button (Mobile) */}
                            <button
                                className='border p-1 rounded-lg border-white/10 bg-white/10 hover:bg-white/25 md:hidden'
                                onClick={() => setMenuOpen(!menuOpen)}
                            >
                                {menuOpen ? (
                                    <img width={22} height={22} src={images.close} alt="Close icon" />
                                ) : (
                                    <img width={22} height={22} src={images.Menu} alt="Menu Icon" />
                                )}
                            </button>

                            {/* Login */}
                            <button
                                className='bg-white/10 pl-[6px] pr-2 py-1 rounded-lg hover:bg-white/25 hidden sm:flex items-center'
                                onClick={() => setLoginModal(true)}
                            >
                                <img width={24} height={24} src={images.loginicon} alt="login" />
                            </button>
                        </section>
                    </section>

                    {/* Desktop Menu */}
                    <nav className='hidden md:flex justify-center gap-3 mt-2 flex-wrap'>
                        <NavLink to="/allfilm" className='px-3 py-1 rounded-lg text-white bg-black/30 hover:bg-blue-700 transition-all duration-200'>Filmlar</NavLink>
                        <NavLink to="/allserial" className='px-3 py-1 rounded-lg text-white bg-black/30 hover:bg-blue-700 transition-all duration-200'>Seriallar</NavLink>
                        <NavLink to="/allanime" className='px-3 py-1 rounded-lg text-white bg-black/30 hover:bg-blue-700 transition-all duration-200'>Animelar</NavLink>
                        <NavLink to="/allmultfilm" className='px-3 py-1 rounded-lg text-white bg-black/30 hover:bg-blue-700 transition-all duration-200'>Multfilmlar</NavLink>
                        <NavLink to="/favourite" className='px-3 py-1 rounded-lg text-white bg-black/30 hover:bg-blue-700 transition-all duration-200'>Sevimlilar</NavLink>
                    </nav>

                    {/* Mobile Drawer */}
                    {menuOpen && (
                        <div
                            className="fixed inset-0 bg-black/50 z-40 md:hidden"
                            onClick={() => setMenuOpen(false)}
                        ></div>
                    )}
                    <aside
                        className={`fixed top-0 left-0 h-full w-64 bg-black/90 text-white transform transition-transform duration-300 z-50 border-r border-r-blue-500 md:hidden
                        ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
                    >
                        <div className="py-2 px-5 border-b border-blue-500">
                            <Link to="/" className='flex items-center gap-1 ml-10' onClick={() => setMenuOpen(false)}>
                                <img width={40} height={40} src={images.Logo} alt="Logo" />
                                <span className='text-2xl font-semibold text-white'>MC</span>
                            </Link>
                        </div>
                        <nav className="flex flex-col p-5 gap-4">
                            <NavLink to="/sozlamalar" className='border text-center py-2 rounded-lg font-semibold border-white/50 bg-black hover:bg-blue-700 hover:border-blue-500 transition-all duration-200' onClick={() => setMenuOpen(false)}>Settings</NavLink>
                            <NavLink to="/profil" className='border text-center py-2 rounded-lg font-semibold border-white/50 bg-black hover:bg-blue-700 hover:border-blue-500 transition-all duration-200' onClick={() => setMenuOpen(false)}>My Profil</NavLink>
                            <NavLink to="/allfilm" className='border text-center py-2 rounded-lg font-semibold border-white/50 bg-black hover:bg-blue-700 hover:border-blue-500 transition-all duration-200' onClick={() => setMenuOpen(false)}>Filmlar</NavLink>
                            <NavLink to="/allserial" className='border text-center py-2 rounded-lg font-semibold border-white/50 bg-black hover:bg-blue-700 hover:border-blue-500 transition-all duration-200' onClick={() => setMenuOpen(false)}>Seriallar</NavLink>
                            <NavLink to="/allanime" className='border text-center py-2 rounded-lg font-semibold border-white/50 bg-black hover:bg-blue-700 hover:border-blue-500 transition-all duration-200' onClick={() => setMenuOpen(false)}>Animelar</NavLink>
                            <NavLink to="/allmultfilm" className='border text-center py-2 rounded-lg font-semibold border-white/50 bg-black hover:bg-blue-700 hover:border-blue-500 transition-all duration-200' onClick={() => setMenuOpen(false)}>Multfilmlar</NavLink>
                            <NavLink to="/favourite" className='border text-center py-2 rounded-lg font-semibold border-white/50 bg-black hover:bg-blue-700 hover:border-blue-500 transition-all duration-200' onClick={() => setMenuOpen(false)}>Sevimlilar</NavLink>
                        </nav>
                    </aside>

                    {/* Login Modal */}
                    {isVisible && (
                        <>
                            <div
                                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${animateIn ? "opacity-100" : "opacity-0"}`}
                                onClick={() => setLoginModal(false)}
                            ></div>

                            <div className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xs sm:max-w-sm h-[280px] bg-[#1e1e1e] rounded-t-2xl shadow-lg p-6 text-white z-50 transform transition-all duration-300 ${animateIn ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>
                                <div className="flex justify-between items-center mb-4">
                                    <div className="marquee">
                                        <h2 className="text-base font-semibold whitespace-nowrap">
                                            Account kiriting yoki ro‘yxatdan o‘ting va bizning ko‘plab imkonyatlarimizdan foydalaning
                                        </h2>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <NavLink to="/" className="py-3 font-semibold text-center rounded-lg bg-blue-700/50 hover:bg-blue-700">Accauntga kirish</NavLink>
                                    <NavLink to="/" className="py-3 font-semibold text-center rounded-lg bg-blue-700/50 hover:bg-blue-700">Ro'yxatdan o'tish</NavLink>
                                    <button className='bg-white/5 py-2 rounded-md text-lg font-semibold hover:bg-white/15' onClick={() => setLoginModal(false)}>Yopish</button>
                                </div>
                            </div>
                        </>
                    )}
                </header>
            </div>
        </>
    )
}

export default Xeader
