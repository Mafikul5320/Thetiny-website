import { Outlet } from 'react-router';
import Navber from './Navber';
import Footer from './Footer';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navber />
            <div className="flex-1 pt-16">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;