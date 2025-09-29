// Film.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import { FilmData, images } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import Marquee from 'react-fast-marquee'

const Film = () => {
  const firstRow = [...FilmData.slice(0, 12), { id: 'see-all-1', seeAll: true }]
  const secondRow = [...FilmData.slice(12, 24), { id: 'see-all-2', seeAll: true }]

  const renderCard = (item) => (
    <Link to={`/film/${item.id}`} key={item.id}>
      <li className="relative rounded overflow-hidden shadow-lg group cursor-pointer">
        <img
          src={item.card1}
          alt="Film Card"
          className="w-full max-w-[300px] h-[275px] border-b object-cover rounded-lg mb-3 max-md:h-[250px] max-sm:w-full  max-sm:max-w-[207px] max-sm:h-[230px] max-sm:object-cover max-sm:justify-center"
        />
        <span className="absolute bottom-[72px] right-2 font-semibold bg-white/10 text-white text-base p-1 rounded-md border border-white/20 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
          {item.year}
        </span>
        <div className="overflow-hidden w-full h-[28px]">
          <div className="truncate group-hover:hidden text-white font-bold text-lg">{item.title}</div>
          <div className="hidden group-hover:block">
            <Marquee pauseOnHover={false} speed={50}>
              <span className="text-white font-bold text-lg">{item.title}</span>
            </Marquee>
          </div>
        </div>
        <span className="text-sm font-semibold text-green-600">{item.click}</span>
      </li>
    </Link>
  )

  const renderSeeAll = (id) => (
    <li
      key={id}
      className="flex flex-col items-center justify-center border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer h-[275px] max-sm:w-full max-sm:max-w-[200px] max-sm:h-full max-sm:max-h-[200px]"
    >
      <Link to="/film" className="flex flex-col items-center justify-center gap-y-3">
        <span className="text-white text-xl font-semibold max-sm:text-base">Barchasini ko‘rish</span>
        <img width={50} height={50} className="bg-white rounded-full p-2 max-sm:w-10 max-sm:h-10" src={images.allicon} alt="All icon" />
      </Link>
    </li>
  )

  return (
    <section>
      <div className="mt-4">
        <div className="flex items-center justify-between py-3 sticky top-[56px] z-40 bg-[#171818]">
          <Link className="text-2xl font-semibold">Filmlar <span className="text-white">:</span></Link>
        </div>

        <Swiper
          spaceBetween={20}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 2, slidesPerGroup: 2 },
            640: { slidesPerView: 4, slidesPerGroup: 4 },
            1024: { slidesPerView: 6, slidesPerGroup: 6 },
          }}
          className="mb-8"
        >
          {firstRow.map((item) => (
            <SwiperSlide key={item.id}>{item.seeAll ? renderSeeAll(item.id) : renderCard(item)}</SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          spaceBetween={20}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 2, slidesPerGroup: 2 },
            640: { slidesPerView: 4, slidesPerGroup: 4 },
            1024: { slidesPerView: 6, slidesPerGroup: 6 },
          }}
        >
          {secondRow.map((item) => (
            <SwiperSlide key={item.id}>{item.seeAll ? renderSeeAll(item.id) : renderCard(item)}</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Film
