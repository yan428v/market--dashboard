import FloatBar1 from '../components/charts/FloatBar1.tsx';
import FloatBar2 from '../components/charts/FloatBar2.tsx';
import FloatLine4 from '../components/charts/FloatLine4.tsx';
import FloatLine3 from '../components/charts/FloatLine3.tsx';
import FloatLine2 from '../components/charts/FloatLine2.tsx';
import FloatLine1 from '../components/charts/FloatLine1.tsx';

const MorrisChartPage = () => {
    return (
        <div className="content-body">
            <div className="container">
                <div className="row page-titles">
                    <div className="col p-0">
                        <h4>Hello, <span>Welcome here</span></h4>
                    </div>
                    <div className="col p-0">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Chart</a></li>
                            <li className="breadcrumb-item active">Morris</li>
                        </ol>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Donut Chart</h4>
                                <div><FloatBar2></FloatBar2></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Visit Chart</h4>
                                <div><FloatBar1></FloatBar1></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Area Chart</h4>
                                <div><FloatLine4></FloatLine4></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Line Chart</h4>
                                <div><FloatLine3></FloatLine3></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Line Chart</h4>
                                <div><FloatLine2></FloatLine2></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Bar Chart</h4>
                                <div><FloatLine1></FloatLine1></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MorrisChartPage;
