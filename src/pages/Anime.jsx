import React from 'react'

import { data, AnimeData } from '../data'
import { Link } from 'react-router-dom'
const Anime = () => {
  return (
    <section className={`${data.Container}`}>
      <div className="mt-4">
        {/* Title */}
        <div className="flex items-center justify-between py-3 sticky top-[56px] z-10 bg-[#171818]">
          <Link className='text-2xl font-semibold'>
            Animelar <span className='text-white'>:</span>
          </Link>
        </div>

        {/* Cards */}
        <ul className='grid grid-cols-6 gap-x-2 gap-y-5'> 
          {AnimeData.map((item) => (
            <li
              key={item.id}
              className="relative rounded overflow-hidden shadow-lg group"
            >
              <Link to={`/anime/${item.id}`}>
                <img
                  src={item.card1}
                  alt="Film Card"
                  className="w-full max-w-[300px] h-[300px] border-b object-cover rounded-lg mb-3"
                />

                {/* Year overlay (hoverda yo‘qoladi) */}
                <span className="absolute bottom-[72px] right-2 font-semibold bg-white/10 text-white text-base p-1 rounded-md border border-white/20 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  {item.year}
                </span>

                {/* Title */}
                <p className='text-white font-bold text-lg truncate'>
                  {item.title}
                </p>
                <span className='text-sm font-semibold text-orange-600'>
                  {item.buy}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Anime