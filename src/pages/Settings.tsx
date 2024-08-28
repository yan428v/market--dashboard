import BasicTabs from '../components/widgets/TabPanel.tsx';

const Settings = () => {
    return (
        <div className="content-body">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-xl-12">
                        <div className="card">
                            <div className="card-body">
                                <BasicTabs></BasicTabs>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
