import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import {chartStore} from '../../store/ChartStore.ts';
import {observer} from 'mobx-react-lite';
import dayjs from 'dayjs';

const SalesGraph1 = observer(() => {
    const rawData = chartStore.chartStatistics?.dailyStatistics;
    const data = rawData?.map(item => ({
        ...item,
        date: dayjs(item.date).format('DD.MM')
    }));

    type NameType = 'conversions' | 'cost' | 'clicks';
    const translations: Record<NameType, string> = {
        conversions: 'Конверсии',
        cost: 'Стоимость',
        clicks: 'Клики'
    };
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart
                data={data}
                margin={{right: 5, left: 20 }}
            >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false}/>
                <XAxis dataKey="date" />
                <YAxis tickCount={3} hide={true}/>
                <Tooltip
                    labelFormatter={(label) => `Дата: ${label}`}
                    formatter={(value, name) => {
                        const translatedName = translations[name as NameType];
                        return [value, translatedName];
                    }}
                />
                <Line type="monotone" dataKey="conversions" stroke="blue" strokeWidth={2} />
                <Line type="monotone" dataKey="cost" stroke="green" strokeWidth={2} activeDot={{ r: 5 }} />
                <Line type="monotone" dataKey="clicks" stroke="red" strokeWidth={2} />
            </LineChart>
        </ResponsiveContainer>
    );
});

export default SalesGraph1;
