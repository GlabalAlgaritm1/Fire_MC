import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Breadcrumb from "../components/Breadcrumb"
import Marquee from "react-fast-marquee"
import { images, FilmData, SerialData, AnimeData, MultfilmData } from "../data"
import "../css/fonts.css"

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

  // 🔹 Eng oxirgi 5ta card (Film, Serial, Anime, Multfilm)
  const defaultCards = [
    { ...FilmData[FilmData.length - 1], link: `/film/${FilmData[FilmData.length - 1].id}` },
    { ...SerialData[SerialData.length - 1], link: `/serial/${SerialData[SerialData.length - 1].id}` },
    { ...AnimeData[AnimeData.length - 1], link: `/anime/${AnimeData[AnimeData.length - 1].id}` },
    { ...MultfilmData[MultfilmData.length - 1], link: `/multfilm/${MultfilmData[MultfilmData.length - 1].id}` },
    { ...MultfilmData[MultfilmData.length - 2], link: `/multfilm/${MultfilmData[MultfilmData.length - 2].id}` },
  ]

  return (
    <section className="p-6 text-white">
      <Breadcrumb />

      {/* Delete button + span */}
      <div
        className="fixed bottom-5 right-5 flex flex-col items-center group cursor-pointer z-50"
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
        <>
          <p className="text-center mt-20 text-2xl inter mb-20">
            Siz yoqtirgan filmlar qolmadi!
          </p>

          {/* Archasimon kartalar */}
          <div className="flex justify-center gap-[-60px] relative max-w-[900px] mx-auto">
            {defaultCards.map((item, index) => {
              let translateY = "translate-y-0"
              if (index === 2) translateY = "-translate-y-12" // markaz yuqorida
              if (index === 1 || index === 3) translateY = "-translate-y-6" // yonidagilar biroz yuqorida
              if (index === 0 || index === 4) translateY = "translate-y-0" // chetlari eng pastda

              return (
                <Link
                  key={item.id}
                  to={item.link}
                  className={`relative w-[200px] mx-[-40px] ${translateY} transition-transform duration-300`}
                >
                  <img
                    src={item.card1}
                    alt={item.title}
                    className="w-full h-[260px] object-cover rounded-lg border border-white/20 shadow-lg"
                  />
                  <span className="absolute bottom-[60px] right-2 font-semibold bg-white/10 text-white text-base p-1 rounded-md border border-white/20">
                    {item.year}
                  </span>
                </Link>
              )
            })}
          </div>
        </>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {favourites.map((item) => (
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
