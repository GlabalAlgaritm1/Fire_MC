import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Breadcrumb from "../components/Breadcrumb"
import Marquee from 'react-fast-marquee'
import { images } from "../data"

const Favourite = () => {
    const [favourites, setFavourites] = useState([])

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("favourites")) || []
        setFavourites(stored)
    }, [])

    // ✅ Hammasini o‘chirish funksiyasi
    const clearAll = () => {
        localStorage.removeItem("favourites")
        setFavourites([])
    }

    return (
        <section className="p-6 text-white">
            <Breadcrumb />

            {/* Delete button + span */}
            <div
                className="fixed bottom-5 right-5 flex flex-col items-center group cursor-pointer"
                onClick={clearAll}
            >
                 <span className="mb-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Hammasini o‘chirish
                </span>
                <button className="flex items-center justify-center border border-white/20 bg-white/25 px-3 py-2 rounded-md hover:bg-red-500/50">
                    <img width={24} height={32} src={images.deleteicon} alt="delete" />
                </button>
            </div>

            {favourites.length === 0 ? (
                <p>Sevimli filmlar yo‘q 😢</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                    {favourites.map(item => (
                        <Link key={item.id} to={`/film/${item.id}`}>
                            <li className="relative rounded overflow-hidden shadow-lg group cursor-pointer">
                                {/* Rasm */}
                                <img
                                    src={item.card1}
                                    alt="Film Card"
                                    className="w-full max-w-[300px] h-[275px] border-b object-cover rounded-lg mb-3"
                                />
                                {/* Year overlay */}
                                <span className="absolute bottom-[72px] right-2 font-semibold bg-white/10 text-white text-base p-1 rounded-md border border-white/20 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                                    {item.year}
                                </span>
                                {/* Title with marquee only on hover */}
                                <div className="overflow-hidden w-full h-[28px]">
                                    <div className="truncate group-hover:hidden text-white font-bold text-lg">
                                        {item.title}
                                    </div>
                                    <div className="hidden group-hover:block">
                                        <Marquee pauseOnHover={false} speed={50}>
                                            <span className="text-white font-bold text-lg">
                                                {item.title}
                                            </span>
                                        </Marquee>
                                    </div>
                                </div>
                                {/* Click text */}
                                <span className="text-sm font-semibold text-green-600">
                                    {item.click}
                                </span>
                            </li>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    )
}

export default Favourite
