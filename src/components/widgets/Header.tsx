import {FC, useEffect, useRef, useState} from 'react';
import {Link} from 'react-router-dom';
import {authStore} from '../../store/AuthStore.ts';
import { useNavigate } from 'react-router-dom';
// import {appStore} from "../../store/AppStore.tsx";

interface HeaderProps {
    toggleSidebar: () => void;
}

const Header: FC<HeaderProps> = ({ toggleSidebar } ) => {
    const navigate = useNavigate();

    const [activeIcon, setActiveIcon] = useState<string | null>(null);
    const [, setMenus] = useState({
        search: false,
        notifications: false,
        messages: false,
        progress: false,
        profile: false,
    });

    const menuRef = useRef<HTMLDivElement | null>(null);

    const handleIconClick = (icon:string | null) => {
        setActiveIcon(icon);
        setMenus({
            search: icon === 'search',
            notifications: icon === 'notifications',
            messages: icon === 'messages',
            progress: icon === 'progress',
            profile: icon === 'profile',
        });
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setMenus({
                search: false,
                notifications: false,
                messages: false,
                progress: false,
                profile: false,
            });
            setActiveIcon(null);
        }
    };

    const handleLogout = () => {
        authStore.clearUser();
        authStore.clearToken();
        navigate('/signin');
    };

    const userEmail  = localStorage.getItem('email');

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    return (
        <div className="header" >
            <div className="nav-header">
                <div className="brand-logo">
                    <Link to="/">
                        <b>
                            <img src="/images/logo.png" alt="" />
                        </b>
                        <span className="brand-title">
                            <img src="/images/logo-text.png" alt="" />
                        </span>
                    </Link>
                </div>
                <div className="nav-control" onClick={toggleSidebar}>
                    <div className="hamburger">
                        <span className="line"></span>
                        <span className="line"></span>
                        <span className="line"></span>
                    </div>
                </div>
            </div>
            <div className="header-content">
                <div className="header-right" ref={menuRef}>
                    <ul>
                        <li className={`icons ${activeIcon === 'profile' ? 'active' : ''}`}
                            onClick={() => handleIconClick('profile')}>
                            <a href="#">
                                <i className="mdi mdi-account f-s-20" aria-hidden="true"></i>
                            </a>
                            <div className="drop-down dropdown-profile">
                                <div className="dropdown-content-body">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="mdi mdi-account"></i>
                                                <span>{userEmail}</span>
                                            </a>
                                        </li>
                                        <li>
                                            <Link to="/settings">
                                                <i className="mdi mdi-settings"></i>
                                                <span>Setting</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="/" onClick={handleLogout}>
                                                <i className="icon-power"></i>
                                                <span>Logout</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
