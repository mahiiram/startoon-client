import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { adminAction } from '../../Store';
import Navbar from '../Navbar';

const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
        return (
            <div className="custom-tooltip">
                <p className="label">{`Email: ${label}`}</p>
                <p className="desc">{`Count: ${payload[0].value}`}</p>
            </div>
        );
    }

    return null;
};

const Admincharts = () => {
    const [chart, setChart] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get('https://startoon-server-vbz8.onrender.com/api/admin/getalluser')
            .then(response => {
                console.log(response.data)
                setChart(response.data);
            }).then(() => {
                dispatch(adminAction.login())
            })
            .catch(error => {
                console.error('Error fetching user:', error);
            });
    }, []);
    const yearData = chart.map((item) => ({
        year: new Date(item.lastLoginDate).getFullYear(),
        month: new Date(item.lastLoginDate).getMonth(),
        count: item.count,
    }));

    const yearDataGrouped = yearData.reduce((acc, curr) => {
        const key = `${curr.year}-${curr.month}`;
        if (!acc[key]) {
            acc[key] = { year: curr.year, month: curr.month, count: 0 };
        }
        acc[key].count += curr.count;
        return acc;
    }, {});

    const yearDataSorted = Object.values(yearDataGrouped).sort((a, b) => b.count - a.count);

    return (
        <div>
           <Navbar />
            <div className='m-5'>
            <BarChart
                width={600}
                height={300}
                data={yearDataSorted}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="count" fill="#8884d8" />
            </BarChart>
            </div>
        </div>

    );
};

export default Admincharts;