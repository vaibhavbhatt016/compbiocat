import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-12">
                <h1 className="text-3xl font-bold text-science-blue mb-2">Contact Us</h1>
                <p className="text-slate-600 border-b border-slate-200 pb-4">
                    Get in touch with us for collaborations, inquiries, and opportunities.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h2>
                    <div className="space-y-6">
                        <div className="flex items-start">
                            <Mail className="h-6 w-6 text-science-teal mt-1 mr-4 shrink-0" />
                            <div>
                                <h3 className="font-semibold text-slate-900">Email</h3>
                                <a 
                                    href="mailto:kshatresh.dubey@snu.edu.in" 
                                    className="text-slate-600 hover:text-science-teal hover:underline font-medium transition-colors block mt-0.5"
                                >
                                    kshatresh.dubey@snu.edu.in
                                </a>
                                <p className="text-sm text-slate-500 mt-1">For general inquiries and collaborations</p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <MapPin className="h-6 w-6 text-science-teal mt-1 mr-4" />
                            <div>
                                <h3 className="font-semibold text-slate-900">Lab Location</h3>
                                <p className="text-slate-600">
                                    A Block, Room A104<br />
                                    Shiv Nadar Institution of Eminence<br />
                                    NH91, Dadri, Gautam Buddha Nagar, Uttar Pradesh 201314.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interactive Map */}
                <div className="w-full h-80 md:h-full min-h-[300px] rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d736.929506298878!2d77.57648139417233!3d28.526273650494197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMxJzM2LjciTiA3N8KwMzQnMzcuMiJF!5e0!3m2!1sen!2sin!4v1786373530708!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin"
                        title="Lab Location Map"
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
