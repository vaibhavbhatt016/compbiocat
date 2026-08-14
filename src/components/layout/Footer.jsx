import { Mail, MapPin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-8 mt-auto border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Computational Biocatalysis Lab</h3>
                        <p className="text-sm text-slate-400">
                            Department of Chemistry<br />
                            Shiv Nadar Institution of Eminence (Deemed to be University)<br />
                            NH91, Tehsil Dadri, Greater Noida, Uttar Pradesh 201314
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span>A Block, Room A104</span>
                            </div>
                            <div className="flex items-center">
                                <Mail className="h-4 w-4 mr-2 text-science-teal" />
                                <a href="mailto:kshatresh.dubey@snu.edu.in" className="hover:text-science-teal transition-colors">
                                    kshatresh.dubey@snu.edu.in
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-science-teal transition-colors">
                                <Github className="h-6 w-6" />
                            </a>
                            {/* Add more social icons as needed */}
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500 space-y-1.5">
                    <p>© {new Date().getFullYear()} Computational Biocatalysis Lab. All rights reserved.</p>
                    <p className="text-xs text-slate-400">Maintained by Vaibhav Bhatt</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
