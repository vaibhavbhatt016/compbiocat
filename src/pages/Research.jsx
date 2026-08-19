import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Research = () => {
    return (
        <div className="space-y-8 pb-8">
            <h1 className="text-3xl font-bold text-science-blue border-b border-slate-200 pb-4">Research Areas</h1>
            
            {/* Synthesis Quote Banner */}
            <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-science-blue to-slate-900 rounded-2xl p-8 md:p-10 shadow-lg text-white border border-slate-700/50">
                <div className="absolute top-0 right-0 -mt-8 -mr-8 w-48 h-48 bg-science-teal/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-3">
                    <span className="inline-block px-3.5 py-1 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-widest text-teal-300 border border-white/15">
                        Integrated Research Vision
                    </span>
                    <p className="text-lg md:text-xl font-medium leading-relaxed text-slate-100 italic">
                        "Our research integrates molecular structure, dynamics, electrostatics, and quantum chemistry to understand, predict, and ultimately engineer enzymatic function."
                    </p>
                </div>
            </div>

            {/* 4 Research Area Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                {projects.map((project) => (
                    <Link
                        to={`/research/${project.id}`}
                        key={project.id}
                        className="group flex flex-col bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-all cursor-pointer"
                    >
                        <div className="h-52 bg-white overflow-hidden relative flex items-center justify-center border-b border-slate-100 flex-shrink-0">
                            {project.images && project.images.length > 1 ? (
                                <div className="flex h-full w-full items-center justify-center gap-2 p-2 bg-white">
                                    {project.images.map((img, idx) => (
                                        <img
                                            key={idx}
                                            src={img}
                                            alt={`${project.title} ${idx + 1}`}
                                            className="w-1/2 h-full object-contain bg-white group-hover:scale-105 transition-transform duration-500"
                                        />
                                    ))}
                                </div>
                            ) : project.image ? (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-contain bg-white p-2 group-hover:scale-105 transition-transform duration-500"
                                />
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-slate-800 to-slate-900 text-slate-400 p-4 text-center">
                                    <svg className="w-10 h-10 mb-2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"></path>
                                    </svg>
                                    <span className="text-sm font-medium text-slate-300">{project.title}</span>
                                </div>
                            )}
                        </div>
                        <div className="p-6 flex flex-col flex-1 justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-science-blue mb-2 group-hover:text-science-teal transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                            <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs md:text-sm font-semibold text-teal-700 bg-teal-50 group-hover:bg-teal-600 group-hover:text-white rounded-lg transition-all duration-200">
                                    Read More
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Research;
