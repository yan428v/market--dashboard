import { BarChart, Bar,ResponsiveContainer } from 'recharts';

const data = [
    { name: '0', value: 10 },
    { name: '2', value: 8 },
    { name: '4', value: 5 },
    { name: '6', value: 13 },
    { name: '8', value: 5 },
    { name: '10', value: 17 },
    { name: '12', value: 4 },
    { name: '14', value: 16 }
];

const FloatBar1 = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <Bar  dataKey="value"  fill="#6ed3cf" barSize={40}/>
            </BarChart>
        </ResponsiveContainer>
    );
};

export default FloatBar1;
