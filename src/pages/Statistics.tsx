import ReportingTable from '../components/tables/ReportingTable.tsx';
import {useEffect} from 'react';
import DailyReportingTables from '../components/tables/DailyReportingTables.tsx';
import {DatePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';
import {statisticsStore} from '../store/StatisticsStore.ts';
import {observer} from 'mobx-react-lite';
import {appStore} from '../store/AppStore.tsx';
import Loader from '../components/widgets/Loader.tsx';
import {ButtonGroup} from '@mui/material';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
// import dayjs from 'dayjs';


const Statistics = observer(() => {
    useEffect(() => {
        statisticsStore.setIntervalTo(dayjs().endOf('day'));
        if(statisticsStore.allStatistics.length === 0) {
            (async () => {
                appStore.setIsLoading(true);
                await statisticsStore.loadAllStatistics();
                await statisticsStore.loadDailyStatistics();
                appStore.setIsLoading(false);
            })();
        }
    }, []);

    function handleButtonClick(button: string) {
        statisticsStore.setGroupingMode(button);
    }

    function handleUpdateStatistics() {
        appStore.setIsLoading(true);
        (async () => {
            await statisticsStore.loadAllStatistics();
            await statisticsStore.loadDailyStatistics();
            appStore.setIsLoading(false);
        })();
    }


    if (appStore.isLoading) {
        return <Loader/>;
    }
    return (
        <div className="content-body">
            <div className="container">
                <div className="sorting-container">
                    <div className="grouping-date">
                        <h4 className="m-r-15 m-b-0 m-t-0">Группировка:</h4>
                        <ButtonGroup className="" variant="contained" size="small" aria-label="Small button group" >
                            <Button
                                onClick={() => handleButtonClick('Без')}
                                color={statisticsStore.groupingMode === 'Без' ? 'primary': 'inherit' }
                            >
                                Без
                            </Button>
                            <Button
                                onClick={() => handleButtonClick('По дням')}
                                color={statisticsStore.groupingMode === 'По дням' ? 'primary': 'inherit'}
                            >
                                По дням
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="date-picker-container">
                        <Button
                            className="m-r-15"
                            variant="contained"
                            onClick={handleUpdateStatistics}

                        >
                            Выбрать период
                        </Button>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    label="С даты"
                                    format="DD/MM/YYYY"
                                    value={statisticsStore.intervalFrom}
                                    onChange={(newValue) => {
                                        statisticsStore.setIntervalFrom(newValue);
                                    }}/>
                            </DemoContainer>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker
                                    label="По дату"
                                    format="DD/MM/YYYY"
                                    value={statisticsStore.intervalTo}
                                    onChange={(newValue) => {
                                        statisticsStore.setIntervalTo(newValue);
                                    }}/>
                            </DemoContainer>
                        </LocalizationProvider>

                    </div>
                </div>
                {statisticsStore.groupingMode === 'Без' && <ReportingTable />}
                {statisticsStore.groupingMode === 'По дням' && <DailyReportingTables />}
            </div>
        </div>
    );
});

export default Statistics;
