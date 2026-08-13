import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const PageLayout = ({ children }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar />
            <main className={`flex-grow w-full ${isHome ? '' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default PageLayout;
