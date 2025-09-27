import React from 'react'
import { images, data } from '../data'
import Film from './Film'
import Seriallar from './Seriallar'
import Anime from './Anime'
import Multfilm from './Multfilm'

const Home = () => {
    return (
        <section>
            <Film />
            <Seriallar />
            <Anime />
            <Multfilm />
            <button className='w-full max-w-3xl px-5 mx-auto mt-16 border py-2 rounded-lg text-center ml-[250px] hover:bg-white/15 hover:border-white/15 hover:transition-all hover:duration-200'>
                <span className='font-semibold text-lg text-white'>
                    Koproq Korsatish
                </span>
            </button>
        </section>
    )
}

export default Home