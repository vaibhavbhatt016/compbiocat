import { useState } from 'react';
import { Calendar, ChevronRight, Sparkles, X } from 'lucide-react';
import { newsData } from '../data/newsData';

const News = () => {
    const [activeModalItem, setActiveModalItem] = useState(null);

    const featuredItems = newsData.filter(item => item.featured);

    return (
        <div className="min-h-screen bg-slate-50 py-10">
            {/* Header / Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-900 text-white rounded-2xl p-8 md:p-12 shadow-xl border border-slate-800 relative overflow-hidden mb-12">
                    <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="relative z-10 max-w-3xl">
                        <div className="inline-flex items-center space-x-2 bg-slate-800/80 border border-slate-700 rounded-full px-4 py-1.5 mb-6 text-sm text-teal-400">
                            <Sparkles className="h-4 w-4" />
                            <span>Latest Updates & Announcements</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                            Lab News & Media
                        </h1>
                        <p className="text-lg text-slate-300 leading-relaxed">
                            Stay up to date with our recent research publications, conference participation, team achievements, and lab events.
                        </p>
                    </div>
                </div>

                {/* Featured News Spotlight */}
                {featuredItems.length > 0 && (
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                            <Sparkles className="h-6 w-6 text-teal-600 mr-2" />
                            Featured Headlines
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {featuredItems.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 overflow-hidden flex flex-col justify-between group"
                                >
                                    <div className="p-6 md:p-8">
                                        <div className="flex items-center justify-between mb-4">
                                            <div className="flex items-center text-xs text-slate-500 font-medium">
                                                <Calendar className="h-3.5 w-3.5 mr-1 text-teal-600" />
                                                {item.date}
                                            </div>
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-600 transition-colors mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                            {item.summary}
                                        </p>
                                    </div>
                                    <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                                        <span className="text-xs text-slate-500">By {item.author}</span>
                                        <button
                                            onClick={() => setActiveModalItem(item)}
                                            className="inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                                        >
                                            Read Announcement
                                            <ChevronRight className="h-4 w-4 ml-1" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* News List */}
                <div className="space-y-6">
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">
                        All Announcements
                    </h2>
                    {newsData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 flex flex-col md:flex-row md:items-center justify-between gap-6"
                        >
                            <div className="space-y-2 flex-1">
                                <div className="flex items-center text-xs text-slate-500 font-medium">
                                    <Calendar className="h-3.5 w-3.5 mr-1 text-teal-600" />
                                    {item.date}
                                </div>
                                <h3
                                    className="text-lg font-bold text-slate-900 hover:text-teal-600 transition-colors cursor-pointer"
                                    onClick={() => setActiveModalItem(item)}
                                >
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 text-sm line-clamp-2">
                                    {item.summary}
                                </p>
                            </div>
                            <div className="flex md:flex-col items-center justify-between md:justify-center border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6 gap-3 min-w-[140px]">
                                <button
                                    onClick={() => setActiveModalItem(item)}
                                    className="w-full text-center px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-sm"
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* News Detail Modal */}
            {activeModalItem && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
                        <button
                            onClick={() => setActiveModalItem(null)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
                        >
                            <X className="h-6 w-6" />
                        </button>
                        <div className="flex items-center text-xs text-slate-500 font-medium mb-4">
                            <Calendar className="h-3.5 w-3.5 mr-1 text-teal-600" />
                            {activeModalItem.date}
                        </div>
                        <h2 className="text-2xl font-bold text-slate-900 mb-4">
                            {activeModalItem.title}
                        </h2>
                        <div className="prose prose-slate max-w-none text-slate-700 text-sm leading-relaxed space-y-4 mb-6">
                            <p>{activeModalItem.content}</p>
                        </div>
                        <div className="flex justify-between items-center border-t border-slate-100 pt-4">
                            <span className="text-xs text-slate-500">By {activeModalItem.author}</span>
                            <button
                                onClick={() => setActiveModalItem(null)}
                                className="px-5 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors"
                            >
                                Close Announcement
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default News;
