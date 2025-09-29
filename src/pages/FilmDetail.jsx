// FilmDetail.jsx
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { data, FilmData, images } from '../data'
import Breadcrumb from '../components/Breadcrumb'

const FilmDetail = () => {
    const { id } = useParams()
    const film = FilmData.find((item) => item.id === id)
    const [mainImage, setMainImage] = useState(film?.scanes[0])
    const [isFullscreenMode, setIsFullscreenMode] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isFavourite, setIsFavourite] = useState(false)

    // ✅ Share modal uchun state
    const [shareModal, setShareModal] = useState(false)
    const [shareVisible, setShareVisible] = useState(false)
    const [shareAnimateIn, setShareAnimateIn] = useState(false)

    useEffect(() => {
        const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || []
        const exists = storedFavourites.some(f => f.id === film?.id)
        setIsFavourite(exists)
    }, [film?.id])

    if (!film) {
        return <p className="text-white text-center mt-10">Film topilmadi 😢</p>
    }

    const handlePrev = () => {
        const currentIndex = film.scanes.indexOf(mainImage)
        const prevIndex = currentIndex === 0 ? film.scanes.length - 1 : currentIndex - 1
        setMainImage(film.scanes[prevIndex])
    }

    const handleNext = () => {
        const currentIndex = film.scanes.indexOf(mainImage)
        const nextIndex = currentIndex === film.scanes.length - 1 ? 0 : currentIndex + 1
        setMainImage(film.scanes[nextIndex])
    }

    const toggleFullscreenMode = () => {
        setIsFullscreenMode(!isFullscreenMode)
    }

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const currentIndex = film.scanes.indexOf(mainImage) + 1

    const toggleFavourite = () => {
        const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || []
        const exists = storedFavourites.some(f => f.id === film.id)

        if (!exists) {
            // faqat kerakli maydonlarni saqlaymiz
            const filmData = {
                id: film.id,
                title: film.title,
                card1: film.card1,
                year: film.year,
                click: film.click,
            }
            const updatedFavourites = [...storedFavourites, filmData]
            localStorage.setItem("favourites", JSON.stringify(updatedFavourites))
            setIsFavourite(true)
        } else {
            const updatedFavourites = storedFavourites.filter(f => f.id !== film.id)
            localStorage.setItem("favourites", JSON.stringify(updatedFavourites))
            setIsFavourite(false)
        }
    }

    // ✅ Share modal animatsiya
    useEffect(() => {
        if (shareModal) {
            setShareVisible(true)
            requestAnimationFrame(() => setShareAnimateIn(true))
        } else {
            setShareAnimateIn(false)
            const timer = setTimeout(() => setShareVisible(false), 300)
            return () => clearTimeout(timer)
        }
    }, [shareModal])

    return (
        <>
            <section >
                <video poster={film.card1} className='w-full h-[90vh] relative' controls src={film.film}></video>
                <div className="absolute w-full h-[99vh] bg-gray-600/65 top-0">
                    <p className='absolute left-3 top-[450px] z-40 text-3xl'>
                        {film.title}
                    </p>
                    <button className='absolute left-3 top-[520px] z-40 border border-blue-500/75 bg-blue-500/75 px-10 py-2 rounded-lg hover:bg-blue-500 hover:transition-all hover:duration-300'>
                        <span className='font-semibold text-white'>
                            Ko'rish
                        </span>
                    </button>

                    {/* ✅ Favourite tugma */}
                    <button
                        onClick={toggleFavourite}
                        className='absolute left-[150px] top-[520px] z-40 border border-blue-500/75 bg-blue-500/75 px-3 py-1 rounded-lg hover:bg-blue-500 hover:transition-all hover:duration-300'>
                        <img
                            width={32}
                            height={32}
                            src={isFavourite ? images.activefavouriteicon : images.favouriteicon}
                            alt="Favourite"
                        />
                    </button>

                    {/* ✅ Share button */}
                    <button
                        onClick={() => setShareModal(true)}
                        className='absolute left-[215px] top-[520px] z-40 border border-blue-500/75 bg-blue-500/75 px-3 py-1 rounded-lg hover:bg-blue-500 hover:transition-all hover:duration-300'>
                        <img width={32} height={32} src={images.shareicon} alt="Share" />
                    </button>
                </div>
            </section>

            <section className={`${data.Container}`}>
                <Breadcrumb />

                {/* Film info */}
                <div className="flex gap-8 items-start mt-8">
                    <img
                        src={film.card1}
                        alt={film.title}
                        className="w-full max-w-[250px] h-[350px] object-cover rounded-lg cursor-pointer"
                        onClick={openModal}
                    />
                    <div>
                        <h1 className="text-3xl font-bold mb-3">{film.title}</h1>
                        <p className="text-lg text-gray-300 mb-2 max-w-2xl">{film.desc}</p>
                        <p><span className="font-semibold">Chiqqan yil:</span> {film.date}</p>
                        <p><span className="font-semibold">Sifat:</span> {film.quality}</p>
                    </div>
                </div>

                {/* Main image with thumbnails */}
                <div className="mt-5 relative w-full max-w-[450px]">
                    <img
                        src={mainImage}
                        alt={film.title}
                        className="w-full h-[280px] object-cover rounded-lg cursor-pointer"
                        onClick={openModal}
                    />
                    <div className="absolute left-[158px] -translate-x-1/2 -translate-y-1/2 flex gap-2 z-20">
                        {film.scanes.map((scene, index) => (
                            <img
                                key={scene}
                                src={scene}
                                alt={`${film.title} scene ${index + 1}`}
                                className={`w-20 h-14 object-cover rounded-md border-2 cursor-pointer ${mainImage === scene ? 'border-red-500' : 'border-transparent'
                                    }`}
                                onClick={() => setMainImage(scene)}
                            />
                        ))}
                    </div>
                </div>

                {/* Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                        {/* Prev button */}
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2"
                            onClick={handlePrev}>
                            <img className='border border-white/20 bg-white/20 p-1 rounded-full' width={42} height={42} src={images.prewicon} alt="Prev" />
                        </button>

                        {/* Main image */}
                        <img
                            src={mainImage}
                            alt={film.title}
                            className={`object-contain rounded-lg ${isFullscreenMode ? 'w-full h-[95vh]' : 'h-[85vh]'}`}
                        />

                        {/* Next button */}
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/4"
                            onClick={handleNext}>
                            <img className='border border-white/20 bg-white/20 p-1 rounded-full' width={42} height={42} src={images.nexticon} alt="Next" />
                        </button>

                        {/* Fullscreen / Exit fullscreen */}
                        <button
                            className='absolute top-5 right-5'
                            onClick={toggleFullscreenMode}>
                            <img
                                className='border border-white/20 bg-white/20 p-1 rounded-lg'
                                width={42}
                                height={42}
                                src={isFullscreenMode ? images.exitscreenicon : images.fullscreenicon}
                                alt="Fullscreen / Exit"
                            />
                        </button>

                        {/* Close modal */}
                        <button
                            className='absolute top-16 right-5'
                            onClick={closeModal}>
                            <img
                                className='border border-white/20 bg-white/20 p-1 rounded-lg'
                                width={42}
                                height={42}
                                src={images.close}
                                alt="Close"
                            />
                        </button>

                        {/* Image counter */}
                        <div className='absolute bottom-8 text-white text-lg bg-black/40 px-4 py-1 rounded-lg'>
                            {currentIndex} / {film.scanes.length}
                        </div>
                    </div>
                )}
            </section>

            {/* ✅ Share Modal */}
            {shareVisible && (
                <>
                    <div
                        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${shareAnimateIn ? "opacity-100" : "opacity-0"}`}
                        onClick={() => setShareModal(false)}
                    ></div>

                    <div className={`fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-xs h-[290px] bg-[#1e1e1e] rounded-t-2xl shadow-lg p-6 text-white z-50
            transform transition-all duration-300 ${shareAnimateIn ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}`}>

                        <h2 className="text-lg font-semibold mb-4">Ulashish</h2>
                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => window.open(`https://t.me/share/url?url=${window.location.href}`, "_blank")}
                                className="py-2 rounded-lg bg-blue-600/70 hover:bg-blue-600 font-semibold"
                            >
                                Telegram
                            </button>
                            <button
                                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, "_blank")}
                                className="py-2 rounded-lg bg-blue-800/70 hover:bg-blue-800 font-semibold"
                            >
                                Facebook
                            </button>
                            <button
                                onClick={() => { navigator.clipboard.writeText(window.location.href) }}
                                className="py-2 rounded-lg bg-gray-700 hover:bg-gray-600 font-semibold"
                            >
                                Havolani nusxalash
                            </button>
                            <button
                                onClick={() => setShareModal(false)}
                                className="bg-white/5 py-2 rounded-lg text-lg font-semibold hover:bg-white/15"
                            >
                                Yopish
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default FilmDetail
