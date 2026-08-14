import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Maximize2, X, Image as ImageIcon, Sparkles } from 'lucide-react';

import grpImage1 from '../assets/grp-image1.jpg';
import groupPhoto1 from '../assets/group_photo1.jpg';
import groupPhoto2 from '../assets/group_photo2.jpg';
import groupPhoto3 from '../assets/group_photo3.jpg.png';
import groupPhoto4 from '../assets/group_photo4.jpeg';
import b1Img from '../assets/b1.jpg';
import b2Img from '../assets/b2.jpg';
import b3Img from '../assets/b3.jpg';
import b4Img from '../assets/b4.jpg';
import b5Img from '../assets/b5.jpg';
import a2Img from '../assets/a2.jpeg';
import a3Img from '../assets/a3.jpeg';
import a7Img from '../assets/a7.jpeg';
import a8Img from '../assets/a8.jpeg';
import a9Img from '../assets/a9.jpeg';
import labImage1 from '../assets/lab-image1.jpg';

const galleryImages = [
    { id: 1, src: grpImage1 },
    { id: 2, src: groupPhoto1 },
    { id: 3, src: groupPhoto2 },
    { id: 4, src: groupPhoto3 },
    { id: 5, src: groupPhoto4 },
    { id: 6, src: labImage1 },
    { id: 7, src: b1Img },
    { id: 8, src: b2Img },
    { id: 9, src: b3Img },
    { id: 10, src: b4Img },
    { id: 11, src: b5Img },
    { id: 12, src: a2Img },
    { id: 13, src: a3Img },
    { id: 14, src: a7Img },
    { id: 15, src: a8Img },
    { id: 16, src: a9Img },
];

const Gallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [lightboxImage, setLightboxImage] = useState(null);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
    }, []);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    }, []);

    useEffect(() => {
        if (!isPlaying) return;
        const timer = setInterval(() => {
            nextSlide();
        }, 4500);
        return () => clearInterval(timer);
    }, [isPlaying, nextSlide]);

    return (
        <div className="min-h-screen bg-slate-50 py-10 space-y-12">
            {/* Header / Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-800 relative overflow-hidden mb-10">
                    <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="relative z-10 max-w-3xl">
                        <div className="inline-flex items-center space-x-2 bg-slate-800/80 border border-slate-700 rounded-full px-4 py-1.5 mb-6 text-sm text-teal-400">
                            <Sparkles className="h-4 w-4" />
                            <span>Photo Gallery & Life at Lab</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                            Lab Gallery
                        </h1>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            A glimpse into our lab life, annual group photos, conference presentations, research discussions, and celebratory milestones at Shiv Nadar Institution of Eminence.
                        </p>
                    </div>
                </div>

                {/* Main Slideshow Showcase */}
                <div className="bg-white rounded-2xl p-4 sm:p-6 md:p-8 shadow-md border border-slate-200/80 mb-12">
                    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[600px] rounded-xl overflow-hidden bg-slate-950 shadow-inner group flex items-center justify-center">
                        {galleryImages.map((image, index) => (
                            <div
                                key={image.id}
                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex items-center justify-center ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                                    }`}
                            >
                                {/* Blurred subtle backdrop for ultra-clean letterbox */}
                                <img
                                    src={image.src}
                                    alt=""
                                    aria-hidden="true"
                                    className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-25 scale-110"
                                />

                                {/* Complete uncropped image */}
                                <img
                                    src={image.src}
                                    alt={`Lab Gallery Photo ${image.id}`}
                                    className="relative z-10 w-full h-full object-contain p-2 sm:p-4"
                                />
                            </div>
                        ))}

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all hover:scale-110"
                            aria-label="Previous Slide"
                        >
                            <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-40 p-2 sm:p-2.5 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-all hover:scale-110"
                            aria-label="Next Slide"
                        >
                            <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
                        </button>

                        {/* Controls (Play/Pause, Fullscreen) */}
                        <div className="absolute top-4 right-4 z-40 flex items-center space-x-2">
                            <button
                                onClick={() => setIsPlaying(!isPlaying)}
                                className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-colors"
                                title={isPlaying ? 'Pause Slideshow' : 'Play Slideshow'}
                            >
                                {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                            </button>
                            <button
                                onClick={() => setLightboxImage(galleryImages[currentIndex])}
                                className="p-2 rounded-full bg-black/50 hover:bg-black/80 text-white backdrop-blur-sm transition-colors"
                                title="View Fullscreen"
                            >
                                <Maximize2 className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Thumbnail Strip */}
                    <div className="flex items-center justify-start sm:justify-center gap-2 sm:gap-3 overflow-x-auto py-4 px-2 mt-4 no-scrollbar">
                        {galleryImages.map((image, index) => (
                            <button
                                key={image.id}
                                onClick={() => {
                                    setCurrentIndex(index);
                                    setIsPlaying(false);
                                }}
                                className={`relative flex-shrink-0 w-16 h-12 sm:w-24 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${index === currentIndex
                                    ? 'border-teal-500 scale-105 shadow-md ring-2 ring-teal-400/40'
                                    : 'border-transparent opacity-60 hover:opacity-100'
                                    }`}
                            >
                                <img
                                    src={image.src}
                                    alt={`Thumbnail ${image.id}`}
                                    className="w-full h-full object-cover"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Photo Grid Collection */}
                <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                        <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                            <ImageIcon className="h-6 w-6 text-teal-600 mr-2" />
                            All Lab Photographs
                        </h2>
                        <span className="text-sm text-slate-500 font-medium">
                            {galleryImages.length} Photographs
                        </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {galleryImages.map((image) => (
                            <div
                                key={image.id}
                                onClick={() => setLightboxImage(image)}
                                className="group relative bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/80 transition-all duration-300 cursor-pointer aspect-[4/3] flex items-center justify-center"
                            >
                                <img
                                    src={image.src}
                                    alt={`Lab Photograph ${image.id}`}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                    <Maximize2 className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-md" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Fullscreen Lightbox Modal */}
            {lightboxImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                    onClick={() => setLightboxImage(null)}
                >
                    <div
                        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setLightboxImage(null)}
                            className="absolute -top-12 right-0 p-2 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                            aria-label="Close Lightbox"
                        >
                            <X className="h-6 w-6" />
                        </button>
                        <img
                            src={lightboxImage.src}
                            alt="Lab Photograph Fullscreen"
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
