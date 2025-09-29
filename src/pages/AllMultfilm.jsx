// AllMultfilm.jsx
import React, { useState } from 'react'
import { MultfilmData } from '../data'
import { Link } from 'react-router-dom'

// ✅ Premyera muddati (10 kun = 864000000 ms)
const PREMIERA_DAYS = 10
const PREMIERA_MS = PREMIERA_DAYS * 24 * 60 * 60 * 1000

const AllMultfilm = () => {
  // 🔹 MultfilmData teskari tartibda va 72 taga cheklangan
  const reversedMultfilms = [...MultfilmData].reverse().slice(0, 72)

  // 🔹 Dastlab 18 ta card ko‘rsatamiz
  const [visibleCount, setVisibleCount] = useState(18)

  // 🔹 Premyera aniqlash
  const isPremyera = (addedAt) => {
    if (!addedAt) return false
    const now = new Date()
    const MultfilmDate = new Date(addedAt)
    return now - MultfilmDate <= PREMIERA_MS
  }

  // 🔹 Ko‘proq ko‘rsatish tugmasi
  const handleShowMore = () => {
    setVisibleCount((prev) => Math.min(prev + 18, reversedMultfilms.length))
  }

  return (
    <section className="p-6">
      <div className="flex items-center justify-between py-3 sticky top-[56px] z-40 bg-[#171818]">
        <h1 className="text-2xl font-semibold text-white">
          Barcha Multfilmlar <span className="text-green-500">:</span>
        </h1>
      </div>

      {/* Grid layout */}
      <ul className="grid grid-cols-5 gap-6 mt-6">
        {reversedMultfilms.slice(0, visibleCount).map((item) => (
          <Link to={`/multfilm/${item.id}`} key={item.id}>
            <li className="relative rounded overflow-hidden shadow-lg group cursor-pointer">
              {/* Rasm */}
              <img
                src={item.card1}
                alt={item.title}
                className="w-full h-[280px] object-cover rounded-lg border-b mb-3"
              />

              {/* Premyera badge */}
              {isPremyera(item.addedAt) && (
                <span className="absolute top-2 left-2 bg-red-600/50 text-white px-3 py-1 rounded-md text-sm font-bold shadow-lg">
                  Premyera
                </span>
              )}

              {/* Year overlay */}
              <span className="absolute bottom-[72px] right-2 font-semibold bg-white/10 text-white text-base p-1 rounded-md border border-white/20 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                {item.year}
              </span>

              {/* Title */}
              <h2 className="text-lg font-bold text-white truncate group-hover:text-green-400 transition-colors">
                {item.title}
              </h2>

              {/* Click text */}
              <span className="text-sm font-semibold text-green-600">
                {item.click}
              </span>
            </li>
          </Link>
        ))}
      </ul>

      {/* Agar hamma card ko‘rsatilmagan bo‘lsa tugma chiqadi */}
      {visibleCount < reversedMultfilms.length && (
        <button
          onClick={handleShowMore}
          className="w-full max-w-3xl px-5 mx-auto mt-16 border py-2 rounded-lg text-center block hover:bg-white/15 hover:border-white/15 hover:transition-all hover:duration-200"
        >
          <span className="font-semibold text-lg text-white">
            Ko‘proq Ko‘rsatish
          </span>
        </button>
      )}
    </section>
  )
}

export default AllMultfilm
