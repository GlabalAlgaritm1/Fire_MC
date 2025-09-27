// FilmDetail.jsx
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { data, FilmData, images } from '../data'
import Breadcrumb from '../components/Breadcrumb'

const FilmDetail = () => {
    const { id } = useParams()
    const film = FilmData.find((item) => item.id === id)
    const [mainImage, setMainImage] = useState(film?.scanes[0])
    const [isFullscreenMode, setIsFullscreenMode] = useState(false) // rasm balandligi
    const [isModalOpen, setIsModalOpen] = useState(false) // modalni ochish

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

    return (
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
    )
}

export default FilmDetail
