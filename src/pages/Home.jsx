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

  // 🔹 Barcha videolar (possible !== false)
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
  const toggleMute = () => setIsMuted(!isMuted)

  // 📌 Video yarimdan kam ko‘rinsa avtomatik mute bo‘lsin
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio < 0.5) {
            setIsMuted(true)
          }
        })
      },
      { threshold: [0, 0.5, 1] }
    )

    if (videoRef.current) observer.observe(videoRef.current)
    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current)
    }
  }, [])

  const currentVideo = allVideos[currentIndex]

  return (
    <section className={`${data.Container}`}>
      {/* Filmlar */}
      <Film />
      <Seriallar />

      {/* 🎬 Video Section */}
      {currentVideo && (
        <section className='relative mt-6'>
          <Link to={currentVideo.link}>
            <video
              key={currentVideo.src}
              ref={videoRef}
              className='w-full max-h-[555px] sm:max-h-[400px] md:max-h-[500px] lg:max-h-[555px] border rounded-xl object-cover'
              src={currentVideo.src}
              muted={isMuted}
              autoPlay
              controls={false}
            />
          </Link>

          {/* Title & Description */}
          <Link to={currentVideo.link}>
            <div className="absolute bottom-5 left-5 bg-black/50 p-3 sm:p-4 rounded-xl max-w-full sm:max-w-lg md:max-w-2xl">
              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                {currentVideo.title}
              </h2>
              <p className="text-white/80 text-xs sm:text-sm md:text-base sm:truncate">{currentVideo.desc}</p>
            </div>
          </Link>

          {/* 🔄 Refresh */}
          <div className='absolute top-3 left-3'>
            <button
              className='border border-white/25 p-2 sm:p-3 rounded-full bg-white/25 hover:bg-white/35 transition-all duration-200'
              onClick={handleRefresh}
            >
              <img width={24} sm={32} src={images.refreshicon} alt="refresh" />
            </button>
          </div>

          {/* 🔊 Mute */}
          <div className='absolute top-3 right-3'>
            <button
              className='border border-white/25 p-2 sm:p-3 rounded-full bg-white/25 hover:bg-white/35 transition-all duration-200'
              onClick={toggleMute}
            >
              <img
                width={24} 
                height={24} 
                src={isMuted ? images.mutedicon : images.voiseicon}
                alt="sound control"
              />
            </button>
          </div>
        </section>
      )}

      <Anime />
      <Multfilm />

      {/* Ko‘proq ko‘rsatish tugmasi */}
      <div className="flex justify-center mt-8">
        <button className='w-full max-sm:w-auto max-w-3xl px-5 py-2 border rounded-lg text-center hover:bg-white/15 hover:border-white/15 transition-all duration-200'>
          <span className='font-semibold text-lg text-white'>Ko‘proq Ko‘rsatish</span>
        </button>
      </div>
    </section>
  )
}

export default Home
