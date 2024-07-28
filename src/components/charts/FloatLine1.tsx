import {
    Tooltip, ResponsiveContainer, LineChart, Line, Legend,
} from 'recharts';

const newCust = [
    {x: 4, y: 0},
    {x: 5, y: 3},
    {x: 6, y: 6},
    {x: 7, y: 5},
    {x: 8, y: 7},
    {x: 9, y: 8},
    {x: 10, y: 10}

];

const retCust = [
    {x: 4, y: 0},
    {x: 5, y: 1},
    {x: 6, y: 5},
    {x: 7, y: 3},
    {x: 8, y: 5},
    {x: 9, y: 6},
    {x: 10, y: 8}
];

const data = newCust.map((item, index) => ({
    name: `${item.x}`,
    newCust: item.y,
    retCust: retCust[index] ? retCust[index].y : 0
}));

const FloatLine1 = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <Tooltip
                    active={false}
                    wrapperStyle={{
                        backgroundColor: '#fff',
                        border: '1px solid #ccc',
                        borderRadius: '3px',
                        color: '#000',
                        fontWeight: '700'
                    }}
                    contentStyle={{fontSize: '10px'}}
                />
                <Legend
                    wrapperStyle={{
                        fontSize: '10px',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                    }}
                    formatter={(value) => <span style={{color: '#000'}}>{value}</span>}
                    iconType="square"
                    iconSize={10}
                    layout="vertical"
                    height={10}
                />
                <Line
                    type="linear"
                    dataKey="newCust"
                    name="New Customer"
                    stroke="#9068be"
                    strokeWidth={1}
                    dot={false}
                    animationDuration={1}
                />
                <Line
                    type="linear"
                    dataKey="retCust"
                    name="Returning Customer"
                    stroke="#6ed3cf"
                    strokeWidth={1}
                    dot={false}
                    animationDuration={1}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default FloatLine1;


