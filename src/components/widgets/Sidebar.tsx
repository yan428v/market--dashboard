import {useState} from 'react';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

    const handleMenuClick = (menu: string | null) => {
        if (expandedMenu === menu) {
            setExpandedMenu(null);
        } else {
            setExpandedMenu(menu);
        }
    };

    return (
        <div className="nk-sidebar">
            <div className="slimScrollDiv" style={{
                position: 'relative',
                overflowY: 'auto',
                width: 'auto',
                height: '100%',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
            }}>
                <div className="nk-nav-scroll">
                    <ul className="metismenu">
                        <li className="nav-label">Main</li>
                        <li>
                            <Link to="/">
                                <i className="mdi mdi-view-dashboard"></i>
                                <span className="nav-text">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/statistics">
                                <i className="mdi mdi-chart-bar"></i>
                                <span className="nav-text">Statistics</span>
                            </Link>
                        </li>
                        <li className="nav-label">Components</li>
                        <li className={expandedMenu === 'charts' ? 'active' : ''}>
                            <a
                                className="has-arrow"
                                href="#"
                                aria-expanded={expandedMenu === 'charts'}
                                onClick={() => handleMenuClick('charts')}
                            >
                                <i className="mdi mdi-chart-bar"></i>
                                <span className="nav-text">Charts</span>
                                <span className="badge badge-danger nav-badge">8</span>
                            </a>
                            <ul aria-expanded={expandedMenu === 'charts'}
                                className={`collapse${expandedMenu === 'charts' ? ' in' : ''}`}>
                                <li><Link to="/float">Flot</Link></li>
                                <li><Link to="/morris">Morris</Link></li>
                                <li><a href="#">Chartjs</a></li>
                                <li><a href="#">Chartist</a></li>
                                <li><a href="#">Sparkline</a></li>
                                <li><a href="#">Justgage</a></li>
                                <li><a href="#">Knob</a></li>
                                <li><a href="#">Peity</a></li>
                            </ul>
                        </li>
                        <li className={expandedMenu === 'email' ? 'active' : ''}>
                            <a
                                className="has-arrow"
                                href="#"
                                aria-expanded={expandedMenu === 'email'}
                                onClick={() => handleMenuClick('email')}
                            >
                                <i className="mdi mdi-email"></i>
                                <span className="nav-text">Email</span>
                            </a>
                            <ul aria-expanded={expandedMenu === 'email'}
                                className={`collapse${expandedMenu === 'email' ? ' in' : ''}`}>
                                <li><a href="#">Inbox</a></li>
                                <li><a href="#">Read</a></li>
                                <li><a href="#">Compose</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i className="mdi mdi-calendar-check"></i>
                                <span className="nav-text">Calendar</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="mdi mdi-widgets"></i>
                                <span className="nav-text">Widget</span>
                            </a>
                        </li>
                        <li className={expandedMenu === 'components' ? 'active' : ''}>
                            <a
                                className="has-arrow"
                                href="#"
                                aria-expanded={expandedMenu === 'components'}
                                onClick={() => handleMenuClick('components')}
                            >
                                <i className="mdi mdi-diamond"></i>
                                <span className="nav-text">Components</span>
                                <span className="badge badge-success nav-badge">16</span>
                            </a>
                            <ul aria-expanded={expandedMenu === 'components'}
                                className={`collapse${expandedMenu === 'components' ? ' in' : ''}`}>
                                <li><a href="#">Accordion</a></li>
                                <li><a href="#">Alert</a></li>
                                <li><a href="#">Badge</a></li>
                                <li><a href="#">Button</a></li>
                                <li><a href="#">Button Group</a></li>
                                <li><a href="#">Cards</a></li>
                                <li><a href="#">Carousel</a></li>
                                <li><a href="#">Dropdown</a></li>
                                <li><a href="#">List Group</a></li>
                                <li><a href="#">Media Object</a></li>
                                <li><a href="#">Modal</a></li>
                                <li><a href="#">Pagination</a></li>
                                <li><a href="#">Popover</a></li>
                                <li><a href="#">Progressbar</a></li>
                                <li><a href="#">Tab</a></li>
                                <li><a href="#">Typography</a></li>
                                <li><a href="#">Nestedable</a></li>
                                <li><a href="#">Sweetalert</a></li>
                                <li><a href="#">Toastr</a></li>
                                <li><a href="#">Weather</a></li>
                            </ul>
                        </li>
                        <li className={expandedMenu === 'form' ? 'active' : ''}>
                            <a
                                className="has-arrow"
                                href="#"
                                aria-expanded={expandedMenu === 'form'}
                                onClick={() => handleMenuClick('form')}
                            >
                                <i className="mdi mdi-nfc-variant"></i>
                                <span className="nav-text">Form</span>
                            </a>
                            <ul aria-expanded={expandedMenu === 'form'}
                                className={`collapse${expandedMenu === 'form' ? ' in' : ''}`}>
                                <li><a href="#">Basic Forms</a></li>
                                <li><a href="#">Form Addons</a></li>
                                <li><a href="#">Form Validation</a></li>
                                <li><a href="#">Form Editor</a></li>
                                <li><a href="#">Form Pickers</a></li>
                                <li><a href="#">Form Summernote</a></li>
                                <li><a href="#">Form Typehead</a></li>
                                <li><a href="#">Form Xeditable</a></li>
                                <li><a href="#">Form Dropzone</a></li>
                            </ul>
                        </li>
                        <li className={expandedMenu === 'table' ? 'active' : ''}>
                            <a
                                className="has-arrow"
                                href="#"
                                aria-expanded={expandedMenu === 'table'}
                                onClick={() => handleMenuClick('table')}
                            >
                                <i className="mdi mdi-table-edit"></i>
                                <span className="nav-text">Table</span>
                            </a>
                            <ul aria-expanded={expandedMenu === 'table'}
                                className={`collapse${expandedMenu === 'table' ? ' in' : ''}`}>
                                <li><a href="#">Basic</a></li>
                                <li><a href="#">Table Layout</a></li>
                                <li><a href="#">Datatable Basic</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="/public">
                                <i className="mdi mdi-map"></i>
                                <span className="nav-text">Map</span>
                            </a>
                        </li>
                        <li className="nav-label">Extra</li>
                        <li className={expandedMenu === 'pages' ? 'active' : ''}>
                            <a
                                className="has-arrow"
                                href="#"
                                aria-expanded={expandedMenu === 'pages'}
                                onClick={() => handleMenuClick('pages')}
                            >
                                <i className="mdi mdi-google-pages"></i>
                                <span className="nav-text">Pages</span>
                            </a>
                            <ul aria-expanded={expandedMenu === 'pages'}
                                className={`collapse${expandedMenu === 'pages' ? ' in' : ''}`}>
                                <li><a href="#">Login</a></li>
                                <li><a href="#">Register</a></li>
                                <li><a href="#">Lock Screen</a></li>
                                <li><a href="#">Recover</a></li>
                                <li><a href="#">Error 400</a></li>
                                <li><a href="#">Error 403</a></li>
                                <li><a href="#">Error 404</a></li>
                                <li><a href="#">Error 500</a></li>
                                <li><a href="#">Error 503</a></li>
                                <li><a href="#">One Column</a></li>
                                <li><a href="#">Pricing</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">
                                <i className="mdi mdi-square-edit-outline"></i>
                                <span className="nav-text">Invoice Summary</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
