import { Outlet } from 'react-router';


const MainLayout = () => {
    return (
        <div>
            <small>Hello Bangla Puzzle Limited</small>
            <div className=' min-h-[calc(100vh-562px)]'>
                <Outlet></Outlet>
            </div>


        </div>
    );
};

export default MainLayout;