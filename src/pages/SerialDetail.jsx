// FilmDetail.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import { data, SerialData } from '../data'
import Breadcrumb from '../components/Breadcrumb'

const SerialDetail = () => {
    const { id } = useParams()
    const serial = SerialData.find((item) => item.id === id)

    if (!serial) {
        return <p className="text-white text-center mt-10">Serial topilmadi 😢</p>
    }

    return (
        <section className={`${data.Container}`}>
            <Breadcrumb />
            <div className="flex gap-8 items-end">
                <img
                    src={serial.card1}
                    alt={serial.title}
                    className="w-full max-w-[250px] h-[350px] object-cover rounded-lg mt-8"
                />
                <div>
                    <h1 className="text-3xl font-bold mb-3">{serial.title}</h1>
                    <p className="text-lg text-gray-300 mb-2 max-w-2xl">{serial.desc}</p>
                    <p><span className="font-semibold">Chiqqan yil:</span> {serial.date}</p>
                    <p><span className="font-semibold">Sifat:</span> {serial.quality}</p>


                </div>
            </div>
        </section>
    )
}

export default SerialDetail
