import {Outlet} from 'react-router-dom';
import Header from '../components/widgets/Header.tsx';
import Footer from '../components/widgets/Footer.tsx';
import Sidebar from '../components/widgets/Sidebar.tsx';
import {useState} from 'react';
const Layout = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <div className={`v-light body vertical-nav fix-header fix-sidebar ${isSidebarOpen ? 'mini-nav' : ''}`}>
            <Header toggleSidebar={toggleSidebar}></Header>
            <Sidebar></Sidebar>
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Layout;
