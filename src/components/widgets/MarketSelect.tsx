import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {observer} from 'mobx-react-lite';
import {marketStore} from '../../store/MarketStore.ts';
import {useEffect} from 'react';
import {runInAction} from 'mobx';
import {statisticsStore} from '../../store/StatisticsStore.ts';
import {chartStore} from '../../store/ChartStore.ts';

const MarketSelect = observer(() => {

    useEffect(() => {
        const storedMarkets = localStorage.getItem('markets');
        const storedCurrentMarket = localStorage.getItem('currentMarket');

        runInAction(() => {
            if (storedMarkets) {
                marketStore.markets = JSON.parse(storedMarkets);
            }
            if (storedCurrentMarket) {
                marketStore.currentMarket = JSON.parse(storedCurrentMarket);
            }
        });

    }, []);

    const storedMarkets = marketStore.markets;
    const storedCurrentMarket = marketStore.currentMarket?.marketId;

    const handleSetCurrentMarket = (event: SelectChangeEvent<number>) => {
        const marketId = Number(event.target.value);
        const market = marketStore.markets.find((market) => market.marketId === marketId);
        if (market) {
            marketStore.setCurrentMarket(market);
            statisticsStore.loadStatistics();
            chartStore.loadChartStatistics();
        }
    };
    return (
        <FormControl sx={{ m: 1, minWidth: 180, maxWidth: 220,}} fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Market</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={storedCurrentMarket ?? storedMarkets[0]?.marketId ?? ''}
                label="Market"
                onChange={handleSetCurrentMarket}
            >
                {storedMarkets.map((market) => (
                    <MenuItem sx={{ maxWidth: 250}}
                        key={market.marketId}
                        value={market.marketId}
                    >
                        {market.marketName}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
});
export default MarketSelect;
