import {Link} from 'react-router-dom';

const Sidebar = () => {
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
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Sidebar;
