import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { newsData } from '../data/newsData';
import grpImage1 from '../assets/grp-image1.jpg';

const homeImages = [
    {
        src: "/md-water.gif",
        alt: "Molecular Dynamics of Water"
    },
    {
        src: "/calmodulin.gif",
        alt: "Calmodulin Conformation Change"
    }
];

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % homeImages.length);
        }, 3690);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-slate-900 py-16 md:py-24 shadow-xl">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
                        {/* Text Content - 66% width */}
                        <div className="w-full md:w-2/3 space-y-5 text-left">
                            <h1 className="text-2xl md:text-3xl font-extrabold text-teal-400 tracking-tight leading-tight">
                                Understanding, Predicting and Engineering Molecular Function
                            </h1>
                            <div className="space-y-4 text-slate-200 text-sm md:text-base leading-relaxed">
                                <p>
                                    Our laboratory investigates the molecular principles that govern protein structure, dynamics, electrostatics, and enzymatic catalysis. We combine computational structural biology, molecular simulations, quantum chemistry, and multiscale modelling to understand biological systems from the atomic to the electronic level.
                                </p>
                                <p>
                                    A central focus of our research is to uncover how the structure and dynamic behaviour of proteins shape their chemical reactivity and biological function. We study protein–ligand and protein–nucleic acid interactions, conformational dynamics, active-site architecture, mutation-induced changes, and long-range communication within biomolecules. Through the analysis of molecular and electric fields, we further investigate how the protein environment modulates molecular properties and guides chemical reactions.
                                </p>
                                <p>
                                    Our research extends from understanding naturally occurring enzymes to designing and engineering new catalytic functions. Using computationally guided approaches, we explore active-site redesign, substrate specificity, enzyme stability, and the molecular determinants of catalytic efficiency. QM/MM and quantum-chemical methods allow us to investigate reaction mechanisms, intermediates, transition states, proton and electron transfer, and complex redox chemistry at the heart of enzymatic catalysis.
                                </p>
                                <p>
                                    By integrating structure, dynamics, electrostatics, and electronic structure, our laboratory seeks to move beyond describing biological systems toward predicting and ultimately controlling molecular function. Our overarching goal is to develop a mechanistic understanding of enzymes that can guide the rational design of new and improved biological catalysts.
                                </p>
                            </div>
                        </div>

                        {/* Image Carousel - 35% width */}
                        <div className="w-full md:w-1/3 relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-700 self-start">
                            {homeImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                                        }`}
                                >
                                    <img
                                        src={image.src}
                                        alt={image.alt}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-4 pt-12 text-center text-sm font-medium">
                                        {image.alt}
                                    </div>
                                </div>
                            ))}

                            {/* Carousel Indicators */}
                            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
                                {homeImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImageIndex(index)}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${index === currentImageIndex ? 'bg-white w-6' : 'bg-white/40 w-2'
                                            }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
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
                            src={grpImage1}
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
