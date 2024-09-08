import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {observer} from 'mobx-react-lite';
import {marketStore} from '../../store/MarketStore.ts';

const MarketSelect = observer(() => {


    const handleSetCurrentMarket = (event: SelectChangeEvent<number>) => {
        const marketId = Number(event.target.value);
        const market = marketStore.markets.find((market) => market.marketId === marketId);
        if (market) {
            marketStore.setCurrentMarket(market);
        }
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 180}} fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Market</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={marketStore.currentMarket?.marketId ?? ''}
                label="Market"
                onChange={handleSetCurrentMarket}
            >
                {marketStore.markets.map((market) => (
                    <MenuItem
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
