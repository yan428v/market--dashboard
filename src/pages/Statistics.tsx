import ReportingTable from '../components/tables/ReportingTable.tsx';
import {ButtonGroup} from '@mui/material';
import Button from '@mui/material/Button';
import {useState} from 'react';
import DailyReportingTables from '../components/tables/DailyReportingTables.tsx';
import dayjs, {Dayjs} from 'dayjs';
import {DateTimePicker, LocalizationProvider} from '@mui/x-date-pickers';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {DemoContainer} from '@mui/x-date-pickers/internals/demo';

const Statistics = () => {
    const [selectedButton, setSelectedButton] = useState('Без');
    const [intervalFrom, setIntervalFrom] = useState<Dayjs | null>(dayjs('2022-04-17T00:00'));
    const [intervalTo, setIntervalTo] = useState<Dayjs | null>(dayjs('2022-04-17T00:00'));

    function handleClick(button: string) {
        setSelectedButton(button);
    }
    return (
        <div className="content-body">
            <div className="container">
                <div className="sorting-container">
                    <div className="grouping-date">
                        <h4 className="m-r-15 m-b-0 m-t-0">Группировка:</h4>
                        <ButtonGroup className="" variant="contained" size="small" aria-label="Small button group" >
                            <Button
                                onClick={() => handleClick('Без')}
                                color={selectedButton === 'Без' ? 'primary': 'inherit' }
                            >
                                Без
                            </Button>
                            <Button
                                onClick={() => handleClick('По дням')}
                                color={selectedButton === 'По дням' ? 'primary': 'inherit'}
                            >
                                По дням
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="date-picker-container">
                        <Button className="m-r-15" variant="contained">Выбрать период</Button>
                        <LocalizationProvider dateAdapter={AdapterDayjs} >
                            <DemoContainer components={['DateTimePicker']}>
                                <DateTimePicker
                                    label="С даты"
                                    value={intervalFrom}
                                    onChange={(newValue) => setIntervalFrom(newValue)}/>
                            </DemoContainer>
                            <DemoContainer components={['DateTimePicker']}>
                                <DateTimePicker
                                    label="По дату"
                                    value={intervalTo}
                                    onChange={(newValue) => setIntervalTo(newValue)}/>
                            </DemoContainer>
                        </LocalizationProvider>

                    </div>
                </div>
                {selectedButton === 'Без' && <ReportingTable />}
                {selectedButton === 'По дням' && <DailyReportingTables />}
            </div>
        </div>
    );
};

export default Statistics;
