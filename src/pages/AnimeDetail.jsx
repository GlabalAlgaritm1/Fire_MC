// FilmDetail.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import { data, AnimeData } from '../data'
import Breadcrumb from '../components/Breadcrumb'

const AnimeDetail = () => {
    const { id } = useParams()
    const anime = AnimeData.find((item) => item.id === id)

    if (!anime) {
        return <p className="text-white text-center mt-10">anime topilmadi 😢</p>
    }

    return (
        <section className={`${data.Container}`}>
            <Breadcrumb />
            <div className="flex gap-8 items-end">
                <img
                    src={anime.card1}
                    alt={anime.title}
                    className="w-full max-w-[250px] h-[350px] object-cover rounded-lg mt-8"
                />
                <div>
                     <h1 className="text-3xl font-bold mb-3">{anime.title}</h1>
                    <p className="text-lg text-gray-300 mb-2 max-w-xs">{anime.desc}</p>
                    <p><span className="font-semibold">Chiqqan yil:</span> {anime.date}</p>
                    <p><span className="font-semibold">Sifat:</span> {anime.quality}</p>


                </div>
            </div>
        </section>
    )
}

export default AnimeDetail
