import Button from '@mui/material/Button';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {appStore} from '../store/AppStore.tsx';
import {chartStore} from '../store/ChartStore.ts';
import Loader from '../components/widgets/Loader.tsx';
import {observer} from 'mobx-react-lite';
import {useEffect} from 'react';
import dayjs from 'dayjs';
import SalesChart from '../components/charts/SalesChart.tsx';

const Dashboard = observer(() => {
    useEffect(() => {
        chartStore.setIntervalTo(dayjs().endOf('day'));
    }, []);
    function handleUpdateStatistics() {
        chartStore.loadChartStatistics();
    }

    if (appStore.isLoading) {
        return <Loader/>;
    }
    return (
        <div className="content-body">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">График</h4>
                                <div className="date-picker-container">
                                    <Button
                                        className="m-r-15"
                                        variant="contained"
                                        onClick={handleUpdateStatistics}
                                    >
                                        Выбрать период
                                    </Button>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker
                                                label="С даты"
                                                format="DD/MM/YYYY"
                                                value={chartStore.intervalFrom}
                                                onChange={(newValue) => {
                                                    chartStore.setIntervalFrom(newValue);
                                                }}/>
                                        </DemoContainer>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker
                                                label="По дату"
                                                format="DD/MM/YYYY"
                                                value={chartStore.intervalTo}
                                                onChange={(newValue) => {
                                                    chartStore.setIntervalTo(newValue);
                                                }}/>
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </div>
                                <SalesChart/>
                                <h4  className=" f-s-36">
                                    Итого за период:
                                </h4>
                                <div className="total-values-container m-t-20">
                                    <div className="total-conversion-container ">
                                        <h4 className="card-title f-s-26">Конверсии:</h4>
                                        <div className="f-s-30 f-w-500">{chartStore.chartStatistics?.totalStatistics.conversions}</div>
                                    </div>
                                    <div className="total-click-container ">
                                        <h4 className="card-title f-s-26">Клики:</h4>
                                        <div className="f-s-30 f-w-500">{chartStore.chartStatistics?.totalStatistics.clicks}</div>
                                    </div>
                                    <div className="total-cost-container ">
                                        <h4 className="card-title f-s-26">Цена:</h4>
                                        <div className="f-s-30 f-w-500">{chartStore.chartStatistics?.totalStatistics.cost}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default Dashboard;
