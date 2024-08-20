import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

const GraficoEntradasSaidas = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/relatorios/mensal')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const chartData = {
        labels: data.map(d => d.mes),
        datasets: [
            {
                label: 'Entradas',
                data: data.map(d => d.entradas),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Saídas',
                data: data.map(d => d.saidas),
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
            }
        ]
    };

    return (
        <div>
            <Bar data={chartData} />
        </div>
    );
};

export default GraficoEntradasSaidas;
