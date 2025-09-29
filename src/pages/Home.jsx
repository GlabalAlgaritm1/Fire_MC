import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { images, data } from '../data'
import Film from './Film'
import Seriallar from './Seriallar'
import Anime from './Anime'
import Multfilm from './Multfilm'
import { FilmData, SerialData, AnimeData, MultfilmData } from '../data'

const Home = () => {
    const videoRef = useRef(null)

    // 🔹 Barcha videolarni yig‘ish (faqat possible = true bo‘lsa)
    const allVideos = [
        ...FilmData.filter(item => item.film && item.possible !== false).map(v => ({
            src: v.film,
            title: v.title,
            desc: v.desc,
            link: `/film/${v.id}`
        })),
        ...SerialData.filter(item => item.serial && item.possible !== false).map(v => ({
            src: v.serial,
            title: v.title,
            desc: v.desc,
            link: `/serial/${v.id}`
        })),
        ...AnimeData.filter(item => item.anime && item.possible !== false).map(v => ({
            src: v.anime,
            title: v.title,
            desc: v.desc,
            link: `/anime/${v.id}`
        })),
        ...MultfilmData.filter(item => item.multfilm && item.possible !== false).map(v => ({
            src: v.multfilm,
            title: v.title,
            desc: v.desc,
            link: `/multfilm/${v.id}`
        })),
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isMuted, setIsMuted] = useState(true)

    // 🔄 Keyingi video
    const handleRefresh = () => {
        let nextIndex = currentIndex + 1
        if (nextIndex >= allVideos.length) nextIndex = 0
        setCurrentIndex(nextIndex)
        setIsMuted(true)
    }

    // 🔊 Mute / Voice
    const toggleMute = () => {
        setIsMuted(!isMuted)
    }

    // 📌 Video yarimdan kam ko‘rinsa avtomatik mute bo‘lsin
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.intersectionRatio < 0.5) {
                        // faqat 50% dan kam ko‘rinib qolsa muted bo‘ladi
                        setIsMuted(true)
                    }
                })
            },
            { threshold: [0, 0.5, 1] } // 0% / 50% / 100% trigger
        )

        if (videoRef.current) {
            observer.observe(videoRef.current)
        }

        return () => {
            if (videoRef.current) {
                observer.unobserve(videoRef.current)
            }
        }
    }, [])

    const currentVideo = allVideos[currentIndex]

    return (
        <section className={`${data.Container}`}>
            <Film />
            <Seriallar />

            {/* 🎬 Video section */}
            {currentVideo && (
                <section className='relative mt-6'>
                    {/* Video link */}
                    <Link to={currentVideo.link}>
                        <video
                            key={currentVideo.src}
                            ref={videoRef}
                            className='w-full h-[555px] border rounded-xl object-cover'
                            src={currentVideo.src}
                            muted={isMuted}
                            autoPlay
                            controls={false}
                        />
                    </Link>

                    {/* Title & Desc */}
                    <Link to={currentVideo.link}>
                        <div className="absolute bottom-10 left-5 bg-black/50 p-4 rounded-xl max-w-2xl">
                            <h2 className="text-2xl font-bold text-white mb-2">
                                {currentVideo.title}
                            </h2>
                            <p className="text-white/80 text-sm">
                                {currentVideo.desc}
                            </p>
                        </div>
                    </Link>

                    {/* Refresh */}
                    <div className='absolute top-3 left-3'>
                        <button
                            className='border border-white/25 p-3 rounded-full bg-white/25 hover:bg-white/35 hover:transition-all hover:duration-200'
                            onClick={handleRefresh}
                        >
                            <img width={32} src={images.refreshicon} alt="refresh" />
                        </button>
                    </div>

                    {/* Mute */}
                    <div className='absolute top-3 right-3'>
                        <button
                            className='border border-white/25 p-3 rounded-full bg-white/25 hover:bg-white/35 hover:transition-all hover:duration-200'
                            onClick={toggleMute}
                        >
                            <img
                                width={32}
                                height={32}
                                src={isMuted ? images.mutedicon : images.voiseicon}
                                alt="sound control"
                            />
                        </button>
                    </div>
                </section>
            )}

            <Anime />
            <Multfilm />

            <button className='w-full max-w-3xl px-5 mx-auto mt-16 border py-2 rounded-lg text-center ml-[250px] hover:bg-white/15 hover:border-white/15 hover:transition-all hover:duration-200'>
                <span className='font-semibold text-lg text-white'>
                    Ko‘proq Ko‘rsatish
                </span>
            </button>
        </section>
    )
}

export default Home
