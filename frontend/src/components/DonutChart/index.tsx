import axios from 'axios';
import Charts from 'react-apexcharts';
import { BASE_URL } from 'types/resquests';
import { SaleSum } from 'types/sale';

type ChartData = {
    labels: string[];
    series: number[];
}
function DonutChart() {

    //error form
    let chartData: ChartData = { labels: [], series: [] };


    //const mockData = {
    //     series: [477138, 499928, 444867, 220426, 473088],
    //      labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //  }

    axios.get(`${BASE_URL}/sales/amaunt-by-seller`).then(response => {
        const data = response.data as SaleSum[];
        const myLabels  = data.map(x=> x.sellerName);
        const mySeries = data.map(x => x.saleAllSum);

        chartData = { labels: myLabels, series: mySeries }
        console.log(chartData);
    })

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


