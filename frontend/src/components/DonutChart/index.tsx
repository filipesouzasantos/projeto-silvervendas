import axios from 'axios';
import { useEffect, useState } from 'react';
import Charts from 'react-apexcharts';
import { BASE_URL } from 'utils/resquests';
import { SaleSum } from 'types/sale';

type ChartData = {
    labels: string[];
    series: number[];
}
function DonutChart() {

    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amaunt-by-seller`).then(response => {
            const data = response.data as SaleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.saleAllSum);

            setChartData({ labels: myLabels, series: mySeries });
        })
    }, []);

    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Charts
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;


