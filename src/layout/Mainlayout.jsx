import React from 'react'
import Xeader from '../components/Xeader'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const Mainlayout = () => {
    return (
        <section className='bg-[#171818] text-blue-600 select-none'>
            <Xeader />
            <main>
                <Outlet />
            </main>
            <Footer />
        </section>
    )
}

export default Mainlayout