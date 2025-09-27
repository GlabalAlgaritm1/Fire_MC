// Search.jsx
import React, { useState, useMemo } from 'react'
import { data, FilmData, SerialData, AnimeData, MultfilmData, images } from '../data'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Link } from 'react-router-dom'

// 🔹 Randomdan N ta olish funksiyasi
const getRandomItems = (arr, count) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
}

const Search = () => {
    const [query, setQuery] = useState("")

    // 🔹 Har bir datasetga type qo‘shib beramiz
    const films = useMemo(() => getRandomItems(FilmData.map(f => ({ ...f, type: 'film' })), 3), [])
    const serials = useMemo(() => getRandomItems(SerialData.map(s => ({ ...s, type: 'serial' })), 3), [])
    const animes = useMemo(() => getRandomItems(AnimeData.map(a => ({ ...a, type: 'anime' })), 3), [])
    const multfilms = useMemo(() => getRandomItems(MultfilmData.map(m => ({ ...m, type: 'multfilm' })), 3), [])

    // 🔹 Tavsiya uchun
    const allItems = [...films, ...serials, ...animes, ...multfilms, { id: 'see-all', seeAll: true }]

    // 🔹 Hamma data (filter uchun)
    const fullData = [
        ...FilmData.map(f => ({ ...f, type: 'film' })),
        ...SerialData.map(s => ({ ...s, type: 'serial' })),
        ...AnimeData.map(a => ({ ...a, type: 'anime' })),
        ...MultfilmData.map(m => ({ ...m, type: 'multfilm' }))
    ]

    // 🔹 Filter qilingan natijalar (case-insensitive)
    const filtered = useMemo(() => {
        if (!query) return []
        return fullData.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase())
        )
    }, [query, fullData])

    // 🔹 Dinamik link yaratish
    const getLink = (item) => {
        if (item.type === 'film') return `/film/${item.id}`
        if (item.type === 'serial') return `/serial/${item.id}`
        if (item.type === 'anime') return `/anime/${item.id}`
        if (item.type === 'multfilm') return `/multfilm/${item.id}`
        return '/'
    }

    return (
        <section className={`${data.Container} my-6`}>
            {/* 🔎 Qidiruv input */}
            <input
                className="w-full px-2 py-2 my-4 bg-[#171818] border border-blue-600 rounded-lg focus:outline-none placeholder:inter text-white"
                placeholder="Film, serial, anime, multfilm"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            {/* Agar qidiruv bo‘lsa */}
            {query ? (
                <>
                    <h2 className="text-xl font-bold text-white mb-4">Qidiruv natijalari</h2>
                    {filtered.length > 0 ? (
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={6}
                            slidesPerGroup={6}
                            grabCursor={true}
                        >
                            {filtered.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Link to={getLink(item)}>
                                        <li className="relative rounded overflow-hidden shadow-lg group cursor-pointer">
                                            <img
                                                src={item.card1}
                                                alt="Film Card"
                                                className="w-full max-w-[300px] h-[250px] object-cover rounded-lg mb-3"
                                            />
                                            <span className="absolute bottom-14 right-2 font-semibold bg-white/10 text-white text-base p-1 rounded-md border border-white/20 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                                {item.year}
                                            </span>
                                            <p className='text-white font-bold text-lg truncate'>
                                                {item.title}
                                            </p>
                                        </li>
                                    </Link>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <p className="text-white">Hech narsa topilmadi...</p>
                    )}
                </>
            ) : (
                <>
                    <h2 className="text-xl font-bold text-white mb-4">Tavsiya etilganlar</h2>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={6}
                        slidesPerGroup={6}
                        grabCursor={true}
                    >
                        {allItems.map((item) => (
                            <SwiperSlide key={item.id}>
                                {item.seeAll ? (
                                    <Link
                                        to="/"
                                        className='w-full h-[250px] border flex flex-col items-center gap-y-3 justify-center rounded-md hover:bg-white/30 hover:transition-all hover:duration-200'
                                    >
                                        <span className='text-white text-xl font-semibold'>Barchasini ko‘rish</span>
                                        <img width={50} height={50} className='bg-white rounded-full p-2' src={images.allicon} alt="All icon" />
                                    </Link>
                                ) : (
                                    <Link to={getLink(item)}>
                                        <li className="relative rounded overflow-hidden shadow-lg group cursor-pointer">
                                            <img
                                                src={item.card1}
                                                alt="Film Card"
                                                className="w-full max-w-[300px] h-[250px] object-cover rounded-lg mb-3"
                                            />
                                            <span className="absolute bottom-14 right-2 font-semibold bg-white/10 text-white text-base p-1 rounded-md border border-white/20 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                                {item.year}
                                            </span>
                                            <p className='text-white font-bold text-lg truncate'>
                                                {item.title}
                                            </p>
                                        </li>
                                    </Link>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </>
            )}
        </section>
    )
}

export default Search
