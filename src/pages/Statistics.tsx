import ReportingTable from '../components/tables/ReportingTable.tsx';
import {ButtonGroup} from '@mui/material';
import Button from '@mui/material/Button';
import {useState} from 'react';
import DailyReportingTables from '../components/tables/DailyReportingTables.tsx';

const Statistics = () => {
    const [selectedButton, setSelectedButton] = useState('Без');

    function handleClick(button: string) {
        setSelectedButton(button);
    }

    return (
        <div className="content-body">
            <div className="container">
                <div className="d-flex m-l-20 m-b-15 d-flex align-items-center">
                    <h4 className="m-r-15 m-b-0 m-t-0">Группировка:</h4>
                    <ButtonGroup className="" variant="contained" size="small" aria-label="Small button group" >
                        <Button
                            onClick={() => handleClick('Без')}
                            color={selectedButton === 'Без' ? 'inherit' : 'primary'}
                        >
                            Без
                        </Button>
                        <Button
                            onClick={() => handleClick('По дням')}
                            color={selectedButton === 'По дням' ? 'inherit' : 'primary'}
                        >
                            По дням
                        </Button>
                    </ButtonGroup>
                </div>
                {selectedButton === 'Без' && <ReportingTable />}
                {selectedButton === 'По дням' && <DailyReportingTables />}
            </div>
        </div>
    );
};

export default Statistics;
