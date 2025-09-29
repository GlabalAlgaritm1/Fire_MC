import React from 'react'
import { data, images } from '../data'
import { Link } from 'react-router-dom'

const Page404 = () => {
    return (
        <section className={`${data.Container} bg-[#171818] flex flex-col items-center h-screen`}>
            <Link to='/' className="flex items-center gap-2 justify-center mt-36">
                <img width={100} src={images.Logo} alt="" />
                <span className='text-blue-600 text-3xl font-semibold'>Fire TV</span>
            </Link>
            <span className='text-xl text-red-500'>Siz izlagan sahifa topilmadi ?</span>
            <Link to='/' className='text-2xl font-semibold text-white border border-dashed border-white/15 px-5 py-2 rounded-lg bg-white/15 mt-8'>
                Bosh sahifa
            </Link>
        </section>
    )
}

export default Page404