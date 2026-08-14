import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
// Actually, I should check if react-markdown is installed. If not, I'll use simple rendering for now.
// Checking package.json would be good, but to save a round trip I'll just render text with newlines for now or use dangerouslySetInnerHTML if I trust the source (I do, I wrote it).
// Better approach: straightforward rendering, parsing by newlines for paragraphs.

const ResearchDetail = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold text-slate-700 mb-4">Project Not Found</h2>
                <Link to="/research" className="text-science-blue hover:underline">
                    Back to Research
                </Link>
            </div>
        );
    }

    // Simple markdown-like parser for the description with elegant styling
    const renderContent = (text) => {
        let isFirstParagraph = true;
        return text.split('\n').map((line, index) => {
            const trimmed = line.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith('# ')) {
                return (
                    <h1 key={index} className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2 mb-6 border-b border-slate-200/80 pb-4 tracking-tight">
                        {trimmed.substring(2)}
                    </h1>
                );
            }
            if (trimmed.startsWith('## ')) {
                return (
                    <h2 key={index} className="text-xl sm:text-2xl font-bold text-science-blue mt-8 mb-4 flex items-center gap-2.5">
                        <span className="w-1.5 h-6 bg-science-teal rounded-full inline-block"></span>
                        {trimmed.substring(3)}
                    </h2>
                );
            }
            if (trimmed.startsWith('### ')) {
                return (
                    <h3 key={index} className="text-lg font-semibold text-slate-800 mt-6 mb-3">
                        {trimmed.substring(4)}
                    </h3>
                );
            }
            if (trimmed.startsWith('**Core Themes:**') || trimmed.startsWith('**Core themes:**') || trimmed.startsWith('Core Themes:') || trimmed.startsWith('Core themes:')) {
                const rawThemes = trimmed.includes(':') ? trimmed.substring(trimmed.indexOf(':') + 1) : trimmed;
                const themes = rawThemes.split('•').map(t => t.replace(/\*\*/g, '').trim()).filter(Boolean);
                return (
                    <div key={index} className="my-6 p-5 bg-slate-50 border border-slate-200/80 rounded-xl shadow-xs">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-science-blue mb-3 flex items-center gap-2">
                            <svg className="w-4 h-4 text-science-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                            </svg>
                            Core Themes
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {themes.map((theme, i) => (
                                <span key={i} className="inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium bg-teal-50 text-teal-800 border border-teal-200/70 shadow-2xs">
                                    {theme}
                                </span>
                            ))}
                        </div>
                    </div>
                );
            }
            if (trimmed.startsWith('> ')) {
                const quoteText = trimmed.substring(2);
                return (
                    <blockquote key={index} className="my-6 p-5 bg-teal-50/60 border-l-4 border-science-teal rounded-r-lg text-slate-800 text-lg leading-relaxed italic shadow-xs">
                        "{quoteText}"
                    </blockquote>
                );
            }
            if (trimmed.startsWith('---')) {
                return <hr key={index} className="my-8 border-slate-200" />;
            }
            if (trimmed.startsWith('- ')) {
                const content = trimmed.substring(2);
                const parts = content.split(/(\*\*.*?\*\*)/g);
                return (
                    <div key={index} className="flex items-start ml-2 sm:ml-4 mb-3 group">
                        <span className="mr-3 text-science-teal mt-1.5 flex-shrink-0">
                            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                                <circle cx="10" cy="10" r="4" />
                            </svg>
                        </span>
                        <div className="text-slate-700 leading-relaxed text-base sm:text-lg">
                            {parts.map((part, i) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                    return <strong key={i} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
                                }
                                return part;
                            })}
                        </div>
                    </div>
                );
            }

            // Lead paragraph vs body paragraphs
            const parts = trimmed.split(/(\*\*.*?\*\*)/g);
            if (isFirstParagraph) {
                isFirstParagraph = false;
                return (
                    <div key={index} className="my-6 p-6 bg-slate-50 border-l-4 border-science-blue rounded-r-xl shadow-xs">
                        <p className="text-slate-800 text-base sm:text-lg leading-relaxed font-medium">
                            {parts.map((part, i) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                    return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
                                }
                                return part;
                            })}
                        </p>
                    </div>
                );
            }

            return (
                <p key={index} className="mb-5 text-slate-700 leading-relaxed text-base sm:text-lg">
                    {parts.map((part, i) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={i} className="font-semibold text-slate-900">{part.slice(2, -2)}</strong>;
                        }
                        return part;
                    })}
                </p>
            );
        });
    };

    return (
        <div className="max-w-4xl mx-auto">
            <Link to="/research" className="inline-flex items-center text-slate-500 hover:text-science-blue mb-6 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
                Back to Research Projects
            </Link>

            <div className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden p-8">
                {/* Project Banner Image */}
                {project.images && project.images.length > 1 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full bg-white rounded-lg mb-8 p-4 shadow-sm border border-slate-100">
                        {project.images.map((img, idx) => (
                            <div key={idx} className="h-64 sm:h-80 w-full flex items-center justify-center overflow-hidden">
                                <img
                                    src={img}
                                    alt={`${project.title} ${idx + 1}`}
                                    className="w-full h-full object-contain bg-white"
                                />
                            </div>
                        ))}
                    </div>
                ) : project.image && (
                    <div className="h-64 sm:h-80 md:h-96 w-full bg-white rounded-lg mb-8 overflow-hidden relative shadow-sm border border-slate-100 flex items-center justify-center p-4">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-contain bg-white"
                        />
                    </div>
                )}

                <div className="prose prose-slate max-w-none">
                    {renderContent(project.fullDescription)}
                </div>
            </div>
        </div>
    );
};

export default ResearchDetail;
