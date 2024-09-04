import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { statisticsStore } from '../store/StatisticsStore';
import { appStore } from '../store/AppStore';
import Loader from '../components/widgets/Loader';
import { ButtonGroup, Button } from '@mui/material';
import dayjs from 'dayjs';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import StatisticsTable from '../components/tables/StatisticsTable';

const createHeadCells = (extraHeadCells: { id: string; numeric: boolean; disablePadding: boolean; label: string }[] = []) => {
    const baseHeadCells = [
        { id: 'date', numeric: false, disablePadding: false, label: 'Дата' },
        { id: 'clicks', numeric: true, disablePadding: false, label: 'Клики' },
        { id: 'impressions', numeric: true, disablePadding: false, label: 'Показы' },
        { id: 'cost', numeric: true, disablePadding: false, label: 'Расход' },
        { id: 'ctr', numeric: true, disablePadding: false, label: 'CTR(%)' },
        { id: 'avgCpc', numeric: true, disablePadding: false, label: 'CPC' },
        { id: 'conversions', numeric: true, disablePadding: false, label: 'Конверсии' },
        { id: 'costPerConversion', numeric: true, disablePadding: false, label: 'Цена конверсии' },
    ];
    return [...extraHeadCells, ...baseHeadCells];
};

const allStatisticsHeadCells = createHeadCells([
    { id: 'campaignName', numeric: false, disablePadding: true, label: 'Название компании' },
]);
const dailyStatisticsHeadCells = createHeadCells([
    { id: 'dayOfWeek', numeric: false, disablePadding: true, label: 'День недели' },
]);

const Statistics = observer(() => {
    useEffect(() => {
        statisticsStore.setIntervalTo(dayjs().endOf('day'));
        if (statisticsStore.allStatistics.length === 0) {
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
        return <Loader />;
    }

    const isGroupedByDay = statisticsStore.groupingMode === 'По дням';

    return (
        <div className="content-body">
            <div className="container">
                <div className="row">
                    <div className="sorting-container">
                        <div className="grouping-date">
                            <h4 className="m-r-15 m-b-0 m-t-0">Группировка:</h4>
                            <ButtonGroup className="" variant="contained" size="small" aria-label="Small button group">
                                <Button
                                    onClick={() => handleButtonClick('Без')}
                                    color={statisticsStore.groupingMode === 'Без' ? 'primary' : 'inherit'}
                                >
                                    Без
                                </Button>
                                <Button
                                    onClick={() => handleButtonClick('По дням')}
                                    color={statisticsStore.groupingMode === 'По дням' ? 'primary' : 'inherit'}
                                >
                                    По дням
                                </Button>
                            </ButtonGroup>
                        </div>
                        <div className="date-picker-container">
                            <Button className="m-r-15" variant="contained" onClick={handleUpdateStatistics}>
                                Выбрать период
                            </Button>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        label="С даты"
                                        format="DD/MM/YYYY"
                                        value={statisticsStore.intervalFrom}
                                        onChange={(newValue) => {
                                            statisticsStore.setIntervalFrom(newValue);
                                        }}
                                    />
                                </DemoContainer>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker
                                        label="По дату"
                                        format="DD/MM/YYYY"
                                        value={statisticsStore.intervalTo}
                                        onChange={(newValue) => {
                                            statisticsStore.setIntervalTo(newValue);
                                        }}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </div>
                    </div>
                </div>
                <StatisticsTable
                    rows={isGroupedByDay ? statisticsStore.dailyStatistics : statisticsStore.allStatistics}
                    type={isGroupedByDay ? 'daily' : 'all'}
                    headCells={isGroupedByDay ? dailyStatisticsHeadCells : allStatisticsHeadCells}
                />
            </div>
        </div>
    );
});

export default Statistics;//
