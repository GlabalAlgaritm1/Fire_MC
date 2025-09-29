import React from 'react'
import { data, images } from '../data'
import Breadcrumb from '../components/Breadcrumb'

const Sozlamalar = () => {
    return (
        <section className={`${data.Container}`}>
            <Breadcrumb />
            <div className="flex items-center gap-x-3">
                <button className='border border-white/30 text-white/35 w-full max-w-64 py-3 rounded-lg hover:bg-white/40 hover:text-white/70 hover:transition-all hover:duration-200'>
                    <span className='text-xl font-semibold'>
                        Uzbek
                    </span>
                </button>
                <button className='border border-white/30 text-white/35 w-full max-w-64 py-3 rounded-lg hover:bg-white/40 hover:text-white/70 hover:transition-all hover:duration-200'>
                    <span className='text-xl font-semibold'>
                        English
                    </span>
                </button>
                <button className='border border-white/30 text-white/35 w-full max-w-64 py-3 rounded-lg hover:bg-white/40 hover:text-white/70 hover:transition-all hover:duration-200'>
                    <span className='text-xl font-semibold'>
                        Russia
                    </span>
                </button>
                <div className='flex items-center ml-48'>
                    <img width={24} src={images.prewicon} alt="" />
                    <span className='inter ml-2 text-lg text-white'>
                        Tilni almashtirish
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Sozlamalar