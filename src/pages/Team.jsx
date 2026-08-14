import { Mail, Linkedin } from 'lucide-react';
import piImage from '../assets/pi_image.jpg';
import subhasriImage from '../assets/Subhasri.jpeg';
import insanKhanImage from '../assets/insan-khan.JPG';

// Automatically detect member images in assets folder matching their first name (e.g., vaibhav.jpg, surajit.jpg, dinesh.webp)
const assetImages = import.meta.glob('../assets/*.{jpg,jpeg,png,webp,svg,JPG,JPEG,PNG}', { eager: true, import: 'default' });

const getMemberImage = (firstName) => {
    if (!firstName) return null;
    const lower = firstName.toLowerCase().trim();
    for (const path in assetImages) {
        const filename = path.split('/').pop().split('.')[0].toLowerCase().trim();
        if (filename === lower || filename.startsWith(lower) || lower.startsWith(filename)) {
            return assetImages[path];
        }
    }
    return null;
};

// Social media URLs - update hyperlinks when details are provided
const SOCIAL_LINKS = {
    x: "https://x.com/kshatresh?lang=en",
    linkedin: "https://www.linkedin.com/in/dr-kshatresh-dutta-dubey-42240a17/",
};

const XIcon = ({ size = 16, className = "" }) => (
    <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        className={className}
        aria-label="X (formerly Twitter)"
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const teamMembers = [
    { name: "Vaibhav Bhatt", firstName: "vaibhav", role: "Ph.D. Scholar", email: "vb147@snu.edu.in", x: "https://x.com/vaibhavbhatt314", linkedin: "https://www.linkedin.com/in/vaibhav-bhatt-70a73936/" },
    { name: "Dinesh Singh", firstName: "dinesh", role: "Ph.D. Scholar", email: "ds829@snu.edu.in", x: "https://x.com/Dineshsingh6666", linkedin: "https://www.linkedin.com/in/dinesh-singh-661945243/" },
    { name: "Epari Sai Santosh Kumar", firstName: "epari", role: "Ph.D. Scholar", email: "ek923@snu.edu.in", x: "#", linkedin: "#" },
    { name: "Subhasri Dan", firstName: "subhasri", image: subhasriImage, role: "Ph.D. Scholar", email: "sd433@snu.edu.in", x: "#", linkedin: "#" },
    { name: "Insan Khan", firstName: "insan-khan", image: insanKhanImage, role: "Postgraduate Student", email: "ik187@snu.edu.in", x: "#", linkedin: "#" },
    { name: "Harsh Agrawal", firstName: "harsh", role: "Undergraduate Student", email: "ha722@snu.edu.in", x: "#", linkedin: "#" },
    { name: "Ashar Hussain", firstName: "ashar", role: "Undergraduate Student", email: "ah992@snu.edu.in", x: "#", linkedin: "#" },
];

const alumni = [
    {
        name: "Dr. Surajit Kalita",
        firstName: "surajit",
        position: "Assistant Professor at Tezpur University, Tezpur, Assam, India."
    },
    {
        name: "Dr. Ankita Tripathi",
        firstName: "ankita",
        position: "Specialist – CADD at Aurigene (Dr. Reddy’s Laboratories), Bengaluru, Karnataka, India."
    },
    {
        name: "Dr. Shalini Yadav",
        firstName: "shalini",
        position: "Postdoc at Max-Planck Institut für kohlenforschung, Germany."
    },
    {
        name: "Dr. Shakir Ali Siddiqui",
        firstName: "shakir",
        position: "Postdoctoral Associate at University of Bristol, England, United Kingdom."
    },
    {
        name: "Dr. Vandana Kardam",
        firstName: "vandana",
        position: "Postdoc at Jeonbuk National University, South Korea."
    },
    {
        name: "Shruti TG",
        firstName: "shruti_tg",
        position: "MSc in Molecular Biology from International Max Planck Research School for Molecular Biology (MPI NAT), Göttingen, Germany."
    },
    {
        name: "Madhav Samanta",
        firstName: "madhav",
        position: "Ph.D Scholar at Heyrovský Institute of the Czech Academy of Sciences, Prague, Czechia"
    },
    {
        name: "Ria Singh",
        firstName: "ria-singh",
        position: "MSc in Chemistry at Delhi Technological University, New Delhi, India.",
        imagePosition: "object-top"
    },
];

const Team = () => {
    return (
        <div className="space-y-12">
            <h1 className="text-3xl font-bold text-science-blue border-b border-slate-200 pb-4">Our Team</h1>

            {/* Principal Investigator */}
            <section>
                <h2 className="text-2xl font-semibold text-slate-700 mb-6">Principal Investigator</h2>
                <div className="flex flex-col md:flex-row gap-8 items-start bg-white p-6 rounded-lg shadow-sm border border-slate-100">
                    <img
                        src={piImage}
                        alt="Dr. Kshatresh Dutta Dubey"
                        className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover flex-shrink-0 border-4 border-slate-50"
                    />
                    <div>
                        <h3 className="text-xl font-bold text-science-blue">Dr. Kshatresh Dutta Dubey</h3>
                        <p className="text-science-teal font-medium mb-4">Assistant Professor</p>
                        <p className="text-slate-600 mb-4">
                            Dr. Dubey leads the computational lab, focusing on multiscale modeling of complex biological systems.
                        </p>
                        <div className="flex flex-wrap items-center text-slate-500 gap-4 mt-2">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                                <div className="flex items-center gap-2">
                                    <Mail size={16} />
                                    <a href="mailto:kshatresh.dubey@snu.edu.in" className="hover:text-science-teal transition-colors">
                                        kshatresh.dubey@snu.edu.in
                                    </a>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Mail size={16} />
                                    <a href="mailto:kshatresh@gmail.com" className="hover:text-science-teal transition-colors">
                                        kshatresh@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 border-l border-slate-200 pl-4">
                                <a
                                    href={SOCIAL_LINKS.x}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-black transition-colors"
                                    title="X (formerly Twitter)"
                                >
                                    <XIcon size={14} />
                                </a>
                                <a
                                    href={SOCIAL_LINKS.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-blue-600 transition-colors"
                                    title="LinkedIn"
                                >
                                    <Linkedin size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lab Members */}
            <section>
                <h2 className="text-2xl font-semibold text-slate-700 mb-6">Lab Members</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamMembers.map((member, index) => {
                        const imgSrc = member.image || getMemberImage(member.firstName);
                        return (
                            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                                {imgSrc ? (
                                    <img
                                        src={imgSrc}
                                        alt={member.name}
                                        className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-slate-100 shadow-sm"
                                    />
                                ) : (
                                    <div className="w-24 h-24 bg-slate-200 rounded-full mb-4 flex items-center justify-center text-slate-400 font-semibold text-xl">
                                        {member.name.charAt(0)}
                                    </div>
                                )}
                                <h3 className="font-bold text-science-blue text-lg">{member.name}</h3>
                                <p className="text-science-teal font-medium text-sm mb-2">{member.role}</p>
                                <div className="flex flex-col items-center gap-2 mt-auto pt-2">
                                    <div className="flex items-center text-slate-500 gap-2 text-sm">
                                        <Mail size={14} />
                                        <span>{member.email}</span>
                                    </div>
                                    <div className="flex items-center gap-2 mt-1">
                                        <a
                                            href={member.x || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-black transition-colors"
                                            title={`${member.name} on X (formerly Twitter)`}
                                        >
                                            <XIcon size={14} />
                                        </a>
                                        <a
                                            href={member.linkedin || "#"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-blue-600 transition-colors"
                                            title={`${member.name} on LinkedIn`}
                                        >
                                            <Linkedin size={14} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Alumni */}
            <section>
                <h2 className="text-2xl font-semibold text-slate-700 mb-6">Alumni</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {alumni.map((person, index) => {
                        const imgSrc = getMemberImage(person.firstName);
                        return (
                            <div key={index} className="bg-slate-50 p-6 rounded-lg border border-slate-100 flex flex-col items-center text-center">
                                {imgSrc ? (
                                    <img
                                        src={imgSrc}
                                        alt={person.name}
                                        className={`w-20 h-20 rounded-full object-cover ${person.imagePosition || ''} mb-3 border-2 border-slate-200 shadow-sm`}
                                    />
                                ) : (
                                    <div className="w-20 h-20 bg-slate-200 rounded-full mb-3 opacity-80 flex items-center justify-center text-slate-400 font-semibold text-xl">
                                        {person.name.replace("Dr. ", "").charAt(0)}
                                    </div>
                                )}
                                <h3 className="font-bold text-slate-700">{person.name}</h3>
                                {person.position && <p className="text-slate-500 text-sm mt-1">{person.position}</p>}
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
};

export default Team;
