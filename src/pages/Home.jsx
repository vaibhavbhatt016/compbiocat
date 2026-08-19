import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';
import grpPhotoUpdated from '../assets/grp_photo_updated.jpg';
import labLogo from '../assets/lab-logo.png';
import reactionVideo from '../assets/reaction_10s.mp4';
import cytochromeVideo from '../assets/cytochrome.mp4';
import dnaVideo from '../assets/dna.mp4';

const homeMedia = [
    {
        type: "video",
        src: reactionVideo,
        alt: "Enzymatic Reaction Dynamics Simulation"
    },
    {
        type: "video",
        src: cytochromeVideo,
        alt: "Cytochrome Dynamics Simulation"
    },
    {
        type: "video",
        src: dnaVideo,
        alt: "DNA Dynamics Simulation"
    }
];

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        if (homeMedia.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % homeMedia.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-slate-900 py-12 md:py-20 shadow-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
                        {/* Text Content - Bio */}
                        <div className="w-full lg:w-3/5 space-y-5 text-left flex flex-col justify-center">
                            <h1 className="text-2xl md:text-3xl font-extrabold text-teal-400 tracking-tight leading-tight">
                                Understanding, Predicting and Engineering Molecular Function
                            </h1>
                            <div className="space-y-4 text-slate-200 text-sm md:text-base leading-relaxed">
                                <p>
                                    We investigate enzymatic reactions at the molecular and electronic levels using <strong className="text-white font-semibold">hybrid QM/MM and quantum-chemical approaches</strong> to elucidate reaction pathways, reactive intermediates, proton and electron transfer, hydrogen-atom transfer, spin-state changes, and complex metal–oxygen chemistry. Particular emphasis is placed on <strong className="text-white font-semibold">Cytochrome P450s</strong>, where we examine how protein dynamics, solvent, electrostatics, and active-site architecture govern catalytic reactivity and reaction mechanisms.
                                </p>
                                <p>
                                    Our mechanistic understanding also guides the <strong className="text-white font-semibold">rational design and engineering of enzymes</strong>, including active-site redesign, substrate specificity, stability, and catalytic function.
                                </p>
                                <p>
                                    Cytochrome P450s provide a powerful framework for our broader investigation of how <strong className="text-white font-semibold">protein structure and dynamics control chemical reactivity and biological function</strong>. Their remarkable diversity in molecular recognition, oxygen activation, and selective C–H functionalization enables us to explore fundamental principles of enzymatic catalysis across a wide range of biological and chemical transformations.
                                </p>
                            </div>
                        </div>

                        {/* Right Side: Circular Logo and Carousel */}
                        <div className="w-full lg:w-2/5 flex flex-col items-center justify-center gap-5 py-2 my-auto">
                            {/* Circular Lab Logo */}
                            <div className="w-56 h-56 sm:w-60 sm:h-60 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl border-4 border-slate-700 bg-white p-3 flex items-center justify-center flex-shrink-0 hover:scale-105 transition-transform duration-500">
                                <img
                                    src={labLogo}
                                    alt="Computational Biocatalysis Lab Logo"
                                    className="w-full h-full object-contain rounded-full"
                                />
                            </div>

                            {/* Video / Media Carousel */}
                            <div className="w-full relative h-56 sm:h-60 md:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700 bg-slate-950 flex items-center justify-center">
                                {homeMedia.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out flex items-center justify-center ${index === currentImageIndex ? 'opacity-100' : 'opacity-0 pointer-events-none'
                                            }`}
                                    >
                                        {item.type === 'video' ? (
                                            <video
                                                src={item.src}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <img
                                                src={item.src}
                                                alt={item.alt}
                                                className="w-full h-full object-cover"
                                            />
                                        )}
                                    </div>
                                ))}

                                {/* Carousel Indicators */}
                                {homeMedia.length > 1 && (
                                    <div className="absolute bottom-2.5 left-0 right-0 flex justify-center gap-2 z-10">
                                        {homeMedia.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentImageIndex(index)}
                                                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white w-6' : 'bg-white/40 w-2'
                                                    }`}
                                                aria-label={`Go to slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Computational Biocatalysis Group Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <section className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                    <h2 className="text-2xl font-bold text-science-blue mb-6 flex items-center justify-center">
                        <span className="bg-science-teal w-2 h-8 mr-3 rounded-sm"></span>
                        Computational Biocatalysis Group
                    </h2>
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-md bg-slate-100">
                        <img
                            src={grpPhotoUpdated}
                            alt="Computational Biocatalysis Group"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </section>
            </div>

            {/* News Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <section className="bg-white p-8 rounded-lg shadow-sm border border-slate-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl font-bold text-slate-800 flex items-center">
                            <span className="bg-teal-600 w-2 h-8 mr-3 rounded-sm"></span>
                            Latest News
                        </h2>
                        <Link
                            to="/news"
                            className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors flex items-center gap-1"
                        >
                            View All News &rarr;
                        </Link>
                    </div>
                    <div className="space-y-4">
                        {newsData.slice(0, 4).map((item) => (
                            <div key={item.id} className="p-4 border-l-4 border-slate-200 hover:border-teal-500 transition-colors">
                                <div className="text-xs text-slate-500 mb-1">{item.date}</div>
                                <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                                <p className="text-sm text-slate-600 mt-1 line-clamp-1">{item.summary}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
