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
                <div className="header-left" ref={menuRef}>
                    <ul>
                        <li className={`icons position-relative ${activeIcon === 'search' ? 'active' : ''}`}
                            onClick={() => handleIconClick('search')}>
                            <a href="#">
                                <i className="icon-magnifier f-s-16"></i>
                            </a>
                            <div className="drop-down animate__animated animate__bounceInDown">
                                <div className="dropdown-content-body">
                                    <div className="header-search">
                                        <form action="#">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Search" />
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <i className="icon-magnifier"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="header-right" ref={menuRef}>
                    <ul>
                        <li className={`icons ${activeIcon === 'notifications' ? 'active' : ''}`}
                            onClick={() => handleIconClick('notifications')}>
                            <a href="#">
                                <i className="mdi mdi-bell f-s-18" aria-hidden="true"></i>
                                {/*<div className="pulse-css"></div>*/}
                            </a>
                            <div className="drop-down animate__animated animate__bounceInDown">
                                <div className="dropdown-content-heading">
                                    <span className="text-left">Recent Notifications</span>
                                </div>
                                <div className="dropdown-content-body"><ul>
                                    <li>
                                        <a href="#">
                                            <img className="pull-left m-r-10 avatar-img" src="/images/avatar/1.jpg" alt="" />
                                            <div className="notification-content">
                                                <small className="notification-timestamp pull-right">02:34 PM</small>
                                                <div className="notification-heading">Mr. Saifun</div>
                                                <div className="notification-text">5 members joined today</div>
                                            </div>
                                        </a>

                                    </li>
                                    <li>
                                        <a href="#">
                                            <img className="pull-left m-r-10 avatar-img" src="/images/avatar/2.jpg" alt="" />
                                            <div className="notification-content">
                                                <small className="notification-timestamp pull-right">02:34 PM</small>
                                                <div className="notification-heading">Mariam</div>
                                                <div className="notification-text">likes a photo of you</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img className="pull-left m-r-10 avatar-img" src="/images/avatar/3.jpg" alt="" />
                                            <div className="notification-content">
                                                <small className="notification-timestamp pull-right">02:34 PM</small>
                                                <div className="notification-heading">Tasnim</div>
                                                <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img className="pull-left m-r-10 avatar-img" src="/images/avatar/4.jpg" alt="" />
                                            <div className="notification-content">
                                                <small className="notification-timestamp pull-right">02:34 PM</small>
                                                <div className="notification-heading">Ishrat Jahan</div>
                                                <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="text-center">
                                        <a href="#" className="more-link">See All</a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </li>
                        <li className={`icons ${activeIcon === 'messages' ? 'active' : ''}`}
                            onClick={() => handleIconClick('messages')}>
                            <a href="#">
                                <i className="mdi mdi-comment f-s-18" aria-hidden="true"></i>
                                {/*<div className="pulse-css"></div>*/}
                            </a>
                            <div className="drop-down animate__animated animate__bounceInDown">
                                <div className="dropdown-content-heading">
                                    <span className="text-left">2 New Messages</span>
                                </div>
                                <div className="dropdown-content-body">
                                    <ul>
                                        <li className="notification-unread">
                                            <a href="#">
                                                <img className="pull-left m-r-10 avatar-img" src="/images/avatar/1.jpg" alt="" />
                                                <div className="notification-content">
                                                    <small className="notification-timestamp pull-right">02:34 PM</small>
                                                    <div className="notification-heading">Saiul Islam</div>
                                                    <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="notification-unread">
                                            <a href="#">
                                                <img className="pull-left m-r-10 avatar-img" src="/images/avatar/2.jpg" alt="" />
                                                <div className="notification-content">
                                                    <small className="notification-timestamp pull-right">02:34 PM</small>
                                                    <div className="notification-heading">Ishrat Jahan</div>
                                                    <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img className="pull-left m-r-10 avatar-img" src="/images/avatar/3.jpg" alt="" />
                                                <div className="notification-content">
                                                    <small className="notification-timestamp pull-right">02:34 PM</small>
                                                    <div className="notification-heading">Saiul Islam</div>
                                                    <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img className="pull-left m-r-10 avatar-img" src="/images/avatar/4.jpg" alt="" />
                                                <div className="notification-content">
                                                    <small className="notification-timestamp pull-right">02:34 PM</small>
                                                    <div className="notification-heading">Ishrat Jahan</div>
                                                    <div className="notification-text">Hi Teddy, Just wanted to let you ...</div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="text-center">
                                            <a href="#" className="more-link">See All</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className={`icons ${activeIcon === 'progress' ? 'active' : ''}`}
                            onClick={() => handleIconClick('progress')}>
                            <a href="#">
                                <i className="mdi mdi-crosshairs-gps f-s-18" aria-hidden="true"></i>
                                {/*<div className="pulse-css"></div>*/}
                            </a>
                            <div className="drop-down dropdown-task animate__animated animate__bounceInDown">
                                <div className="dropdown-content-heading">
                                    <span className="text-left">Task Update</span>
                                </div>
                                <div className="dropdown-content-body">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <div className="notification-content">
                                                    <small className="notification-timestamp pull-right">85% Complete</small>
                                                    <div className="notification-heading">Task One</div>
                                                    <div className="progress">
                                                        <div style={{ width: '85%' }}
                                                            className="progress-bar progress-bar-success"></div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="notification-content">
                                                    <small className="notification-timestamp pull-right">60% Complete</small>
                                                    <div className="notification-heading">Task Two</div>
                                                    <div className="progress">
                                                        <div style={{ width: '60%' }}
                                                            className="progress-bar progress-bar-primary"></div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="notification-content">
                                                    <small className="notification-timestamp pull-right">25% Complete</small>
                                                    <div className="notification-heading">Task Three</div>
                                                    <div className="progress">
                                                        <div style={{ width: '25%' }}
                                                            className="progress-bar progress-bar-warning"></div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <div className="notification-content">
                                                    <small className="notification-timestamp pull-right">75% Complete</small>
                                                    <div className="notification-heading">Task Four</div>
                                                    <div className="progress">
                                                        <div style={{ width: '75%' }}
                                                            className="progress-bar progress-bar-danger"></div>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="text-center">
                                            <a href="#" className="more-link">See All</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className={`icons ${activeIcon === 'profile' ? 'active' : ''}`}
                            onClick={() => handleIconClick('profile')}>
                            <a href="#">
                                <i className="mdi mdi-account f-s-20" aria-hidden="true"></i>
                            </a>
                            <div className="drop-down dropdown-profile animate__animated animate__bounceInDown">
                                <div className="dropdown-content-body">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="mdi mdi-email"></i>
                                                <span>Inbox</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="mdi mdi-settings"></i>
                                                <span>Setting</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="icon-lock"></i>
                                                <span>Lock Screen</span>
                                            </a>
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
