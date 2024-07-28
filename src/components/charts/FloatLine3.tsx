import {
    Tooltip, ResponsiveContainer, LineChart, Line, Legend,
} from 'recharts';

const newCust = [
    {x: 1, y: 10},
    {x: 2, y: 7},
    {x: 3, y: 8},
    {x: 4, y: 9},
    {x: 5, y: 6},
    {x: 6, y: 5},
    {x: 7, y: 7}

];

const retCust = [
    {x: 1, y: 8},
    {x: 2, y: 5},
    {x: 3, y: 6},
    {x: 4, y: 8},
    {x: 5, y: 4},
    {x: 6, y: 3},
    {x: 7, y: 6}
];

const data = newCust.map((item, index) => ({
    name: `${item.x}`,
    newCust: item.y,
    retCust: retCust[index] ? retCust[index].y : 0
}));

const FloatLine3 = () => {
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
                    stroke="#F27AAC"
                    strokeWidth={1}
                    dot={{
                        r: 3,
                        strokeWidth: 2,
                    }}
                    activeDot={{
                        stroke: '#F27AAC',
                        strokeWidth: 7,
                        r: 7,
                        fill: '#FFF',
                    }}
                    animationDuration={1}
                />
                <Line
                    type="linear"
                    dataKey="retCust"
                    name="Returning Customer"
                    stroke="#6AC3C8"
                    strokeWidth={1.5}
                    dot={{
                        r: 3,
                        strokeWidth: 3,
                    }}
                    activeDot={{
                        stroke: '#6ed3cf',
                        strokeWidth: 7,
                        r: 7,
                        fill: '#FFF',
                    }}
                    animationDuration={1}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default FloatLine3;


