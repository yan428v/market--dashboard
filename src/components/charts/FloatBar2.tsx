import { BarChart, Bar, ResponsiveContainer } from 'recharts';

const data = [
    { name: '0', value1: 3, value2: 5 },
    { name: '2', value1: 8, value2: 7 },
    { name: '4', value1: 5, value2: 10 },
    { name: '6', value1: 13, value2: 7 },
    { name: '8', value1: 5, value2: 9 },
    { name: '10', value1: 7, value2: 5 },
    { name: '12', value1: 8, value2: 4 },
    { name: '14', value1: 10, value2: 6 }
];

const FloatBar2 = () => {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data} >
                <Bar dataKey="value1" fill="#6ed3cf" barSize={40} />
                <Bar dataKey="value2" fill="#9068be" barSize={40} />
            </BarChart>
        </ResponsiveContainer>
    );
};

export default FloatBar2;
