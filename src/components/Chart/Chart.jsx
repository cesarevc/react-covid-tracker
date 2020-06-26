import React, { useState, useEffect } from 'react';
// fetch api 
import { fetchDailyData } from '../../api';
// charts resources 
import { Line, Bar } from 'react-chartjs-2';
// css styles
import styles from './Chart.module.css';


function Charts ({ data: { confirmed, recovered, deaths }, country}) {

    const [dailyData, setDailyData] = useState([]);

    const fetchAPI = async () => {
        setDailyData(await fetchDailyData());
    }

    useEffect(() => {
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData.length !== 0
        ?
        <Line
            data= {{
                labels: dailyData.map(({date}) => date),
                datasets: [
                    {
                        data: dailyData.map(({confirmed}) => confirmed),
                        label: 'Infected',
                        borderColor: '#3333ff',
                        fill: true
                    },
                    {
                        data: dailyData.map(({deaths}) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.5)',
                        fill: true
                    }
                ],
            }} 
        /> : null
    );
    
    const barChart = (
        confirmed 
        ?
         <Bar  
            data={{
                labels: [ 
                    'infected', 
                    'Deaths',
                    'Recovered' 
                ],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        'rgba(0, 0, 255, 0.5)',
                        'rgba(255, 0, 0, 0.5)',
                        'rgba(0, 255, 0, 0.5)'
                    ],
                    data: [
                        confirmed.value,
                        deaths.value,
                        recovered.value
                    ]
                }]
            }}

            options={{
                legend: { display: false },
                title: { display: true, text: `Current state in ${country}` }
            }}
         /> 
        : null
    )

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    );
}

export default Charts;