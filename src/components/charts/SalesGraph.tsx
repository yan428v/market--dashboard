import {
    Tooltip, ResponsiveContainer, AreaChart, Area,
} from 'recharts';

const data = [
    {year: '2010', income: 28},
    {year: '2011', income: 35},
    {year: '2012', income: 36},
    {year: '2013', income: 48},
    {year: '2014', income: 46},
    {year: '2015', income: 42},
    {year: '2016', income: 60},

];

const SalesGraph = () => {
    return (
        <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={data}>
                <Tooltip
                    wrapperStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '3px',
                        color: '#000',
                        fontWeight: '700'
                    }}
                    contentStyle={{fontSize: '16px'}}
                    labelFormatter={(label) => `Year: ${label + 2010 }`}
                />
                <Area
                    type="monotone"
                    dataKey="income"
                    strokeWidth={3}
                    stroke="#6ed3cf"
                    fill="#EDFAF9"
                    dot={{
                        r: 5,
                        // strokeWidth: 2,
                    }}
                    animationDuration={300}
                />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default SalesGraph;
