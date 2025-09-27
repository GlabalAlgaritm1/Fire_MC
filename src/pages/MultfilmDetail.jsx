// FilmDetail.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import { data, MultfilmData } from '../data'
import Breadcrumb from '../components/Breadcrumb'

const MultfilmDetail = () => {
    const { id } = useParams()
    const multfilm = MultfilmData.find((item) => item.id === id)

    if (!multfilm) {
        return <p className="text-white text-center mt-10">Multfilm topilmadi 😢</p>
    }

    return (
        <section className={`${data.Container}`}>
            <Breadcrumb />
            <div className="flex gap-8 items-end">
                <img
                    src={multfilm.card1}
                    alt={multfilm.title}
                    className="w-full max-w-[250px] h-[350px] object-cover rounded-lg mt-8"
                />
                <div>
                    <h1 className="text-3xl font-bold mb-3">{multfilm.title}</h1>
                    <p className="text-lg text-gray-300 mb-2 max-w-xs">{multfilm.desc}</p>
                    <p><span className="font-semibold">Chiqqan yil:</span> {multfilm.date}</p>
                    <p><span className="font-semibold">Sifat:</span> {multfilm.quality}</p>


                </div>
            </div>
        </section>
    )
}

export default MultfilmDetail
